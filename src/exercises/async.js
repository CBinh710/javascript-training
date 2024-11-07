const baseUrl = 'https://655c1a03ab37729791a9d383.mockapi.io';

// 1. Get all products
async function getAllProducts() {
  try {
    const response = await fetch(`${baseUrl}/products`);
    const data = await response.json();
    console.log("All Products:", data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
getAllProducts();

// 2. Get product by ID
async function getProductByID(id) {
	try {
		const response = await fetch(`${baseUrl}/products/${id}`);
		const data = await response.json();
		console.log("Get product by ID:", data);
	}
	catch (error) {
		console.error("Error fetching product:", error);
	}
}
getProductByID(10)

// 3. Update product by ID
async function updateProduct(id, updatedData) {
	try{
		const response = await fetch(`${baseUrl}/products/${id}`,{
			method: 'PUT',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(updatedData)
		});
		const data = await response.json();
		console.log("Update product:",data);
	} catch (error) {
		console.error("Error updating product", error)
	}	
}

updateProduct(50, {name: "My old name"});
// 4. Create a new product
// async function createNewProduct(newProduct) {
// 	try {
// 		const response = await fetch(`${baseUrl}/products`, {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json"
// 			},
// 			body: JSON.stringify(newProduct)
// 		});
// 		const data = await response.json();
// 		console.log("Create new product:", data);
// 	} catch (error) {
// 		console.error("Error fetching product:", error);
// 	}
// }
// createNewProduct({ name: "My new product", categoryId: 1 });
// 5. Delete product by ID

async function deleteProduct(id) {
  try {
    const response = await fetch(`${baseUrl}/products/${id}`, {
      method: "DELETE"
    });
    const deletedProduct = await response.json();
    console.log("Deleted Product:", deletedProduct);
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}

deleteProduct(70);
// 6. Get all products with category names

