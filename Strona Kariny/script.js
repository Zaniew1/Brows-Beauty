const burger = document.querySelector('.nav__bar')
const aside = document.querySelector('.aside')

burger.addEventListener('click',() => {
    aside.style.height = "100vh";
    aside.style.visibility = "visible";
    aside.style.opacity = "1";

})

const cross = document.querySelector('.aside__close')
cross.addEventListener('click', ()=> {
    aside.style.height = "0vh";
    aside.style.visibility = "hidden";
    aside.style.opacity = "0";

})

const arrowUp = document.querySelector(".goStart")

arrowUp.addEventListener('click', ()=>{
const scrollTop = window.setInterval(function() {
    const topPosition = window.pageYOffset;
    if ( topPosition > 0 ) {
        window.scrollTo( 0, topPosition - 20 ); 
    } else {
        window.clearInterval( scrollTop );
    }
}, 6); 
})
window.addEventListener("scroll", () =>{
    if(window.innerWidth >= 768 && window.innerHeight >= 375){
    const stickyNav = document.querySelector(".sticky");
    const header = document.querySelector(".nav");
    const logo = document.querySelector(".nav__logo");
    const nav = document.querySelector(".nav__wrapper");
    if(window.pageYOffset >= 1 )
    {
        stickyNav.style.display = "flex";
        header.style.height = "20vh";
        logo.style.display = "none";
        nav.style.display = "none";
        
    }
    else if (window.pageYOffset < 1)
    {
        if(window.innerWidth <= 1279)
        {
            stickyNav.style.display = "none";
            header.style.height = "25vh";
            logo.style.display = "flex";
            nav.style.display = "flex";
        }
        else if(window.innerWidth >= 1280)
        {
            stickyNav.style.display = "none";
            header.style.height = "15vh";
            logo.style.display = "flex";
            nav.style.display = "flex";
        }
    }
}
})

const background = document.querySelector(".gallery__background");
const wrappers = [...document.querySelectorAll('.gallery__wrapper')];
const enlarges = [...document.querySelectorAll('.gallery__enlarge-div')];
const infos = [...document.querySelectorAll('.gallery__info')];
const galleryX = [...document.querySelectorAll('.gallery__x')];
const pinks = [...document.querySelectorAll('.gallery__pink')]
enlarges.forEach((enlarge, index) => {

    enlarge.addEventListener('click', ()=>  {

        background.style.display = "block";
        infos[index].style.display = "none";
        enlarges[index].style.display = "none";
        wrappers[index].classList.add('active')
        galleryX[index].style.opacity = "1";
        pinks[index].style.display = "none"
    galleryX[index].addEventListener('click', () =>{
        
        background.style.display = "none";
        infos[index].style.display = "flex";
        enlarges[index].style.display = "flex";
        wrappers[index].classList.remove('active')
        galleryX[index].style.opacity = "0";
        pinks[index].style.display = "block"
    })
})
});
