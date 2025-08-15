import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CategoryPage() {
  const { catName } = useParams();
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [catName]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 1500,
    });
  };

  const handleViewDetails = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-capitalize">{catName}</h2>
      <div className="row">
        {products.length > 0 ? (
          products.map((p) => (
            <div className="col-md-3 mb-3" key={p._id}>
              <div className="card h-100">
                <img
                  src={p.image}
                  className="card-img-top"
                  alt={p.name}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                  <strong>₹{p.price}</strong>

                  <div className="mt-auto">
                    <button
                      className="btn btn-success me-2"
                      onClick={() => handleAddToCart(p)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleViewDetails(p._id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
