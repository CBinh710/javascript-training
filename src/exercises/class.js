class User {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `This is ${this.name}. He is ${this.age} years old.`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

const user = new User({ name: 'Ken', age: 18 });
const user2 = new User({ name: 'Mary', age: 15 });

console.log(user.name);       
console.log(user.getInfo()); 
console.log(user.isAdult());
console.log(user2.isAdult());
