import React, { useContext } from "react";
import "./CartComponent.css";

import { Cart } from "./CartContext";
import CartProduct from "./CartProduct";

const CartComponent = (props) => {
  const { cart, setCart } = useContext(Cart);

  const calculateTotalAmount = () => {
    return cart.reduce((total, med) => total + med.price * med.quantity, 0);
  };

  return (
    <div className="modal-overlay">
      <div className="cart-main">
        <div>
          {cart.map((med) => (
            <CartProduct med={med} key={med.id} />
          ))}
        </div>
        <div className="cart-total">
          <p>Total Amount: ${calculateTotalAmount().toFixed(2)}</p>
        </div>
        <div className="cart-button">
          <button>Place Order</button>
          <button onClick={props.setShowCart}>Cancle</button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
