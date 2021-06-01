// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']
let indexTxt = 0
let indexWord = 0
// Implementacja
const addLetter = () => {
    if(indexWord >= 0){
    spnText.textContent += txt[indexTxt][indexWord];
} 
    indexWord++;
 if(indexWord === txt[indexTxt].length) {
    indexTxt++; 
    if(indexTxt === txt.length) return;
     

    return setTimeout(()=>{
        indexWord = -15;
        spnText.textContent = "";
        addLetter();
    }, 2000)

    
}
setTimeout(addLetter, 100)
}
addLetter();



// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);