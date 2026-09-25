if (typeof document !== 'undefined' && !document.querySelector('link[href*="animate.min.css"]')) {
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
    document.head.appendChild(cssLink);
}

const checkReplace = document.querySelector('.replace-me');

if (checkReplace !== null) {
    const replace = new ReplaceMe(checkReplace, {
        animation: 'animate__animated animate__fadeIn',
        speed: 2000,
        separator: ',',
        loopCount: 'infinite',
        autoRun: true,
    });
}

function userScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark', 'border-bottom', 'border-secondary', 'navbar-sticky');
        } else {
            navbar.classList.remove('bg-dark', 'border-bottom', 'border-secondary', 'navbar-sticky');
        }
    });
}

document.addEventListener('DOMContentLoaded', userScroll);
const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector('#video');
let videoSrc;

if (videoBtn !== null) {
    videoBtn.addEventListener('click', () => {
        videoSrc = videoBtn.getAttribute('data-bs-src');
    });
}

if (videoModal !== null) {
    videoModal.addEventListener('shown.bs.modal', () => {
        video.setAttribute(
            'src',
            videoSrc + '?autoplay=1;modestbranding=1;showInfo=0'
        );
    });
    videoModal.addEventListener('hide.bs.modal', () => {
        video.setAttribute('src', videoSrc);
    });
}