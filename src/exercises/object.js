//Object exercise
const users = [
    { name: 'Kenny', age: 15 },
    { name: 'Alice', age: 18 },
    { name: 'Tom', age: 5 },
    { name: 'Henry', age: 30 },
    { name: 'Mike', age: 17 }, 
  ];
  // 1. Get all users that their ages are over 18
  const usersOver18 = users.filter(user => user.age > 18);
  
  console.log('Get all users that their ages are over 18');
  console.log(usersOver18);
  
  // 2. Find user have letter “e” in their name
  const usersWithE = users.filter(user => user.name.toLowerCase().includes('e'));
  
  console.log('Users have letter “e” in their name');
  console.log(usersWithE);
  
  // 3. Uppercase people name
  const usersUpperCase = users.map(user => ({
    name: user.name.toUpperCase(),
    age: user.age
  }));
  
  console.log('Uppercase people name:');
  console.log(usersUpperCase);
  
  // 4. Order user by their ages from younger to older
  const usersSortedByAge = users.sort((a, b) => a.age - b.age)
  
  console.log('Order user by their ages from younger to older: ')
  console.log(usersSortedByAge);
  