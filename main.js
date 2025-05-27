
document.addEventListener("DOMContentLoaded", (event) => {
    var song = document.getElementById("song");
    song.volume = 0.4;
});

function PlayAudio() {
    var song = document.getElementById("song");
    var songButton = document.getElementById("songButton");
    song.play();
    songButton.style.backgroundImage = "url('images/pause-button.png')";
    songButton.removeAttribute("onclick");
    songButton.onclick = PauseAudio;
}

function PauseAudio() {
    var song = document.getElementById("song");
    var songButton = document.getElementById("songButton");
    song.pause();
    songButton.style.backgroundImage = "url('images/play-button.png')";
    songButton.removeAttribute("onclick");
    songButton.onclick = PlayAudio;
}

function Timer() {
    const daysCount = document.getElementById("daysCount");
    const hoursCount = document.getElementById("hoursCount");
    const minutesCount = document.getElementById("minutesCount");

    var targetDate = new Date('July 12 2025 21:00:00');
    targetDate = targetDate.getTime();

    let currentDate = new Date(new Date().toLocaleString("en-US",{timeZone: `${'America/Argentina/Buenos_Aires'}`})).getTime();
    
    const distance = targetDate - currentDate;
    var days = Math.floor(distance / 1000 / 60 / 60 / 24);
    var hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    var minutes = Math.floor(distance / 1000 / 60) % 60;

    if (days.toString().length < 2) 
        days = '0' + days;
    if (hours.toString().length < 2) 
        hours = '0' + hours;
    if (minutes.toString().length < 2) 
        minutes = '0' + minutes;

    daysCount.innerHTML = days;
    hoursCount.innerHTML = hours;
    minutesCount.innerHTML = minutes;

    if(distance < 0) {
        daysCount.innerHTML = "00";
        hoursCount.innerHTML = "00";
        minutesCount.innerHTML = "00";
    }
}

setInterval(Timer, 1000)

function OpenFabiWhatsapp() {
    location.href = "https://wa.link/bm0cbi";
}

function OpenFranWhatsapp() {
    location.href = "https://wa.link/wpft8r";
}

function OpenAlbum() {
    location.href = "https://drive.google.com/drive/folders/1lGgQVEfsODs-f7jQ7VEk3rqm_g84OSzp?hl=es";
}