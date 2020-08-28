/*
TASK 1 🚀
// in your own words explain what a closure is below in comments and then write an example of a closure. Try to make this explaination simple enough to explain to a younger sibling. */

// A closure is a function with access to a parent scope. It allows the use of 'private' variables that can't otherwise be altered or accessed.

function mmaFighter(){
  var name = 'Dominick Cruz';
  function mmaRecord(){
    console.log(`${name} has a pro fight record of 22 wins, 3 losses`)
  }
  mmaRecord();
}
console.log(mmaFighter());
// It's not perfect, but my understanding isn't perfect either. Nonetheless, mmaRecord can clearly access data outside of its function.

/*
TASK 2 🚀
// look at the code below and explain in your own words where the variable 'count' is available. 
// Explain why 'count' is initialized with a let and not a var or const. 
// Explain how initalizing the variable 'count' with a var would change it's scope
*/
function counterMaker() {
    let count = 0;
    return function counter() {
     return count++;
    }
  }
// 'count' is available inside of the counterMaker function, and can only be accessed by referencing it. Changing it to var would make it accessible globally.




/*
TASK 3 🚀
* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: The default, if no other options are chosen. 'this' will refer to the window.
* 2. Implicit Binding: When function is invoked, look to the left of the dot. Most common use of 'this' keyword.
* 3. Explicit Binding: You specifically provide the context for invoking the function. .call, .apply, etc. To be honest, this is the variation of 'this' that I am most confused about, and I don't entirely understand how it works (and gets broken)
* 4. New Binding: Constructs a new Object, which 'this' then points to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function myCar(car){
  console.log('My car is a Toyota ' + this.car);
}
myCar(); // this.car returns 'undefined'
window.car = 'Camry';
myCar(); // this.car now returns 'Camry'
// Principle 2

// code example for Implicit Binding

const dinner2Nite = {
  main_course: 'pan-seared salmon',
  side_dish: 'jasmine rice',
  cook: function(){
    console.log(this.main_course + ', served with ' + this.side_dish);
  }
}
dinner2Nite.cook();

// Principle 3

// code example for New Binding

function authors (name, book){
  this.name = name;
  this.book = book;
}
const author1 = new authors('Robert Holdstock', 'Mythago Wood');

console.log(author1);

// Principle 4

// code example for Explicit Binding

function boxers(){
  console.log(this.name + ' has a professional boxing record of' + this.record);
}
const boxerName1 = {
  name: 'Prince Naseem Hamed',
  record: ' 36-1',
}
const boxerName2 = {
  name: 'Emanuel Augustus',
  record: ' 38-34',
}
boxers.call(boxerName2);
boxers.call(boxerName1);




/*
TASK 4 🚀
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
/* function GameObject(attributes){
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}
GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`;
}
/* const Stick = new GameObject({
  createdAt: 'Today',
  name: 'Thebes',
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
})
console.log(Stick);
console.log(Stick.destroy()); */
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
/* function CharacterStats(attributes){
  this.healthPoints = attributes.healthPoints;
  GameObject.call(this, attributes);
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`;
} */
/* const Stick = new CharacterStats({
  healthPoints: 50,
  createdAt: 'Yesterday',
  name: 'Joe',
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
})
console.log(Stick.destroy()); */
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
/* function Humanoid(attributes){
  this.name = attributes.name;
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
  CharacterStats.call(this, attributes);
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`;
} */ 
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


/*   const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  }); */
 /*  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from 
  */

// console.log(mage);




/*
TASK 5 🚀
// convert the constructor functions above to class syntax copy and paste the objects and console logs below the class syntax to test if your code is working
 */
class GameObject{
  constructor(attributes){
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }
  destroy(){
    return `${this.name} was removed from the game.`
  }
}
class CharacterStats extends GameObject{
  constructor(attributes){
    super(attributes);
    this.healthPoints = attributes.healthPoints;
  }
  takeDamage(){
    return `${this.name} took damage.`;
  }
}
class Humanoid extends CharacterStats{
  constructor(attributes){
    super(attributes);
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
  }
  greet(){
    return `${this.name} extends a greeting in ${this.language}`
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});
const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});
const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});


console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from 