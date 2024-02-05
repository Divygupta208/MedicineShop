import React, { useContext, useRef } from "react";
import "./Header.css";
import { Cart } from "./CartContext";

const Header = (props) => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  const { setAvailableMed, cart } = useContext(Cart);

  const addMedicineHandler = (event) => {
    event.preventDefault();

    setAvailableMed((previous) => {
      return [
        ...previous,
        {
          id: Math.floor(Math.random() * 100) + 1,
          name: nameRef.current.value,
          description: descriptionRef.current.value,
          price: priceRef.current.value,
          quantity: quantityRef.current.value,
        },
      ];
    });

    nameRef.current.value = "";
    descriptionRef.current.value = "";
    priceRef.current.value = "";
    quantityRef.current.value = "";
  };

  const totalQuantity = cart.reduce(
    (total, item) => total + parseInt(item.quantity, 10),
    0
  );

  return (
    <div className="main-header">
      <form className="form" onSubmit={addMedicineHandler}>
        <label htmlFor="shoe-name">Medicine Name</label>
        <input ref={nameRef} type="text" id="shoe-name" />
        <label htmlFor="description">Description</label>
        <input ref={descriptionRef} type="text" id="description" />
        <label htmlFor="price">Price</label>
        <input ref={priceRef} type="number" id="price" />
        <label htmlFor="quantity">Qantity</label>
        <input ref={quantityRef} type="number" id="quantity" />
        <button>Add Item</button>
      </form>
      <button onClick={props.setShowCart}>Cart-{totalQuantity}</button>
    </div>
  );
};

export default Header;
