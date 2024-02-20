import React, { useContext } from "react";
import "./MedicineList.css";
import { Cart } from "./CartContext";
import SingleProduct from "./SingleProduct";

const MedicineList = () => {
  const { availableMed, cart, setCart } = useContext(Cart);

  const addToCartHandler = async (item) => {
    // Fetch existing cart data
    const response = await fetch(
      "https://crudcrud.com/api/bb155f8b34114078adecbf63807b4f50/CartProduct"
    );
    const cartData = await response.json();

    // Check if the item already exists in the cart
    const existingCartItem = cartData.find(
      (cartItem) => cartItem.name === item.name
    );

    if (existingCartItem) {
      // Item already exists, update its quantity
      const updatedItem = {
        name: existingCartItem.name,
        description: existingCartItem.description,
        price: existingCartItem.price,
        quantity: existingCartItem.quantity + 1,
      };

      const updateResponse = await fetch(
        `https://crudcrud.com/api/bb155f8b34114078adecbf63807b4f50/CartProduct/${existingCartItem._id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedItem),
          headers: { "Content-Type": "application/json" },
        }
      );

      const resp = await fetch(
        "https://crudcrud.com/api/bb155f8b34114078adecbf63807b4f50/CartProduct"
      );
      const newCart = await resp.json();

      setCart(newCart);
    } else {
      // Item doesn't exist, add it to the cart with quantity 1
      const newItem = {
        name: item.name,
        description: item.description,
        price: item.price,
        quantity: 1,
      };

      const addResponse = await fetch(
        "https://crudcrud.com/api/bb155f8b34114078adecbf63807b4f50/CartProduct",
        {
          method: "POST",
          body: JSON.stringify(newItem),
          headers: { "Content-Type": "application/json" },
        }
      );

      const addedData = await addResponse.json();

      // Update local state
      setCart((prevCart) => [...prevCart, addedData]);

      console.log(addedData);
    }
  };

  return (
    <div className="medicine-list">
      <ul className="main-list">
        {availableMed.map((med) => (
          <SingleProduct
            med={med}
            key={med._id}
            addToCartHandler={addToCartHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
