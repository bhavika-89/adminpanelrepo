import { useEffect } from 'react';
import useCartStore from '../store/cartStore';

const Carts = () => {
  const { carts, fetchCarts, updateCart, deleteCart } = useCartStore();

  useEffect(() => {
    fetchCarts();
  }, []);

  return (
    <div>
      <h2>Carts</h2>
      <ul>
        {carts.map((cart) => (
          <li key={cart.id}>
            Cart ID: {cart.id} - Total Items: {cart.products.length}
            <button onClick={() => updateCart(cart.id, { products: [] })}>Clear Cart</button>
            <button onClick={() => deleteCart(cart.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carts;
