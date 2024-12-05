if (window.innerWidth >= 768) {
    const scrollContainer = document.querySelector('.info-cards__container');
    const scrollLeft = document.querySelector('.scroll-button.scroll-left');
    const scrollRight = document.querySelector('.scroll-button.scroll-right');

    scrollLeft.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: -600,
            behavior: 'smooth'
        });
    });

    scrollRight.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: 600,
            behavior: 'smooth'
        });
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Cambia a 'auto' para desplazamiento instantáneo
    });
}


let isScrolling;

window.addEventListener('scroll', function() {
    document.body.classList.add('scrolling');

    clearTimeout(isScrolling);

    isScrolling = setTimeout(function() {
        document.body.classList.remove('scrolling');
    }, 300);
});