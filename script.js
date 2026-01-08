document.addEventListener('DOMContentLoaded', () => {
    const bookBtn = document.getElementById('bookBtn');

    bookBtn.addEventListener('click', () => {
        alert('Tack för ditt intresse! Vi återkommer med bokningsinformation inom kort.');
    });

    // Enkel animation för att texten ska tona in när sidan laddas
    const mainContent = document.querySelector('.container');
    mainContent.style.opacity = '0';
    mainContent.style.transition = 'opacity 1.5s ease-in';
    
    setTimeout(() => {
        mainContent.style.opacity = '1';
    }, 100);
});
document.addEventListener('DOMContentLoaded', () => {
    // Gör så att sidan tonar in mjukt när man öppnar den
    const mainContent = document.querySelector('.container');
    mainContent.style.opacity = '0';
    mainContent.style.transition = 'opacity 1.5s ease-in';
    
    setTimeout(() => {
        mainContent.style.opacity = '1';
    }, 100);
});