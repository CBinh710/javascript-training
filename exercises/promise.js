// 1. Get all products
fetch('https://655c1a03ab37729791a9d383.mockapi.io/products')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error('Error:', error));

// 2. Get product by ID
fetch(`https://655c1a03ab37729791a9d383.mockapi.io/products/50`)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.log(error));

// 3. Update product by ID
fetch(`https://655c1a03ab37729791a9d383.mockapi.io/products/50`,{
	method: 'PUT',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		name: 'Binh Chau',
	}),
})
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error('Error', error));

// 4. Create a new product
// fetch(`https://655c1a03ab37729791a9d383.mockapi.io/products`,{
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// 	body: JSON.stringify({
// 		name: 'BinhChau',
// 		categoryId: 2,		
// 	}),
// })
// 	.then(response => response.json())
// 	.then(data => console.log(data))
// 	.catch(error => console.error('Error', error));
// 5. Delete a product by ID
fetch('https://655c1a03ab37729791a9d383.mockapi.io/products/90', {
  method: 'DELETE',
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
