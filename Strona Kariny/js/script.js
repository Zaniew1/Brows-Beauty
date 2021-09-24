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



       


document.querySelector(".go-start").addEventListener('click', ()=>{                     // przycisk powrotu na górę strony
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
            stickyNav.classList.add('display__sticky')
            logo.classList.add('display__nav-logo')
            nav.classList.add('display__nav-logo')
        }
        else                                                                           // wyłącz kiedy jest na górze
        {
            stickyNav.classList.remove('display__sticky')
            logo.classList.remove('display__nav-logo')
            nav.classList.remove('display__nav-logo')
    

        }
    }
})


window.addEventListener('resize', ()=>{
    if(window.innerWidth < 768)
    {
        stickyNav.classList.remove('display__sticky')
        logo.classList.remove('display__nav-logo')
        nav.classList.remove('display__nav-logo')
    }
})

const background = document.querySelector(".gallery__background");          //zaciemnianie tła po naciśnięciu powiększania zdjęcia w galerii
const wrappers = [...document.querySelectorAll('.gallery__wrapper')];       //div w którym jest zdjęcie
const enlarges = [...document.querySelectorAll('.gallery__enlarge-div')];   //div po naciśnięciu którego zdjęcie się powiększa
const infos = [...document.querySelectorAll('.gallery__info')];             //dolna informacja na zdjęciu w galerii
const galleryX = [...document.querySelectorAll('.gallery__x')];             //wyłącznik powiększenia zdjęcia
const pinks = [...document.querySelectorAll('.gallery__pink')];             //zmienianie koloru tła zdjęcia na hoverze
enlarges.forEach((enlarge, index) => {

    enlarge.addEventListener('click', ()=>  {

        background.style.display = "block";
        infos[index].style.display = "none";
        enlarges[index].style.display = "none";
        wrappers[index].classList.add('active');
        galleryX[index].style.opacity = "1";
        pinks[index].style.display = "none";
        stickyNav.classList.remove('display__sticky')

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
    const allPictures = [...document.querySelectorAll('.gallery__wrapper')];
    const animatedPictureOne = document.querySelector('.gallery__wrapper--fadeIn-one');
    const animatedPictureTwo = document.querySelector('.gallery__wrapper--fadeIn-two');
    const animatedPictureThree = document.querySelector('.gallery__wrapper--fadeIn-three');
document.addEventListener('scroll', () =>
{
    const windowScrollValue = window.scrollY;
    const windowHeight = window.innerHeight;
    const allAnimatedPictureOne = [...document.querySelectorAll('.gallery__wrapper--fadeIn-one')];
    const allAnimatedPictureTwo = [...document.querySelectorAll('.gallery__wrapper--fadeIn-two')];
    const allAnimatedPictureThree = [...document.querySelectorAll('.gallery__wrapper--fadeIn-three')];
    
    const animatedPictureHeightOne = animatedPictureOne.offsetHeight;
    const animatedPictureDistanceFromTopOne = animatedPictureOne.offsetTop;
    const animatedPictureHeightTwo = animatedPictureTwo.offsetHeight;
    const animatedPictureDistanceFromTopTwo = animatedPictureTwo.offsetTop;
    const animatedPictureHeightThree = animatedPictureThree.offsetHeight;
    const animatedPictureDistanceFromTopThree = animatedPictureThree.offsetTop;
    if(window.innerWidth >= 1024 )
    {
        if(windowScrollValue > animatedPictureDistanceFromTopOne - windowHeight + animatedPictureHeightOne ){
            allAnimatedPictureOne.forEach((element, index) => {
                element.classList.remove('gallery__wrapper--fadeIn-one');
                let seconds = index/4;
                element.style.transitionDelay = `${seconds}s`;
            });   
        }
        if(windowScrollValue > animatedPictureDistanceFromTopTwo - windowHeight + animatedPictureHeightTwo  ){
            allAnimatedPictureTwo.forEach((element, index) => {
                element.classList.remove('gallery__wrapper--fadeIn-two');
                let seconds = index/4;
                element.style.transitionDelay = `${seconds}s`;
            }); 
        }
        if(windowScrollValue > animatedPictureDistanceFromTopThree - windowHeight + animatedPictureHeightThree ){
            allAnimatedPictureThree.forEach((element, index) => {
                element.classList.remove('gallery__wrapper--fadeIn-three');
                let seconds = index/4;
                element.style.transitionDelay = `${seconds}s`;
            }); 
        }
    }
    else{
        allPictures.forEach(picture =>{
            picture.classList.remove('gallery__wrapper--fadeIn-one');
            picture.classList.remove('gallery__wrapper--fadeIn-two');
            picture.classList.remove('gallery__wrapper--fadeIn-three');
        })

    }
})