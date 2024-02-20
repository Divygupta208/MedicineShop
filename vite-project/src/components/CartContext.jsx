import React, { createContext, useEffect, useState } from "react";

export const Cart = createContext();

const INITIAL_AVAILABLE = [];

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [availableMed, setAvailableMed] = useState(INITIAL_AVAILABLE);

  useEffect(() => {
    const fetchCartData = async () => {
      const response = await fetch(
        "https://crudcrud.com/api/bb155f8b34114078adecbf63807b4f50/CartProduct"
      );
      const data = await response.json();
      setCart(data);
    };

    fetchCartData();
  }, []);

  return (
    <Cart.Provider
      value={{
        cart,
        setCart,
        availableMed,
        setAvailableMed,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default CartContext;
