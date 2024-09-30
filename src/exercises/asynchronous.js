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

getProductById(5)

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

async function createNewProduct(newProduct) {
  try {
    const response = await fetch('https://655c1a03ab37729791a9d383.mockapi.io/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });

    const data = await response.json();
    console.log('New Product Created:', data);
  } catch (error) {
    console.error('Error creating product:', error);
  }
}

// createNewProduct({ name: 'Chau Binh', categoryId: 1 });

async function deleteProductById(id) {
  try {
    const response = await fetch(`https://655c1a03ab37729791a9d383.mockapi.io/categories/1/products/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log(`Product with ID ${id} deleted successfully.`);
    } else {
      console.log(`Failed to delete product with ID ${id}.`);
    }
  } catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error);
  }
}

deleteProductById(7);

async function getProductsWithCategoryName() {
  try {
    const [productsResponse, categoriesResponse] = await Promise.all([
      fetch('https://655c1a03ab37729791a9d383.mockapi.io/products'),
      fetch('https://655c1a03ab37729791a9d383.mockapi.io/categories'),
    ]);

    const products = await productsResponse.json();
    const categories = await categoriesResponse.json();

    const productsWithCategory = products.map(product => {
      const category = categories.find(cat => cat.id == product.categoryId);
      return { ...product, categoryName: category ? category.name : 'Unknown' };
    });

    console.log('Products with Category Name:', productsWithCategory);
  } catch (error) {
    console.error('Error fetching products or categories:', error);
  }
}

getProductsWithCategoryName();
