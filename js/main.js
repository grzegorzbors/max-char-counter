const maxChars = 100;
const textArea = document.getElementById('text-field');
const charsRem = document.getElementById('char-count');

textArea.addEventListener('keyup', countCharsLeft);

textArea.addEventListener('keydown', countCharsLeft);

function countCharsLeft(){
    let stringLength = textArea.value.length;
    charsRem.textContent = maxChars - stringLength;
}