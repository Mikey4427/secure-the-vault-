//set text for display cobo
const text = ` You have received this message because 
you have been chosen to open an important vault.
 Here is the secret combination:`;
 document.write(text);
// set variable for 3 numbers using arithmatic 
//these variables will be the safe combo
let comboOne = 10 * 3;
let comboTwo = 26 / 2;
const comboThree = 5 + 6;
// creat alert that displays code 
// creat button to get code
// creat function to add utility to the button 
function getCombo() {
    alert(`${comboOne} ${comboTwo} ${comboThree}`);
}