// Exercise 1
var randomValues = [1, '1', 'Mike', 0, 12, true];

// 1. Print type of all items in randomValues
randomValues.forEach((value) => console.log(typeof value));

// 2. How many number in randomValues
const numberCount = randomValues.filter((valueNumber) => typeof valueNumber === 'number').length;
console.log(numberCount);

// Exercise 2
var randomNumbers = [10, 20, 50, 25, 70, 0, 55, 90];
// 1. Find the item with value = 70 and 30 in randomNumbers. Find at least 4 ways to do this

// Using indexOf()
let index30 = randomNumbers.indexOf(30);
let index70 = randomNumbers.indexOf(70);
console.log(index30);//-1
console.log(index70);//5

// Using find()
let item30 = randomNumbers.find(value => value === 30);
let item70 = randomNumbers.find(value => value === 70);
console.log(item30);
console.log(item70);

// Using filter()
// let index30 = randomNumbers.filter(value => value === 30);
// let index70 = randomNumbers.filter(value => value === 70);
// console.log(index30);
// console.log(index70);

// Using for()
let found30 = false;
let found70 = false;
for (let i = 0; randomNumbers.length > i; i++) {
  if (randomNumbers[i] === 30) {
    found30 = true
  };
  if (randomNumbers[i] === 70) {
    found70 = true
  };
}
console.log(found30);
console.log(found70);

// 2. Find the biggest number in randomNumbers. Print result and index of them
let maxNumber = randomNumbers[0];
let maxIndex = 0;
for (let i = 1; randomNumbers.length > i; i++) {
  if (randomNumbers[i] > maxNumber) {
    maxNumber = randomNumbers[i];
    maxIndex = i;
  }
}
console.log(maxNumber);
console.log(maxIndex);

// 3. Plus each number in randomNumbers with 5. Result should be [15, 25, 55 …]. Find at least 2 ways to do this
// Using Map()
let plusFive = randomNumbers.map(num => num + 5);
console.log(plusFive);
// Using loop
let plusFiveLoop = [];
for (let i = 0; i < randomNumbers.length; i++) {
  plusFiveLoop.push(randomNumbers[i] + 5);
}
console.log(plusFiveLoop);
