// Exercise 1
const randomValues = [1, '1', 'Mike', 0, 12, true];

// 1. Print type of all items in randomValues
let typeValues = randomValues.forEach((value) => console.log(typeof value));

// 2. How many number in randomValues
//Using filter
const numberCount = randomValues.filter((valueNumber) => typeof valueNumber === 'number').length;

console.log(numberCount);
//Using for loop
let count = 0;

for (let i = 0; randomValues.length > i; i++) {

  if (typeof randomValues[i] === 'number') {
    count++;
  }

}

console.log(count);
// Exercise 2
let randomNumbers = [10, 20, 50, 25, 70, 0, 55, 90];
// 1. Find the item with value = 70 and 30 in randomNumbers. Find at least 4 ways to do this

// Using indexOf()
let index70 = randomNumbers.indexOf(70) !== -1 ? "Found 70" : "70 Not Found";
let index30 = randomNumbers.indexOf(30) !== -1 ? "Found 30" : "30 Not Found";

console.log(index70); 
console.log(index30);

// Using find()
let find70 = randomNumbers.find(number => number === 70) !== undefined ? "Found 70" : "70 Not Found";
let find30 = randomNumbers.find(number => number === 30) !== undefined ? "Found 30" : "30 Not Found";

console.log(find70);
console.log(find30); 
// Using filter()
let filter70 = randomNumbers.filter(number => number === 70).length > 0 ? "Found 70" : "70 Not Found";
let filter30 = randomNumbers.filter(number => number === 30).length > 0 ? "Found 30" : "30 Not Found";

console.log(filter70);
console.log(filter30);

// Using for()
let found70 = false;
let found30 = false;

for (let i = 0; i < randomNumbers.length; i++) {
  if (randomNumbers[i] === 70) {
    found70 = true;
  }
  if (randomNumbers[i] === 30) {
    found30 = true;
  }
}

let result70 = found70 ? "Found 70" : "70 Not Found";
let result30 = found30 ? "Found 30" : "30 Not Found";

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

// Using forEach()
let newNumbers = [];

randomNumbers.forEach(function (num) {
  newNumbers.push(num + 5)
});

console.log(newNumbers);
