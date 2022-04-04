// PART I - LEARN TO CODE PROGRAMS
"use strict";

//-------------CHAPTER FOUR - Loops
// ---------Program that launches a carousel for 10 turns, showing the turn number each time
/* for(let i = 1; i <= 10; i++){
    console.log(`${i} turns`)
} */
//--Imrpove it so that  the number of turns is given by the user
/*let numberOfTurns = Number(prompt('Number of turns: '))
let i = 0;
//i cannot excede amount input by user
while(i <= numberOfTurns){
    console.log(i)
    i++;
}*/
// ---------Parity (The fact of being even or odd) program
/* for(let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(`${i} is even`)
    } else{
        console.log(`${i} is not even`)
    }
} */
// ----Improve the program to replace initial number one by user input. Must show exactly ten numbers
/*let userNumberInput = Number(prompt('Enter a number: '))
let numberOfItems = userNumberInput + 10;
while(userNumberInput <= numberOfItems){
    if(userNumberInput % 2 === 0){
        console.log(`${userNumberInput} is even`)
    } else{
        console.log(`${userNumberInput} is odd`)
    }
    userNumberInput++
} */

// ----Input validation--------------Program that continues to ask the user for a number until the entered number is less than or equal to 100
//Ask for a number <= 100
/* let userNumber = Number(prompt('Enter a number between 1 and 100: ')) 
let i = 100;
while(userNumber > i){
    userNumber = Number(prompt('Enter a number between 1 and 100: ')) 
} */

// ---Improve the program so that the terminating number is between 50 and 100
/*let userNumber = Number(prompt('Enter a number between 1 and 100: ')) 
while(userNumber < 50 || userNumber > 100){
    userNumber = Number(prompt('Enter a number: ')) 
}*/

// ------Multiplication table ---Program that asks the user for a number then shows the multiplication table for this number
/*
let factor = Number(prompt('Enter any number:'));
//Nest loop
for(let i = 1; i <=10; i++){
    for(let j = 0; j < 10; j++){
        if(isNaN(factor)){
       factor = Number(prompt('Enter any number:'));
   } else{
    let product = factor * i;
    console.log(`${factor} * ${i} = ${product}`)
   }
  }
}
*/

// ----Improving the program so it only accepts numbers between 2 and 9
/*
let factor = Number(prompt('Enter any number:'));
//Nest loop
for(let i = 1; i <=10; i++){
    for(let j = 0; j < 10; j++){
        if(isNaN(factor) || factor < 2 || factor > 9){
       factor = Number(prompt('Enter any number:'));
   } else{
    let product = factor * i;
    console.log(`${factor} * ${i} = ${product}`)
   }
  }
}*/
// ---------------Program that plays "neither yes nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed which ends the game
/* let yesOrNoGameInput = prompt('Yes or No?')
while (yesOrNoGameInput.toLowerCase() !== 'yes' && yesOrNoGameInput.toLowerCase() !== 'no'){
    yesOrNoGameInput = prompt('Yes or No?');
} */


// ---------Program that shows all numbers between 1 and 100. Fizz for x/3=0 and buzz for x/5=0 and fizzBuzz for x/15=0
/*
for(let i = 1; i <= 100; i++){
    if(i % 15 === 0){
        console.log('FizzBuzz')
    } else if(i % 3 === 0){
        console.log('Fizz')
    } else if (i % 5 === 0){
        console.log('Buzz')
    } else{
        console.log(i)
    }
} */























