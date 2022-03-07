const slider = document.querySelector("#slider");
const sliderPos = document.getElementById("slider").getBoundingClientRect();
const fader = document.querySelector("#fader");
let pos = sliderPos.left;

function slideContent(link) {
    const about = document.querySelector("#about");
    const portfolio = document.querySelector("#portfolio");
    const resume = document.querySelector("#resume");
    const contact = document.querySelector("#contact");
    let id = null;
    let mover = 5
    if (link == 'about') {
        mover = -5;
    }
    let width = window.innerWidth - pos - 50;

    clearInterval(id);
    id = setInterval(frame, 1);
    let opacity = 1;

    function frame() {
        if (link != "about" && pos <= 88) {
            slider.style.left = '88px';
            slider.style.width = window.innerWidth - 138 + 'px';
            clearInterval(id);

        } else if (link == "about" && pos >= 590) {
            slider.style.left = '590px';
            slider.style.width = window.innerWidth - 640 + 'px';
            clearInterval(id);

        } else {
            pos=pos-mover;
            width=width+mover;
            slider.style.left = pos + 'px';
            slider.style.width = width + 'px';

            fader.style.opacity = String(opacity);
            opacity = opacity - 0.01;
            console.log(fader.style.opacity);
        }
    }
    about.classList.remove('selected')
    portfolio.classList.remove('selected')
    resume.classList.remove('selected')
    contact.classList.remove('selected')
    if (link == "about") {
        about.classList.add('selected')
    } else if (link == "portfolio") {
        portfolio.classList.add('selected')
    } if (link == "resume") {
        resume.classList.add('selected')
    } if (link == "contact") {
        contact.classList.add('selected')
    }
}

function swapPhoto(photo) {
    let swapImg = "dogs";
    if(photo == 'me') {
        swapImg = "eric";
    }
    document.getElementById("portrait").src = "./assets/images/"+swapImg+".png"


}

function resizeSlider() {
    slider.style.width = window.innerWidth - 50 - pos + "px";
}

window.onresize = resizeSlider;