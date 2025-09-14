function toggleMenu() {
    const wrapper = document.querySelector(".wrapper");
    wrapper.classList.toggle("hidden");

    document.addEventListener("click", function (event) {
        const menuButton = document.getElementById("menu");
        if (!wrapper.contains(event.target) && event.target !== menuButton) {
            wrapper.classList.add("hidden");
        }
    });
}

const tombolContact = document.querySelector('.tombol-dropDown');
const dropDown = document.querySelector('.dropDown');

tombolContact.addEventListener('click', function(event) {
    dropDown.classList.toggle('hidden');
});
