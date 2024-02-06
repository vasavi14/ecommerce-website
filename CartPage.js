import React, { useState, useEffect } from "react";
import './CartPage.css';
import UserDetailsModal from "./components/UserDetailsModal";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const incrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, amount: item.amount + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBuyNow = (userDetails) => {
    console.log("Buy Now details received:", userDetails);
    // Perform any actions with userDetails (e.g., send to server, update state, etc.)
  };


  

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.amount > 1
        ? { ...item, amount: item.amount - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.amount,
      0
    );
  };

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Your Cart</h1><hr></hr>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div className="cart-item-info">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.amount}</p>
            <button className="button1" onClick={() => incrementQuantity(item.id)} style={{ width: "80px", height: "40px" }}>+</button>
            <button className="button1" onClick={() => decrementQuantity(item.id)} style={{ width: "80px", height: "40px" }}>-</button>
            <button className="button1" onClick={() => removeItem(item.id)} style={{ width: "80px", height: "40px" }}>Remove</button>
          </div>
        </div>
      ))}
      <hr></hr>


      <div>
        <p>Total Price: ${calculateTotalPrice()}</p>
      </div>
      <div data-tooltip="Price:$1000" className="button5" onClick={openModal}>
        <div class="button-wrapper">
          <div class="text">Buy Now</div>
          <span class="icon">
            <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
            </svg>
          </span>
        </div>
      </div>
      {/* <button onClick={openModal}>Open Modal</button> */}

      {isModalOpen && <UserDetailsModal onClose={closeModal} onBuyNow={handleBuyNow} />}
      

    </div>
  );
};

export default CartPage;
