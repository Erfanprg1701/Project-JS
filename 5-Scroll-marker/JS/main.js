const progress = document.querySelector('.progress-bar');

window.addEventListener('scroll', ScrollBar);

function ScrollBar() {
    const windowPage = window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight ;
    const Scroll = (windowPage/height) * 100;
    progress.style.width = ` ${Scroll}% `
}