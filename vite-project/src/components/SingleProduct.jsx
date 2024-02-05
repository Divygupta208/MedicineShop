import React, { useContext } from "react";
import { Cart } from "./CartContext";
import "./SingleProduct.css";
const SingleProduct = ({ med, addToCartHandler }) => {
  const { availableMed, setAvailableMed, cart, setCart } = useContext(Cart);

  const addToCart = () => {
    const item = {
      id: med.id,
      name: med.name,
      description: med.description,
      price: med.price,
      quantity: med.quantity,
    };

    addToCartHandler({
      id: med.id,
      name: med.name,
      description: med.description,
      price: med.price,
      quantity: 1,
    });

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
      <div className="product-details">
        <div className="product-name">{med.name}</div>
        <div className="product-description">{med.description}</div>
        <div className="product-price">Rs.{med.price}/strip</div>
        <div className="product-quantity">
          Available Quantity :-{" "}
          <strong>
            {med.quantity === 0 ? (
              <span className="out-of-stock-message">Out Of Stock</span>
            ) : (
              med.quantity
            )}
          </strong>
        </div>
      </div>
      <div className="product-actions">
        <button onClick={addToCart} disabled={med.quantity === 0}>
          Add To Bill
        </button>
      </div>
    </li>
  );
};

export default SingleProduct;
