// Exercise 1
const randomValues = [1, '1', 'Mike', 0, 12, true];

// 1. Print type of all items in randomValues
const typeValues = randomValues.forEach((value) => typeof value);

// 2. How many number in randomValues
//Using filter
const numberCount = randomValues.filter((valueNumber) => typeof valueNumber === 'number').length;

//Using for loop
let count = 0;

for (let i = 0; randomValues.length > i; i++) {

  if (typeof randomValues[i] === 'number') {
    count++
  }

}

// Exercise 2
let randomNumbers = [10, 20, 50, 25, 70, 0, 55, 90];
// 1. Find the item with value = 70 and 30 in randomNumbers. Find at least 4 ways to do this

// Using indexOf()
const index30 = randomNumbers.indexOf(30);

const index70 = randomNumbers.indexOf(70);

// Using find()
const item30 = randomNumbers.find(value => value === 30);

const item70 = randomNumbers.find(value => value === 70);

// Using filter()
const value30 = randomNumbers.filter(value => value === 30);

const value70 = randomNumbers.filter(value => value === 70);

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

// 2. Find the biggest number in randomNumbers. Print result and index of them
let maxNumber = randomNumbers[0];

let maxIndex = 0;

for (let i = 1; randomNumbers.length > i; i++) {

  if (randomNumbers[i] > maxNumber) {
    maxNumber = randomNumbers[i];
    maxIndex = i;
  }

}

// 3. Plus each number in randomNumbers with 5. Result should be [15, 25, 55 …]. Find at least 2 ways to do this

// Using Map()
const plusFive = randomNumbers.map(num => num + 5);

// Using loop
const plusFiveLoop = [];

for (let i = 0; i < randomNumbers.length; i++) {
  plusFiveLoop.push(randomNumbers[i] + 5);
}

// Using forEach()
const newNumbers = [];

randomNumbers.forEach(function (num) {
  newNumbers.push(num + 5)
});
