import React, { useContext } from "react";
import "./MedicineList.css";
import { Cart } from "./CartContext";
import SingleProduct from "./SingleProduct";

const MedicineList = () => {
  const { availableMed, cart, setCart } = useContext(Cart);

  const addToCartHandler = (item) => {
    const existingCartItemIndex = cart.findIndex((med) => med.id === item.id);

    if (existingCartItemIndex !== -1) {
      const updatedCart = cart.map((med, index) =>
        index === existingCartItemIndex
          ? { ...med, quantity: med.quantity + 1 }
          : med
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="medicine-list">
      <ul className="main-list">
        {availableMed.map((med) => (
          <SingleProduct
            med={med}
            key={med.id}
            addToCartHandler={addToCartHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
