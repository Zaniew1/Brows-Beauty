const array = ['walcz', 'zapomnij'];

const addAdvice = (e)=>{
    e.preventDefault();
    const input = document.querySelector('input');
    options.push(input.value);
    input.value = "";

}
const showOneAdvice = (e)=>{
    e.preventDefault();
    const index = Math.floor(Math.random()*array.length);
    document.querySelector('h1').textContent= array[index];
}


const cleanAdvice = (e)=>{
    e.preventDefault();
    array.length = 0;
    document.querySelector('h1').textContent = " ";
}

const showAllOption = ()=>{
    alert(array);
}





document.querySelector('.add').addEventListener('click', addAdvice);
document.querySelector('.clean').addEventListener('click', cleanAdvice);
document.querySelector('.showAdvice').addEventListener('click', showOneAdvice);
document.querySelector('.showOption').addEventListener('click', showAllOption);