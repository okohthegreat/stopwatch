function play(){
    let playButton = document.getElementById("play");
    if (playButton.src.match('./svg/play.svg')){
        playButton.src = './svg/pause.svg'
    }
    else{
        playButton.src = './svg/play.svg'
    }
}