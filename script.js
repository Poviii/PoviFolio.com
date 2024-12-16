// Carousel Functionality
document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel__image');
    let currentIndex = 0;

    const showImage = (index) => {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    };

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000);

    showImage(currentIndex);
});
