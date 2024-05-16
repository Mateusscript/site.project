let activeIndex = 0;
const images = document.querySelectorAll('.gallery-image');

setInterval(() => {
    images[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % images.length;
    images[activeIndex].classList.add('active');
}, 5000);
