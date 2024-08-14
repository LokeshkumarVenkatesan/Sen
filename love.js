document.addEventListener('DOMContentLoaded', function () {
    const crackers = document.querySelector('.crackers');
    const giftPapers = document.querySelector('.gift-papers');

    // Trigger crackers and gift papers animation
    setTimeout(() => {
        crackers.style.animationPlayState = 'running';
        giftPapers.style.animationPlayState = 'running';
    }, 500); // Delay for visual effect
});
