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
        this.addIndicators();
    }

    startAutoPlay() {
        this.interval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    addIndicators() {
        const indicators = document.createElement('div');
        indicators.className = 'slider-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2';
        
        this.slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = `w-2 h-2 rounded-full bg-white ${index === 0 ? 'opacity-100' : 'opacity-50'}`;
            dot.addEventListener('click', () => this.goToSlide(index));
            indicators.appendChild(dot);
        });

        this.slider.appendChild(indicators);
    }

    updateIndicators() {
        const dots = this.slider.querySelectorAll('.slider-indicators button');
        dots.forEach((dot, index) => {
            dot.classList.toggle('opacity-100', index === this.currentSlide);
            dot.classList.toggle('opacity-50', index !== this.currentSlide);
        });
    }

    nextSlide() {
        this.goToSlide((this.currentSlide + 1) % this.slides.length);
    }

    goToSlide(index) {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = index;
        this.slides[this.currentSlide].classList.add('active');
        this.updateIndicators();
    }
}

// Initialize slider if it exists
const slider = document.querySelector('.hero-slider');
if (slider) {
    new Slider(slider);
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Fade-in Animation