"use strict"
/**************WORK WITH STRINGS**********/
//Breaking a string into parts
/*
const monthList = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const months = monthList.split(",");
console.log(months[0]);  // "Jan"
console.log(months[11]); // "Dec"
*/
//---------------WORD INFO
//Write a program that asks you for a word then shows its length, lowercase and uppercase values.
//Ask for a word

//let userWordInput = prompt('Enter a word:')
//word length
/*
console.log(`Length of your word: ${userWordInput.length}`)
//lowercase value
console.log(`LowerCase: ${userWordInput.toLowerCase()}`)
//uppercase value
console.log(`UpperCase: ${userWordInput.toUpperCase()}`)
*/

//------------------VOWEL COUNT
//Improve the previous program so that it also shows the number of vowels inside the word
/*
let numberOfVowels = 0;
let backwardWord = "";
/

//**************The Js Way Solution*******/
/*
[...userWordInput].forEach(letter=> {
    const lowerLetter = letter.toLowerCase();
    if(lowerLetter === 'a' || lowerLetter === 'e' || lowerLetter === 'i' || lowerLetter === 'o' || lowerLetter === 'u'){
        numberOfVowels ++
    }
//--------BACKWARDS WORD
//Improve the previous program so that it shows the word written backwards
    backwardWord = letter + backwardWord;

});
console.log(backwardWord.toLowerCase())
console.log(userWordInput.toLowerCase())

//---------PALINDROME
//Improve the previous program to check if the word is a palindrome.
if (userWordInput.toLowerCase() === backwardWord.toLowerCase()) {
    console.log("It's a palindrome");
  }
*/
/*********************My First Solution***************/
/*
let userWordInput = 'Radar'; //Change to prompt
const backwordWord = Array.from(userWordInput).reverse().join('');
console.log(backwordWord)
*/
/**********************My Second Solution*************/
/*
let backwardArray = [];
const nameArray = Array.from(userWordInput);
for(let i = nameArray.length-1; i>=0; i--){
    // let backwardWord = nameArray[i];
    backwardArray.push(nameArray[i]);
}
let backwardWord = backwardArray.join('');
console.log(backwardWord)
*/
// PALINDROME CHECKER
/*
if(userWordInput.toLowerCase() === backwordWord.toLowerCase()){
    console.log(`It's a palindrome!!!`)
}
*/


