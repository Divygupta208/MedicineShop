import React, { useContext } from "react";
import { Cart } from "./CartContext";
import "./CartComponent.css";
const CartProduct = ({ med }) => {
  return (
    <li className="product-list" key={med.id}>
      <div>
        <div className="med-name">
          <h3>{med.name}</h3>
        </div>
        <div className="med-desc">
          <h6>{med.description}</h6>
        </div>
      </div>
      <div className="med-price">
        {med.quantity} X {med.price} / strip
      </div>
    </li>
  );
};

export default CartProduct;
