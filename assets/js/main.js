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

function openDialog(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById('dialog-content').innerHTML = html;
            document.getElementById('dialog-contact').style.display = 'flex';
            setTimeout(() =>
            document.getElementById('dialog-contact').style.opacity = '1', 100)
        })
        .catch(error => console.error('Error al cargar el archivo:', error));
}

function closeDialog() {
    document.getElementById('dialog-contact').style.opacity = '0'
    setTimeout(() => document.getElementById('dialog-contact').style.display = 'none', 300)
    
}

document.getElementById('dialog-contact').addEventListener('click', function(event) {
    if (event.target.id === 'dialog-contact') {
        closeDialog();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code === 'Escape') {
        closeDialog();
    }
});

let isScrolling;

window.addEventListener('scroll', function() {
    document.body.classList.add('scrolling');
    // ...existing code...
});

window.addEventListener('scroll', function() {
    document.body.classList.add('scrolling');

    clearTimeout(isScrolling);

    isScrolling = setTimeout(function() {
        document.body.classList.remove('scrolling');
    }, 300);
});