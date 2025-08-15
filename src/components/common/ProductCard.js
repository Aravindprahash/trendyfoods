import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';
import '../../App.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, 1);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm card">
        <img src={product.image} alt={product.name} className="card-img-top" style={{height:300, objectFit:'cover'}}/>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="text-success">₹{product.price}</p>
          <p className="card-text text-muted" style={{flex:1, fontSize:14}}>
            {product.description ? (product.description.length>80?product.description.slice(0,80)+'...':product.description) : (product.ingredients?.slice(0,3).join(', ') || '')}
          </p>
          <div className="d-flex gap-2 mt-2">
            <button className="btn btn-success flex-grow-1" onClick={handleAdd}>Add to Cart</button>
            <Link to={`/detail/${product._id}`} className="btn btn-primary">View Details</Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;
