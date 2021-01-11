const bar = document.querySelector('.fa-bars')
const cross = document.querySelector('.fa-times')
const nav = document.querySelector('.phone')
const burger = document.querySelector('.burger')

const burgerFunction = ()=>{
bar.classList.toggle('show');
cross.classList.toggle('show');
nav.classList.toggle('showPhone');
}
burger.addEventListener('click', burgerFunction)