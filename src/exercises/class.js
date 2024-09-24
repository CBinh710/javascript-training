// EXERCISE:
// ---------------------
// class User { }

// Update class so we can use following code without error
// var user = new User({name: “Ken”, age: 18})
// user.name // Ken

// Update class so we can use following code without error
// var user = new User({name: “Ken”, age: 18})
// user.getInfo() // This is Ken. He is 18 years old

// Update class so we can use following code without error
// var user = new User({name: “Ken”, age: 18})
// var user2 = new User({name: “Mary”, age: 15})
// user.isAdult() // true
// user2.isAdult() // false

class User {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `This is ${this.name}. He is ${this.age} years old.`;
  }

  isAdult(adultAge = 18) {
    return this.age >= adultAge;
  }
}

const user = new User({ name: 'Ken', age: 18 });
const user2 = new User({ name: 'Mary', age: 15 });

console.log(user.name);       
console.log(user.getInfo()); 
console.log(user.isAdult());
console.log(user2.isAdult());
