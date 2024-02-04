import React, { createContext, useState } from "react";

export const Cart = createContext();

const INITIAL_AVAILABLE = [
  {
    name: "Dolo",
    description: "Fever",
    price: "100",
    quantity: "10",
  },
];

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [availableMed, setAvailableMed] = useState(INITIAL_AVAILABLE);

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
