// Exercise 1
const randomValues = [1, '1', 'Mike', 0, 12, true];

// 1. Print type of all items in randomValues
const typeValues = randomValues.forEach((value) => console.log(typeof value));

// 2. How many number in randomValues
//Using filter
const numberCount = randomValues.filter((valueNumber) => typeof valueNumber === 'number').length;

console.log('Using filter() to count:' + numberCount);

//Using for loop
let count = 0;

for (let i = 0; randomValues.length > i; i++) {
  if (typeof randomValues[i] === 'number') {
    count++;
  }
}

console.log('Using for() loop to count:' + count);

// Exercise 2
const randomNumbers = [10, 20, 50, 25, 70, 0, 55, 90];
// 1. Find the item with value = 70 and 30 in randomNumbers. Find at least 4 ways to do this

// Using indexOf()
const indexNumber70 = randomNumbers.indexOf(70) !== -1 ? "Found 70" : "70 Not Found";
const indexNumber30 = randomNumbers.indexOf(30) !== -1 ? "Found 30" : "30 Not Found";

console.log('Using indexOf() to determine value:');
console.log(indexNumber70); 
console.log(indexNumber30);

// Using find()
const findNumber70 = randomNumbers.find(number => number === 70) !== undefined ? "Found 70" : "70 Not Found";
const findNumber30 = randomNumbers.find(number => number === 30) !== undefined ? "Found 30" : "30 Not Found";

console.log('Using find() to determine value:');
console.log(findNumber70);
console.log(findNumber30); 

// Using filter()
const filterNumber70 = randomNumbers.filter(number => number === 70).length > 0 ? "Found 70" : "70 Not Found";
const filterNumber30 = randomNumbers.filter(number => number === 30).length > 0 ? "Found 30" : "30 Not Found";

console.log('Using filter() to determine value:');
console.log(filterNumber70);
console.log(filterNumber30);

// Using for()
let foundNumber70 = false;
let foundNumber30 = false;

for (let i = 0; i < randomNumbers.length; i++) {
  if (randomNumbers[i] === 70) {
    foundNumber70 = true;
  }
  if (randomNumbers[i] === 30) {
    foundNumber30 = true;
  }
}

const result70 = foundNumber70 ? "Found 70" : "70 Not Found";
const result30 = foundNumber30 ? "Found 30" : "30 Not Found";

console.log('Using for() to determine value:');
console.log(result70);
console.log(result30);

// 2. Find the biggest number in randomNumbers. Print result and index of them
let maxNumber = randomNumbers[0];
let maxIndex = 0;

for (let i = 1; randomNumbers.length > i; i++) {
  if (randomNumbers[i] > maxNumber) {
    maxNumber = randomNumbers[i];
    maxIndex = i;
  }
}

console.log('Value of biggest number in randomNumbers is ' + maxNumber);
console.log('Index of biggest number in randomNumbers is ' + maxIndex);

// 3. Plus each number in randomNumbers with 5. Result should be [15, 25, 55 …]. Find at least 2 ways to do this

// Using Map()

const plusFive = randomNumbers.map(num => num + 5);

console.log('Using map() to create new array:');
console.log(plusFive);
// Using loop
let plusFiveLoop = [];

for (let i = 0; i < randomNumbers.length; i++) {
  plusFiveLoop.push(randomNumbers[i] + 5);
}

console.log('Using for() to create new array:');
console.log(plusFiveLoop);

// Using forEach()
let newNumbers = [];

randomNumbers.forEach(function (num) {
  newNumbers.push(num + 5)
});

console.log('Using forEach() to create new array:');
console.log(newNumbers);
