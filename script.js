let slideIndex = 0;
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide-frame');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
let autoSlide;

function showSlide(index) {
  slideIndex = (index + totalSlides) % totalSlides;
  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.dataset.index);
    showSlide(index);
    resetAutoSlide();
  });
});

function startAutoSlide() {
  autoSlide = setInterval(() => {
    showSlide(slideIndex + 1);
  }, 4000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

showSlide(slideIndex);
startAutoSlide();

