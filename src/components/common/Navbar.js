import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import { useSearch } from '../../context/SearchContext';

const Navbar = () => {
  const { cart } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();
  const count = Array.isArray(cart) ? cart.reduce((s, i) => s + (i.quantity || 0), 0) : 0;

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Trendyfoods</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="categoriesDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Categories
              </span>
              <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                <li><NavLink className="dropdown-item" to="/category/Biryani">Biryani</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/South Indian Foods">South Indian</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/North Indian Foods">North Indian</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/Chinese">Chinese</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/Ice Cream">Ice Cream</NavLink></li>
              </ul>
            </li>

            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>

          <form className="d-flex me-3" onSubmit={e => e.preventDefault()}>
            <input
              className="form-control"
              style={{ minWidth: 200 }}
              placeholder="Search products..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </form>

          <Link 
  to="/cart" 
  className="btn btn-outline-light position-relative ms-2 mt-2 mt-lg-0"
>
  <FaShoppingCart />
  {count > 0 && (
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {count}
    </span>
  )}
</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
