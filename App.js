import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Shop from './components/Shop';
import CartPage from './CartPage';
import ProductDetails from './ProductDetails';
import Signup from './components/Signup';
import Register from './components/Register';
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  const handleSignup = (newUser) => {
    setUser(newUser);
  };


  return (
    <>
      <Header user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/register" element={< Register />} />
        <Route path="/contact" element={<Contact/>}/>


      </Routes>
      <div>
        <hr></hr><hr></hr>
        <Footer />
      </div>
    </>
  );
}

export default App;
