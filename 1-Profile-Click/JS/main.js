// const prof = document.querySelector(".profile");
// const menu = document.querySelector(".menu");

// prof.addEventListener("click", display);

// function display() {
//     menu.style.display = "block" ;
// }
// در راه اول فقط به ما نمایش داده می شود و وقتی دوباره کلیک کنیم حذف نمی شود.


function toggleMenu() {
    const menu = document.querySelector(".menu")
    menu.classList.toggle('active')
}