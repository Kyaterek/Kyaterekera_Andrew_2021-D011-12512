document.addEventListener("DOMContentLoaded", function () {
    const instagramFeed = document.querySelector('.instagram-feed');
    const toggleButton = document.querySelector('#toggleInstagramFeed');

    function toggleInstagramVisibility() {
        instagramFeed.classList.toggle('hidden');
    }

    toggleButton.addEventListener('click', toggleInstagramVisibility);
});
document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector('.gallery');
    const galleryImages = gallery.querySelectorAll('.gallery-item');
    const nextButton = document.querySelector('#nextButton');
    const prevButton = document.querySelector('#prevButton');

    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateGallery();
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateGallery();
    }

    function updateGallery() {
        galleryImages.forEach((image, index) => {
            if (index === currentIndex) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    updateGallery();
});