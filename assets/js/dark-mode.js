// Detectar la configuración de modo oscuro del sistema
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    const darkModeImage = document.querySelector('img.logo-header.dark-mode');
    const parentElement = darkModeImage.parentElement;
    parentElement.style.left = '50%';
} else {
    document.body.classList.remove('dark-mode');
    const whiteModeImage = document.querySelector('img.logo-header.white-mode');
    const whiteparentElement = whiteModeImage.parentElement;
    whiteparentElement.style.left = '0';
}

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    const darkModeImage = document.querySelector('img.logo-header.dark-mode');
    const whiteModeImage = document.querySelector('img.logo-header.white-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        const parentElement = darkModeImage.parentElement;
        parentElement.style.left = '50%';
    } else {
        const whiteparentElement = whiteModeImage.parentElement;
        whiteparentElement.style.left = '0';
    }
});