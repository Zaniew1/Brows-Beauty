const burger = document.querySelector('.nav__bar')
const aside = document.querySelector('.aside')

burger.addEventListener('click',() => {                                                 // burger menu
    aside.style.height = "100vh";
    aside.style.visibility = "visible";
    aside.style.opacity = "1";
})
const cross = document.querySelector('.aside__close')                                   //rozwijane menu na telefonach
cross.addEventListener('click', ()=> {
    aside.style.height = "0vh";
    aside.style.visibility = "hidden";
    aside.style.opacity = "0";
})



                   // przycisk powrotu na górę strony


document.querySelector(".goStart").addEventListener('click', ()=>{
const scrollTop = window.setInterval(function() {
    const topPosition = window.pageYOffset;
    if ( topPosition > 0 ) 
    {
        window.scrollTo( 0, topPosition - 20 ); 
    } 
    else 
    {
        window.clearInterval( scrollTop );
    }
}, 6); 
})




const stickyNav = document.querySelector(".sticky");
const header = document.querySelector(".nav");
const logo = document.querySelector(".nav__logo");
const nav = document.querySelector(".nav__wrapper");
window.addEventListener("scroll", () =>{
    if(window.innerWidth >= 768 && window.innerHeight >= 500)
    {                                                                           // kod rozwijający małe menu po scrollu użytkownika 
        if(window.pageYOffset >= 1 )                                            // włącz po najmniejszym scrollu 
        {
            stickyNav.style.display = "flex";
            header.style.height = "20vh";
            logo.style.display = "none";
            nav.style.display = "none";   
        }
        else                                                                           // wyłącz kiedy jest na górze
        {
                stickyNav.style.display = "none";
                logo.style.display = "flex";
                nav.style.display = "flex"; 
    
                if(window.innerWidth <= 1279)                                   
                    {
                        header.style.height = "25vh";                    // zachowaj się inaczej na danej rozdzielczości
                    }
                else 
                    {
                        header.style.height = "15vh";
                    }
        }
    }
})


window.addEventListener('resize', ()=>{
    if(window.innerWidth < 768)
    {
        stickyNav.style.display = "none";
        logo.style.display = "flex";
        nav.style.display = "flex"; 
    }
})

const background = document.querySelector(".gallery__background");          //zaciemnianie tła po naciśnięciu powiększania zdjęcia w galerii
const wrappers = [...document.querySelectorAll('.gallery__wrapper')];       //div w którym jest zdjęcie
const enlarges = [...document.querySelectorAll('.gallery__enlarge-div')];   //div po naciśnięciu którego zdjęcie się powiększa
const infos = [...document.querySelectorAll('.gallery__info')];             //dolna informacja na zdjęciu w galerii
const galleryX = [...document.querySelectorAll('.gallery__x')];             //wyłącznik powiększenia zdjęcia
const pinks = [...document.querySelectorAll('.gallery__pink')]              //zmienianie koloru tła zdjęcia na hoverze
enlarges.forEach((enlarge, index) => {

    enlarge.addEventListener('click', ()=>  {

        background.style.display = "block";
        infos[index].style.display = "none";
        enlarges[index].style.display = "none";
        wrappers[index].classList.add('active');
        galleryX[index].style.opacity = "1";
        pinks[index].style.display = "none";

    galleryX[index].addEventListener('click', () =>{
        
        background.style.display = "none";
        infos[index].style.display = "flex";
        enlarges[index].style.display = "flex";
        wrappers[index].classList.remove('active');
        galleryX[index].style.opacity = "0";
        pinks[index].style.display = "block";
    })
})
});




let pictureIndex = 0;

document.addEventListener('scroll', () =>
{
    const pictures = [...document.querySelectorAll('.gallery__wrapper--fadeIn')];
    const wrappers = [...document.querySelectorAll('.gallery__wrapper')];
    const footer = document.querySelector('.footer__contact');
    const footerHeight = footer.outerHeight;
    const distanceToTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const windowTop = window.screenTop;
    const distanceTop = (distanceToTop - windowTop) ;
    const animation = document.querySelector('.gallery__animation')

    if(pictureIndex >= pictures.length) return animation.style.display = "none"
    if(distanceToTop <= (windowHeight -200) && pictureIndex < pictures.length)
        {
            animation.style.display = "flex"

            for (let i=0; i < 3; i++)
            {
                pictures[`${pictureIndex++}`].classList.add('show');
            }
        }

})

