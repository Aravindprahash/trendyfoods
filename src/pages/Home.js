import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/common/ProductCard';
import { useSearch } from '../context/SearchContext';
import '../App.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const { searchTerm } = useSearch();

  useEffect(() => {
    axios.get('https://trendyfoods-backend-1.onrender.com/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const filtered = products.filter(p =>
    p.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div className="container">
        <h2 className="mt-4 mb-4" style={{textAlign:'center'}}>Welcome to Trendyfoods</h2>
        <p style={{textAlign:'center'}}>It's time to order, eat and enjoy your meals and exclusive drinks </p>
        <div className="row g-4">
          {filtered.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      </div>
  );
};

export default Home;
