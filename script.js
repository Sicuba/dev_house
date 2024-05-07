const mobileMenu = document.getElementById("mobileMenu");

function openMenu(){
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
}
function closeMenu(){
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
}