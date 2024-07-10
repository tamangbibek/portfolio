document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.hover-zoom');
    const overlay = document.getElementById('overlay');
    const enlargedImage = document.getElementById('enlargedImage');

    images.forEach(image => {
        image.addEventListener('click', function() {
            enlargedImage.src = image.src;
            overlay.style.display = 'flex';
        });
    });

    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});
