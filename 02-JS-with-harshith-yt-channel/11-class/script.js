// JS Class
// - internally same thing happens as we learn previously, class is just an easier way
class CreateUser {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }

  about() {
    console.log(`${this.firstName} is ${this.age} years old`);
  }
}

const user1 = new CreateUser("Lakhan", 44);
console.log(user1); // CreateUser {firstName: 'Lakhan', age: 44}

user1.about(); // Lakhan is 44 years old
console.log(CreateUser.prototype); // {constructor: ƒ, about: ƒ}

// EXTENDS (INHERITANCE) ----------------------------------------------------------------------------------------
// - using the props and methods of another class obj
class Animal {
  constructor(animalName) {
    this.animalName = animalName;
  }
}

class Cat extends Animal {}

// - In the below code, there is no constructor and when we use extends, we are using the props and methods from the Animal class
// - Here, the Animal - parent class, Cat - subclass
const catName = new Cat("kitty");
console.log(catName); // Cat{animalName: 'kitty'}

