//****************OBJECT ORIENTED PROGRAMMING********************/
// const character = {
//   name: 'Anna',
//   age: 24,
//   xp: 0,
//   health: 100,
//   describe() {
//     return `My name is ${this.name}. I am ${this.age} years old with ${this.xp} as experience and ${this.health} health points`;
//   },
// };
// const muringo = character;
// muringo.name = 'Muringo';
// console.log(muringo.describe());
/*
class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0;
    }
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          console.log(
            `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`
          );
          this.xp += bonusXP;
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`);
      }
    }
    describe() {
      return `${this.name} has ${this.health} health points, ${this.strength} strength and ${this.xp} xp points`;
    }
  }
  const anna = new Character('Anna', 150, 25);
  const glacius = new Character('Glacius', 130, 30);
  console.log('Welcome to the adventure! Here are our heroes ');
  console.log(anna.describe());
  console.log(glacius.describe());
  const monster = new Character('Spike', 40, 20);
  console.log(`A wild monster has appeared. It's named ${monster.name}`);
  monster.attack(glacius);
  monster.attack(anna);
  anna.attack(monster);
  glacius.attack(monster);
  console.log(anna.describe());
  console.log(glacius.describe());
*/
//DOGS
//----Complete the program to add the definition of the Dog class
//Define the dog class
/*
class Dog {
    constructor(name, species, size) {
      this.name = name;
      this.species = species;
      this.size = size;
    }
    bark() {
      return `Woof! Woof!`;
    }
  }
  
  const fang = new Dog('Fang', 'boarhound', 75);
  console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
  console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);
  
  const snowy = new Dog('Snowy', 'terrier', 22);
  console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
  console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);
  */

//CHARACTER INVENTORY
////-------------Improve the example rpg program to add character inventory management according to the following rules
/*
class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0;
      this.gold = 10;
      this.keys = 1;
    }
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          target.keys = 0;
          const bonusXP = 10;
          const extraGold = 10;
          target.gold = 0;
          const extraKey = 1;
          target.keys = 0;
          console.log(
            `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${extraGold} gold and ${extraKey} key(s)`
          );
          this.xp += bonusXP;
          this.gold += 10;
          this.keys += 1;
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`);
      }
    }
    describe() {
      return `${this.name} has ${this.health} health points, ${this.strength} strength, ${this.xp} xp points, ${this.gold} gold and ${this.keys} key(s)`;
    }
  }
  const anna = new Character('Anna', 150, 25);
  const glacius = new Character('Glacius', 130, 30);
  // console.log('Welcome to the adventure! Here are our heroes ');
  console.log(anna.describe());
  console.log(glacius.describe());
  const monster = new Character('Spike', 40, 20);
  console.log(`A wild monster has appeared. It's named ${monster.name}`);
  monster.attack(glacius);
  monster.attack(anna);
  anna.attack(monster);
  glacius.attack(monster);
  console.log(anna.describe());
  console.log(glacius.describe());
*/

//--ACCOUNT LIST
//--Build upon previous account object exercise
/*
class Account {
    constructor(name) {
      this.name = name;
      this.balance = 0;
    }
    credit(creditAmount) {
      return `${(this.balance += creditAmount)}`;
    }
    describe() {
      return `Owner: ${this.name}, balance: ${this.balance}`;
    }
  }
  // const sean = new Account('Sean');
  // sean.credit(1000);
  // console.log(sean.describe());
  // const brad = new Account('Brad');
  // brad.credit(2000);
  // console.log(brad.describe());
  const accountList = [];
  accountList.push(new Account('Sean'));
  accountList.push(new Account('Brad'));
  accountList.push(new Account('Georges'));
  accountList.forEach((account) => {
    account.credit(1000);
    console.log(account.describe());
  });
*/
