import React from "react";

const CartProduct = ({ med }) => {
  return (
    <li className="product-list">
      <div>
        {med.name}-{med.description}-{med.price} -{med.quantity}
      </div>
      <div></div>
    </li>
  );
};

export default CartProduct;
