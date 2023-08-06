let minutes = 0;
let seconds = 0;
let nano = 0;

let getMinutes = document.querySelector('.minute');
let getSeconds = document.querySelector('.seconds');
let getNano = document.querySelector('.nano');

let btnStart = document.querySelector('.play');
let btnStop = document.querySelector('.stop');
let btnReset = document.querySelector('.reset');

let interval;


btnStart.addEventListener('click', ()=>{
  interval = setInterval(startTimer, 10);
})

btnStop.addEventListener('click', ()=>{
    clearInterval(interval);
})

btnReset.addEventListener('click', ()=>{
    clearInterval(interval);
    nano = '00';
    seconds = '00';
    minutes = '00';
    getNano.innerHTML = nano;
    getSeconds.innerHTML = seconds;
    getMinutes.innerHTML = minutes;
})



function startTimer (){
    nano++
    if(nano <= 9){
        getNano.innerHTML = '0' + nano;
    }

    if(nano > 9){
        getNano.innerHTML = nano;
    }

    if(nano > 99){
        seconds++
        getSeconds.innerHTML = '0' + seconds;
        nano = 0;
        getNano.innerHTML = '0' + 0; 
    }

    if (seconds > 9){
        getSeconds.innerHTML = seconds;
    }

    if (seconds > 59){
        minutes++
        getMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0; 
        nano = 0;
        getNano.innerHTML = '0' + 0; 
    }
}





























function play(){
    let playButton = document.getElementById("play");
    if (playButton.src.match('./svg/play.svg')){
        playButton.src = './svg/pause.svg'
    }
    else{
        playButton.src = './svg/play.svg'
    }
}
