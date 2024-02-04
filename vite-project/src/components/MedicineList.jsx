import React, { useContext } from "react";
import "./MedicineList.css";
import { Cart } from "./CartContext";
import SingleProduct from "./SingleProduct";

const MedicineList = () => {
  const { availableMed, cart, setCart } = useContext(Cart);

  const addToCartHandler = (item) => {
    setCart([...cart, item]);
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
