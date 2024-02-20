import React, { useContext } from "react";
import { Cart } from "./CartContext";
import "./SingleProduct.css";
const SingleProduct = ({ med, addToCartHandler }) => {
  const { availableMed, setAvailableMed, cart, setCart } = useContext(Cart);

  const addToCart = async () => {
    const itemId = med._id;
    const response = await fetch(
      `https://crudcrud.com/api/bb155f8b34114078adecbf63807b4f50/medicines/${itemId}`
    );

    const data = await response.json();

    addToCartHandler(data);

    const newMed = availableMed.map((meds) => {
      if (meds._id === itemId) {
        meds.quantity = meds.quantity - 1;
      }

      return {
        _id: meds._id,
        name: meds.name,
        description: meds.description,
        price: meds.price,
        quantity: meds.quantity,
      };
    });

    const updatedMed = [...newMed];

    setAvailableMed(updatedMed);

    updateAvailableMed(data);
  };

  const updateAvailableMed = async (item) => {
    const id = item._id;

    const updatedMed = {
      name: item.name,
      description: item.description,
      price: item.price,
      quantity: item.quantity - 1,
    };

    const response = await fetch(
      `https://crudcrud.com/api/bb155f8b34114078adecbf63807b4f50/medicines/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedMed),
        headers: { "Content-Type": "application/json" },
      }
    );
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
