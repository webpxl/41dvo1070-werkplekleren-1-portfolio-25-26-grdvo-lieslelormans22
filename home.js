document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    next.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    });

    prev.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    });
});
