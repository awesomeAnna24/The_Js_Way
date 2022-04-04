// PART I - LEARN TO CODE PROGRAMS
"use strict";
 //---------CHAPTER THREE- Conditionals
//***********Program that accepts a day name from the user, then shows the name of the following day. Take into account incorrect inputs
// let dayOfTheWeek = prompt('Input a day of the week: ');
// console.log(typeof(dayOfTheWeek))
/*
if(dayOfTheWeek.toLowerCase() == "monday"){
    console.log("Tuesday");
} else if(dayOfTheWeek.toLowerCase() == "tuesday"){
    console.log("Wednesday");
} else if(dayOfTheWeek.toLowerCase() == "wednesday"){
    console.log("Thursday");
}else if(dayOfTheWeek.toLowerCase() == "thursday"){
    console.log("Friday");
}else if(dayOfTheWeek.toLowerCase() == "friday"){
    console.log("Saturday");
}else if(dayOfTheWeek.toLowerCase() == "saturday"){
    console.log("Sunday");
} else if(dayOfTheWeek.toLowerCase() == "sunday"){
    console.log("Monday");
} else {
//notify user of incorrect input
    console.log('Incorrect input')
} */

//----------Program that accepts a month number(between 1 and 12) then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account
/*let monthNumber = Number(prompt ('A number of the month:'));
if(monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 11){
    alert("30 days")
} else if (monthNumber == 2){
    alert("29 days")
} else if (monthNumber == 1 || monthNumber == 3 ||monthNumber == 5 || monthNumber == 7 || monthNumber == 8 || monthNumber == 10 || monthNumber == 12 ){
    alert("31 days")
} else if (monthNumber == ""){
    alert("Incorrect input")
} else{
    alert("Incorrect input")
}*/

//--------------Program that asks for a time under the form of three information (hours, minutes, seconds). THe program calculates and shows the time one second after. Incorrect inputs must be taken into account.
/*
let timeByHour = Number(prompt('Hour:'));
let timeByMinute = Number(prompt('Minute:'));
let timeBySecond = Number(prompt('Second:'));

// //Extra Time operations
// //Increase time by one second
timeBySecond++;
//Take care of incorrect input
if(isNaN(timeBySecond) || isNaN(timeByMinute) || isNaN(timeByHour)){
    alert('Incorrect input')
} else if(timeBySecond > 59 ){
    let extraSecond = timeBySecond - 59;
    timeBySecond = 0;
    timeByMinute += extraSecond;
    if(timeByMinute > 59){
        let extraMinute = timeByMinute - 59;
        timeByMinute = 0;
        timeByHour += extraMinute
    }if(timeByHour >= 24){
        timeByHour = 0;
    }
    alert(`${timeByHour}h${timeByMinute}m${timeBySecond}s`)
} else if(timeBySecond <= 59){
    alert(`${timeByHour}h${timeByMinute}m${timeBySecond}s`)
} 
*/
