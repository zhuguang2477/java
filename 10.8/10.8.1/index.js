const thumbnails = document.querySelectorAll('.thumbnail');
const fullSizeImage = document.getElementById('full-size');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const fullImageUrl = this.getAttribute('data-full');
        fullSizeImage.src = fullImageUrl;
    });
});