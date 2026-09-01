document.addEventListener("DOMContentLoaded", () => {
    // --- 1. HERO SLIDER INTERATIVO ---
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dotsContainer = document.getElementById("dotsContainer");
    
    let currentSlide = 0;
    let slideInterval;

    // Criar pontos (dots) dinamicamente
    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove("active");
            dots[index].classList.remove("active");
        });
        
        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlides();
        resetTimer();
    }

    function startTimer() {
        slideInterval = setInterval(nextSlide, 5000); // Troca a cada 5 segundos
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startTimer();
    }

    // Eventos dos botões do slider
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => {
            nextSlide();
            resetTimer();
        });

        prevBtn.addEventListener("click", () => {
            prevSlide();
            resetTimer();
        });
    }

    // Inicia a troca automática de slides
    startTimer();

    // --- 2. MENU HAMBÚRGUER MOBILE ---
    const menuToggle = document.getElementById("menuToggle");
    const btoMenu = document.getElementById("btoMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (menuToggle && btoMenu) {
        menuToggle.addEventListener("click", () => {
            btoMenu.classList.toggle("active");
        });

        // Fecha o menu ao clicar em qualquer item da navegação
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                btoMenu.classList.remove("active");
            });
        });
    }
});