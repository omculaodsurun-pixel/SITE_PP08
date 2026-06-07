// Базовые элементы управления слайдером.
const slides = document.querySelectorAll(".slider__slide");
const dots = document.querySelectorAll(".slider__dot");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

let currentSlide = 0;
let autoSlideTimer;

// Переключение активного слайда и соответствующей точки.
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });

    currentSlide = index;
}

function nextSlide() {
    if (!slides.length) return;
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    if (!slides.length) return;
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

// После ручного клика заново запускаем автопрокрутку, чтобы тайминг был предсказуем.
function resetAutoplay() {
    clearInterval(autoSlideTimer);
    if (!slides.length) return;
    autoSlideTimer = setInterval(nextSlide, 5000);
}

if (prevBtn && nextBtn && slides.length > 0) {
    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetAutoplay();
    });

    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetAutoplay();
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
        resetAutoplay();
    });
});

if (slides.length > 0) {
    showSlide(0);
    resetAutoplay();
}