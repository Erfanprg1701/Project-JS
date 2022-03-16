let skew = document.querySelector('.angel');

window.addEventListener('scroll', () =>{
    let value = -10 + window.scrollY/50;
    console.log(value)
    skew.style.transform = "skewY("+value+"deg)"
})