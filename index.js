//set text for display cobmbo
const text = ` You have received this message because 
you have been chosen to open an important vault.
 Here is the secret combination:`;
 document.write(text);
// set variable for 3 numbers using arithmatic 
//these variables will be the safe combo
// each variable will have a random intiger tha changes whenever the page is refreshed 
let comboOne = Math.floor(Math.random() * 34) * 3;
let comboTwo = Math.floor(Math.random() * 101) / 1;
const comboThree = Math.floor(Math.random() * 94) + 6;
// creat alert that displays code 
// creat button to get code
// creat function to add utility to the button 
function getCombo() {
    alert(`${comboOne} ${comboTwo} ${comboThree}`);
}