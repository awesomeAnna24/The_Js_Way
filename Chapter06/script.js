"use strict"
//-------CHAPTER SIX ---- OBJECTS
//An object is an entity that has properties. Each property is a key/value pair. This is called an object literal. The key is the property name. The value is a piece of information. The property is called a method.
//Access property values of objects using dot notations
//myObject.myPropertyName
/*
const anna = {
    name : "Anna",
    health: 150,
    strength: 25
}; 
*/
//You can assign numbers, strings and even other objects to properties.
/*
console.log(`${anna.name} has ${anna.health} health points and ${anna.strength} as strength`)
//Anna is harmed by an arrow
anna.health -= 20;
//Anna equips a strength necklace
anna.strength += 10;
console.log(`${anna.name} has ${anna.health} health points and ${anna.strength} as strength`)
*/
//The describe() function takes and object as a parameter. It accesses that objects properties.
/*
function describe(character){
    return `${character.name} has ${character.health} health points and ${character.strength} strength`
}

console.log(describe(anna))
*/
/*
const anna = {
    name : "Anna",
    health: 150,
    strength: 25,

    //return character description
    describe(){
        return `${this.name} has ${this.health} health points and ${this.strength} as strength`
    }
}; 
console.log(anna.describe())
*/
//-------------Improve example program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description
/*
const aurora = {
    name : "Anna",
    health: 150,
    strength: 25,
    xp: 0,
     
    describe(){
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`
    }
}
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());
*/
//--------------MODELING A DOG
/*
const dog = {
    name : 'Shiobhan',
    species : 'german shepherd',
    size: 75,
    sound: 'Woof!',
    bark(){
        return `${this.sound} ${this.sound}`
    }
}
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
*/

//----------------MODELING A CIRCLE
/* 
const r = Number(prompt('Enter a circle radius:'));

const circle = {
    //2Pr
    circumference(){
        return `${2*Math.PI*r}`
    },
    area(){
        return `${Math.PI*(r**2)}`
    }
}
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
*/

//---------------MODELING A BANK ACCOUNT
/*
const account = {
    name: 'Alex',
    balance: 0,
    credit(x){
       this.balance += x;
    },
    describe(){
        return `Owner: ${this.name}, balance ${this.balance}`
    }
}
account.credit(250-80);
console.log(account.describe())
*/