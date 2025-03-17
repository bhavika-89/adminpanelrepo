import { useEffect, useState } from 'react';
import useProductStore from '../store/productStore';

const Products = () => {
  const { products, fetchProducts, addProduct, updateProduct, deleteProduct } = useProductStore();
  const [newProduct, setNewProduct] = useState({ title: '', price: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        addProduct(newProduct);
        setNewProduct({ title: '', price: '' });
      }}>
        <input type="text" placeholder="Title" value={newProduct.title} onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} required />
        <input type="number" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} required />
        <button type="submit">Add Product</button>
      </form>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
            <button onClick={() => updateProduct(product.id, { title: 'Updated Product', price: 99 })}>Edit</button>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
