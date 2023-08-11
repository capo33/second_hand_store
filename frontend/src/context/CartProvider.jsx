import React from "react";
import { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ chidren }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {chidren}
    </CartContext.Provider>
  );
};

export default CartProvider;
