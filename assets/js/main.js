// Mobile Menu Toggle
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Hero Slider
class Slider {
    constructor(sliderElement) {
        this.slider = sliderElement;
        this.slides = Array.from(this.slider.querySelectorAll('.slide'));
        this.currentSlide = 0;
        this.interval = null;
        this.init();
    }

    init() {
        this.startAutoPlay();