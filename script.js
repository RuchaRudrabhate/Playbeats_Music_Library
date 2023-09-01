console.log("welcome to play beats");
//initialise the variables
let songIndex = 0;

let audioElement = new Audio('still with you.mp3');
let masterPlay = document.getElementById('masterPlay');             //faw icons 's div id 
let myprogressbar = document.getElementById('myprogressBar');       //progress bar 's div id
let gif = document.getElementById('gif');                           //song gif
let mastersongname= document.getElementById('mastersongname');      //master song name
let songitems = Array.from(document.getElementsByClassName('songitem'));        //songlist
// let ele = document.getElementsByTagName('img');
let songs = [
    {
        songname:"Still with you", filepath:"C:/Users/arudr/OneDrive/Desktop/rucha play beats new website/0.mp3",coverpath:"C:/Users/arudr/OneDrive/Desktop/rucha play beats new website/still with you.jpg"},
    {
        songname:"lily", filepath:"C:/Users/arudr/OneDrive/Desktop/rucha play beats new website/1.mp3",coverpath:"C:/Users/arudr/OneDrive/Desktop/rucha play beats new website/lily.jpg"},
    {
        songname:"unstoppable", filepath:"C:/Users/arudr/OneDrive/Desktop/rucha play beats new website/2.mp3",coverpath:"C:/Users/arudr/OneDrive/Desktop/rucha play beats new website/sia.jpg"},
        
    {
        songname:"Senorita", filepath:"C:/Users/arudr/OneDrive/Desktop/rucha play beats new website/3.mp3",coverpath:"C:/Users/arudr/OneDrive/Desktop/rucha play beats new website/senorita.jpg"},
    {
        songname:"Blood Sweat And tears", filepath:"C:/Users/arudr/OneDrive/Desktop/rucha play beats new website/4.mp3",coverpath:"C:/Users/arudr/OneDrive/Desktop/rucha play beats new website/bst.jpg"},
    {
        songname:"Najaa", filepath:"C:/Users/arudr/OneDrive/Desktop/rucha play beats new website/5.mp3",coverpath:"C:/Users/arudr/OneDrive/Desktop/rucha play beats new website/najaa.jpg"},
    {
        songname:"Ranjha", filepath:"C:/Users/arudr/OneDrive/Desktop/rucha play beats new website/6.mp3",coverpath:"C:/Users/arudr/OneDrive/Desktop/rucha play beats new website/ranjha.jpg"},
    {
        songname:"ratan lambiyan", filepath:"C:/Users/arudr/OneDrive/Desktop/rucha play beats new website/7.mp3",coverpath:"C:/Users/arudr/OneDrive/Desktop/rucha play beats new website/r.jpg"},    
]
songitems.forEach((ele,i)=>{
    console.log(ele ,i)
ele.getElementsByTagName("img")[0].src =songs[i].coverpath;
ele.getElementsByClassName("songname").innerText = songs[i].songname; 

})



//handle play/pause click

masterPlay.addEventListener('click',() => {
    if (audioElement.paused|| audioElement.currentTime <=0) {
     audioElement.play();   
     masterPlay.classList.remove('fa-circle-play')            //if already in paused state // make play
     masterPlay.classList.add('fa-circle-pause')
     gif.style.opacity = 1;
    }
    else{
        audioElement.pause();   
     masterPlay.classList.remove('fa-circle-pause')
     masterPlay.classList.add('fa-circle-play')                      //if already in play state //make pause
     gif.style.opacity = 0;
    }
}
)

// Listen to Events
// for progress element at bottom


audioElement.addEventListener('timeupdate' , ()=>{
    // console.log('timeupdate')
    //update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration) *100);
    // console.log(progress);
    myprogressbar.value = progress;
}
);

myprogressbar.addEventListener('change', ()=>{
     
    audioElement.currentTime = myprogressbar.value * audioElement.duration /100;
})


// after play button changes to play 
const makeAllPlays = ()=>{
      
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        
        element.classList.add('fa-circle-play');  
    })

}

// song playing 

Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click',(e) => {
        
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src= `${songIndex}.mp3`;
        mastersongname.innerText = songs[songIndex].songname;
        gif.style.opacity = 1;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })

})
document.getElementById('previous').addEventListener('click',()=> {
    if(songIndex >= 7){
        songIndex = 6                                   //previous button
    }
    else if(songIndex <=0){
        songIndex =7
    }
    else{
        songIndex -= 1
    }
        audioElement.src= `${songIndex}.mp3`;
        mastersongname.innerText = songs[songIndex].songname;
        gif.style.opacity = 1;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')

})
document.getElementById('next').addEventListener('click',()=> {
    if(songIndex <= 0){
        songIndex = 1                                                   //next button
    }
    else if(songIndex >= 7){
        songIndex =0
    }
    else{
        songIndex += 1
    }
        audioElement.src= `${songIndex}.mp3`;
        mastersongname.innerText = songs[songIndex].songname;
        gif.style.opacity = 1;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')

})

