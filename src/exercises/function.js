const users = [
  { name: 'Kenny', age: 15 },
  { name: 'Alice', age: 18 },
  { name: 'Tom', age: 5 },
  { name: 'Henry', age: 30 },
  { name: 'Mike', age: 17 }, 
];

// 1. Write a function that prints usernames
function printUsername(user) {
  console.log(user.name);
}

// 2. Write a function that find all users that their ages in ranges
function findUserInRange(users, fromAge, toAge) {
  return users.filter(user => user.age >= fromAge && user.age <= toAge);
}

const usersInRange = findUserInRange(users, 10, 20);

console.log(usersInRange);

// 3. Write a function that accepts a function as input to handle users
function handleUserByAction(users, action) {
  users.forEach(user => {
    action(user);
  });
}

//Pass a function to print user names
handleUserByAction(users, printUsername);

//Pass a function to print user names and ages
handleUserByAction(users, function(user) {
  console.log(user.name + ' is ' + user.age + ' years old');
});
