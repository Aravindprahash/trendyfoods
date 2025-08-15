import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomerDetails from "./pages/CustomerDetails";
import PaymentPage from "./pages/PaymentPage";
import ThankYouPage from "./pages/ThankYouPage";
import './index.css';

const Layout = ({ children }) => {
  const location = useLocation();

  const noFooterPaths = ["/customerdetails", "/payment", "/thankyou"];
  const showFooter = !noFooterPaths.includes(location.pathname);

  return (
    <>
      <main style={{ flex: 1 }} className="py-0">
        {children}
      </main>
      {showFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <Router>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/category/:catName" element={<CategoryPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/customerdetails" element={<CustomerDetails />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/thankyou" element={<ThankYouPage />} />
              </Routes>
            </Layout>
            <ToastContainer position="top-right" autoClose={2000} />
          </div>
        </Router>
      </CartProvider>
    </SearchProvider>
  );
}

export default App;
