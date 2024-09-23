const users = [
    { name: 'Kenny', age: 15 },
    { name: 'Alice', age: 18 },
    { name: 'Tom', age: 5 },
    { name: 'Henry', age: 30 },
    { name: 'Mike', age: 17 }, 
];
  
  // 1. Write a function that prints usernames
function printUsernames(users) {
  users.forEach(users => {
      console.log(users.name)       
  });
}

printUsernames(users)
  // 2. Write a function that print all users that their ages in ranges
  // Ex: findUserInRange(users, fromAge, toAge)
function findUserInRange(users, fromAge, toAge){
  users.forEach(function(user) {
    if (user.age >= fromAge && user.age <= toAge){
      console.log(user.name + ', Age:' + user.age)
    }
  })
}

findUserInRange(users, 10, 20);

  // 3. Write a function that accepts a function as input to handle users
  // Ex: handleUserByAction(users, printName)
function handleUserByAction(users, action) {
  users.forEach(user => {
    action(user);
  });
}

// Example: Pass a function to print user names
handleUserByAction(users, function(user) {
  console.log(user.name);
});

// Example: Pass a function to print user names and ages
handleUserByAction(users, function(user) {
  console.log(user.name + ' is ' + user.age + ' years old');
});
