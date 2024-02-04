import React, { useContext } from "react";
import { Cart } from "./CartContext";

const SingleProduct = ({ med, addToCartHandler }) => {
  const { availableMed, setAvailableMed } = useContext(Cart);

  const addToCart = () => {
    const item = {
      id: med.id,
      name: med.name,
      description: med.description,
      price: med.price,
      quantity: med.quantity,
    };
    addToCartHandler(item);

    const newMed = availableMed.map((meds) => {
      if (meds.id === item.id) {
        meds.quantity = meds.quantity - 1;
      }

      return {
        id: meds.id,
        name: meds.name,
        description: meds.description,
        price: meds.price,
        quantity: meds.quantity,
      };
    });

    const updatedMed = [...newMed];

    setAvailableMed(updatedMed);
  };

  return (
    <li className="product-list">
      <div>
        {med.name}-{med.description}-{med.price}
      </div>
      <div>
        {med.quantity}
        <button onClick={addToCart}>Add To Cart</button>
      </div>
    </li>
  );
};

export default SingleProduct;
