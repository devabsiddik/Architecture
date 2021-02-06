document.querySelector('.burger-navbar').addEventListener('click', () =>{

    document.querySelector('.header').classList.toggle('change');
});

const scrolltps = document.querySelector("#scrooltt");
scrolltps.addEventListener('click', function () {

window.scrollTo({
    top:"0",
behavior:'smooth',
    left:"0"
});
});

window.addEventListener("scroll",  () =>{

if (window.scrollY >= 400) {
    scrolltps.style.opacity= 1
} else {
    scrolltps.style.opacity= 0
}
})

