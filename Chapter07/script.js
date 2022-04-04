"use strict";
/*****************ARRAYS**************/
//An array represents a list of elements. It is an object that has special properties .
//It is a datatype that can store a set of elements.
const movies = ['The wolf', 'Nothing to hide', 'Pieces of Her'];
//----------To obtain an array's size
/*console.log(movies.length)*/

//----------Access an element in an array
//We use index - a integer pointer that identifies an element of the array
//Using an invalid index to access a js array element returns the value of undefined
/*console.log(movies[0])*/

//-----Iterating over an array
//i. For loop
/*
for(let i = 0; i < movies.length; i++){
    console.log(movies[i])
}
*/
//ii. forEach() method
/*
movies.forEach(movie => {
    console.log(movie)
})
*/
//iii. For-of Loop
//Creates a loop iterating over iterable objects
//for(variable of iterable){console.log(variable)}
//On each iteration, a value of a different property is assigned to variable
/*for(const movie of movies){
    console.log(movie)
}*/
//Updating an array's content
//push - Add at end of array
//unshift - Beginning of array
//pop - Remove last element of array
//splice(param1, param2) - param1 is the index from which to begin removing and param2 is no of elements to remove
/*movies.splice(0, 1);*/ //Remove 1 element starting at index 0

//------------MUSKETEERS
//const musketeers = ['Athos', 'Porthos', 'Aramis'];
//Show each array element using a for loop
/*
for(let i = 0; i < musketeers.length; i++){
    console.log(musketeers[i])
}
*/
//Adds the'D'Artagnan' value to the array
//musketeers.push(`D'Artagnan`)
//Show each array element using the forEach() method
/*musketeers.forEach(musketeer => {
    console.log(musketeer)
})*/
//Remove Aramis
//musketeers.splice(2, 1)
//Show each array element using a for-of loop
/*
for(const musketeer of musketeers){
    console.log(musketeer)
}
*/

//---------------SUM OF VALUES
//Write a program that creates the following array, then calculates and shows the sum of its values
/* const values = [3, 11, 7, 2, 9, 10];
let sum = 0;
for(let i = 0; i< values.length; i++){
    sum += values[i]
    console.log(sum)
}*/

// console.log(values[0] + values[1] + values[2] + values[3] + values[4] + values[5])

//-------------ARRAY MAXIMUM
/*
const values = [3, 11, 7, 2, 9, 10];
console.log(Math.max(...values));
*/

//---------------LIST OF WORDS
//Write a program that asks the user for a word until the user types 'stop'. The program then shows each of these words, except 'stop'.
/*
let userInputArray = [];
let userInput = prompt('Enter a word: ');
while(userInput.toLowerCase() !== "stop"){
    userInputArray.push(userInput)
    userInput = prompt('Enter a word: ');
}
for(let i = 0; i < userInputArray.length; i++){
    console.log(userInputArray[i])
}
*/











