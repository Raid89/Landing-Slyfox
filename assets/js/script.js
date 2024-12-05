
let isScrolling;

window.addEventListener('scroll', function() {
    document.body.classList.add('scrolling');

    clearTimeout(isScrolling);

    isScrolling = setTimeout(function() {
        document.body.classList.remove('scrolling');
    }, 300);
});