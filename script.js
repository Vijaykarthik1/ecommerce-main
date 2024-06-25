let currentSlideID = 0;
let totalSlides = document.getElementById('Slider').childElementCount;

function next() {
    if (currentSlideID < totalSlides - 1) {
        currentSlideID++;
    }
    showSlide(); 
}

function prev() {
    if (currentSlideID > 0) {
        currentSlideID--;
    }
    showSlide(); 
}

function showSlide() {
    let slides = document.getElementById('Slider').getElementsByTagName('li');
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        if (currentSlideID === index) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    }
}

showSlide();


function createAccount() {
    document.querySelector('.create-account-btn').innerText = 'Created';
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 1000);
}
