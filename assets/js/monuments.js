// Add this script to your JavaScript file
function revealMessage() {
    const specialMessage = document.getElementById('specialMessage');
    const easterEgg = document.getElementById('easterEgg');

    // Show the special message when the "gift box" is clicked
    specialMessage.style.display = 'block';

    // Hide the "gift box" after it's clicked
    easterEgg.style.display = 'none';
}
