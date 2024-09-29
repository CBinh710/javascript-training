async function getAllProducts() {
  try {
    const response = await fetch('https://655c1a03ab37729791a9d383.mockapi.io/products');
    const data = await response.json();
    console.log('All Products:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}
getAllProducts();

async function getProductById(id) {
  try {
    const response = await fetch(`https://655c1a03ab37729791a9d383.mockapi.io/products/${id}`);
    const data = await response.json();
    console.log('Product by ID:', data)
  } catch (error) {
    console.error('Error:', error);
  }
}
getProductById(1)

async function updateProductById(id, newName) {
  try {
    const response = await fetch(`https://655c1a03ab37729791a9d383.mockapi.io/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name: newName })
    });
    const data = await response.json();
    console.log('Updated Product:', data);
  } catch (error) {
    console.log('Error:', error);
  }
}
updateProductById(1, 'Binh Chau');

async function createProduct(newProduct) {
  try {
    const response = await fetch('https://655c1a03ab37729791a9d383.mockapi.io/products', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ newProduct })
    });
    const data = await response.json();
    console.log('Create new product:', data);
  } catch (error) {
    console.log('Error:', error);
  }
}
createProduct({ name: 'Shoppe', categoryId: 1 });
