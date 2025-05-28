let slideIndex = 1;

document.addEventListener("DOMContentLoaded", (event) => {
    var song = document.getElementById("song");

    song.volume = 0.4;
    
    const progressEl = document.querySelector('input[type="range"]');
    let mouseDownOnSlider = false;

    song.addEventListener("loadeddata", () => {
    progressEl.value = 0;
    });
    song.addEventListener("timeupdate", () => {
    if (!mouseDownOnSlider) {
        progressEl.value = song.currentTime / song.duration * 100;
    }
    });

    progressEl.addEventListener("change", () => {
    const pct = progressEl.value / 100;
    song.currentTime = (song.duration || 0) * pct;
    });
    progressEl.addEventListener("mousedown", () => {
    mouseDownOnSlider = true;
    });
    progressEl.addEventListener("mouseup", () => {
    mouseDownOnSlider = false;
    });

    showSlides(slideIndex);
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

// Carousel:


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}