var carousel = document.querySelectorAll('.carousel');
var tour = document.getElementById('tour');
var current = 0


function reset(){
    for(let i = 0; i < carousel.length; i++){
        carousel[i].style.display = 'none';
    }
}


function startCarousel(){
    reset();
    carousel[0].style.display = 'block';
}

function moveNext(){
    reset();
    carousel[current + 1].style.display = 'block';
    current++;
}

tour.addEventListener('click', function(){
    if(current == carousel.length - 1)
    {
        current = -1;
    }
    moveNext();
})

startCarousel();

var downloadButton1 = document.getElementById('download-btn1');
var downloadButton2 = document.getElementById('download-btn2');
var downloadButton3 = document.getElementById('download-btn3');
var downloadButton4 = document.getElementById('btn');
var basicButton = document.getElementById('basic-btn');
var premiumButton = document.getElementById('premium-btn');
var modalButton = document.getElementById('modal-btn');
var modalDownloadButton = document.getElementById('modal-download-btn');
var modal = document.getElementById('modal');
var page = document.getElementById('page');

function displayModal(){
    modal.style.display = 'block';
    page.className += 'blur-bg'
}

function hideModal(){
    modal.style.display = 'none';
    page.classList.remove('blur-bg');
}

downloadButton1.addEventListener('click', displayModal)
downloadButton2.addEventListener('click', displayModal)
downloadButton3.addEventListener('click', displayModal)
downloadButton4.addEventListener('click', displayModal)
basicButton.addEventListener('click', displayModal)
premiumButton.addEventListener('click', displayModal)

modalButton.addEventListener('click', hideModal)
modalDownloadButton.addEventListener('click', hideModal)
