import React, { useContext } from "react";
import "./CartComponent.css";

import { Cart } from "./CartContext";
import CartProduct from "./CartProduct";

const CartComponent = () => {
  const { cart } = useContext(Cart);
  return (
    <div className="cart-main">
      {cart.map((med) => (
        <CartProduct med={med} />
      ))}
    </div>
  );
};

export default CartComponent;
