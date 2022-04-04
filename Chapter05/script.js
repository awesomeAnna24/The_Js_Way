"use strict"
//**********CHAPTER FIVE ------FUNCTIONS
//-----Improved Hello
//-----Program that asks user for first and last name and shows result of the sayHello() function
// Say hello to the user
/*
function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    console.log(message);
  }
  
  // TODO: ask user for first and last name
  let userFirstName = prompt('Enter your first name: ')
  let userLastName = prompt('Enter your last name: ')
  // TODO: call sayHello() and show its result
  sayHello(userFirstName, userLastName)
*/
//-----------------------Number Squaring
/*
// Square the given number x
function square1(x) {
  return(x ** 2)
}
  // Square the given number x
//   const square2 = x => x ** 2
  
  // console.log(square1(0)); // Must show 0
  // console.log(square1(2)); // Must show 4
  // console.log(square1(5)); // Must show 25
  
//   console.log(square2(0)); // Must show 0
//   console.log(square2(2)); // Must show 4
//   console.log(square2(5)); // Must show 25
*/
/*
// //Update the program so that it shows the square of every number between 0 and 10
function square1() {
  for(let i = 0; i <= 10; i++){
    console.log(i ** 2)
  }
}
square1()

const square2 = () => {
  for(let i = 0; i <= 10; i++){
    console.log(i ** 2)
  }
}
square2()
*/
// --------------Minimum of two numbers
// ---Program returns the min of two number. Don't use Math.min()
/*
const min = (x, y) =>  y > x ? x : y
console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1
*/

// --------Calculator
/*
const calculate = function(x, y, z){
    if(y === '+'){
      return x + z;
    } else if(y === '-'){
      return x - z;
    } else if(y === '*'){
      return x * z;
    } else if(y === '/'){
      return x / z;
    }
}
console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity
*/

//--------Circumference and area of a circle
//Program that contains two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.
//circumference = diameter(radius * 2) * 3.14
//area = 3.14 * radius(squared)
//Circumference function
/*
const circumference = function(radius){
  return (radius * 2) * Math.PI
}

console.log(`${circumference(14)} cm`)

const area = function(radius){
  return(radius ** 2) * Math.PI
}

console.log(`${area(14)} sq. cm`)
*/





