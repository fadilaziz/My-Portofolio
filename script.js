
const toggleBtn = document.getElementById('toggleBtn');
const navMenu = document.querySelector('#nav-links');

// Toggle menu
toggleBtn.addEventListener('click', function(event) {
navMenu.classList.toggle('hidden');
event.stopPropagation(); // Hindari trigger langsung menutup
});

// Jika klik di luar nav atau tombol, maka tutup nav
document.addEventListener('click', function(event) {
    if (!navMenu.contains(event.target) && event.target !== toggleBtn) {
    navMenu.classList.add('hidden');
    }
});

