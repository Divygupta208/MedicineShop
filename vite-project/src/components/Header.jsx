import React, { useContext, useEffect, useRef } from "react";
import "./Header.css";
import { Cart } from "./CartContext";

const Header = (props) => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  const { setAvailableMed, cart, availableMed } = useContext(Cart);

  const addMedicineHandler = async (event) => {
    event.preventDefault();

    const newMedicine = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
      quantity: quantityRef.current.value,
    };

    const response = fetch(
      "https://crudcrud.com/api/bb155f8b34114078adecbf63807b4f50/medicines",
      {
        method: "POST",
        body: JSON.stringify(newMedicine),
        headers: { "Content-Type": "application/json" },
      }
    );

    fetchDataHandler();
  };

  const fetchDataHandler = async () => {
    const response = await fetch(
      "https://crudcrud.com/api/bb155f8b34114078adecbf63807b4f50/medicines"
    );

    const data = await response.json();

    setAvailableMed(data);
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

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
