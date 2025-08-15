import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart, clearCart, totalAmount } = useCart();
  const navigate = useNavigate();

  if (!cart || cart.length === 0) return <div className="container mt-5 text-center"><h4>Your cart is empty</h4></div>;

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item._id || item.id} className="d-flex align-items-center justify-content-between border p-2 mb-2 rounded">
          <img src={item.image} alt={item.name} style={{width:60, height:60, objectFit:'cover', borderRadius:6}} />
          <div className="flex-grow-1 ms-3">
            <h6>{item.name}</h6>
            <small className="text-muted">₹{item.price}</small>
          </div>

          <div className="d-flex align-items-center">
            <button className="btn btn-sm btn-outline-secondary" onClick={()=>{ decreaseQty(item._id||item.id); }}>-</button>
            <span className="mx-2">{item.quantity||0}</span>
            <button className="btn btn-sm btn-outline-secondary" onClick={()=>{ increaseQty(item._id||item.id); }}>+</button>
          </div>

          <button className="btn btn-sm btn-danger ms-3" onClick={()=>{ removeFromCart(item._id||item.id); toast.info(`${item.name} removed`); }}>Remove</button>
        </div>
      ))}

      <h4 className="mt-3">Total: ₹{totalAmount.toFixed(2)}</h4>

      <div className="mt-3">
        <button className="btn btn-warning me-3" onClick={()=>{ clearCart(); toast.info('Cart cleared'); }}>Clear Cart</button>
        <button className="btn btn-success" onClick={()=> navigate('/CustomerDetails') }>Pay Now</button>
      </div>
    </div>
  );
};

export default Cart;
