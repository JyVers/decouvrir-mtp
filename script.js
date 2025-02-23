document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector("body"); 
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    let isScrolling = false;

    container.style.transition = "transform 0.5s ease-in-out";

    function scrollToSlide(index) {
        if (index < 0 || index >= slides.length) return;
        isScrolling = true;
        container.style.transform = `translateY(-${index * 100}vh)`;
        setTimeout(() => { isScrolling = false; }, 500); // Durée de l'animation
    }

    window.addEventListener("wheel", function (event) {
        if (isScrolling) return;  // Si une animation est en cours, on ignore l'événement

        // L'événement "wheel" peut se déclencher plusieurs fois rapidement, il faut donc empêcher cela
        if (event.deltaY > 0) {
            currentIndex = Math.min(currentIndex + 1, slides.length - 1);
        } else {
            currentIndex = Math.max(currentIndex - 1, 0);
        }

        scrollToSlide(currentIndex);
    });
});
