import React, { useContext } from "react";
import "./MedicineList.css";
import CartContext, { Cart } from "./CartContext";

const MedicineList = () => {
  const { availableMed } = useContext(Cart);
  return (
    <div className="medicine-list">
      <ul>
        {availableMed.map((med) => (
          <li className="product-list">
            <div>
              {med.name}-{med.description}-{med.price}
            </div>
            <div>
              {med.quantity}
              <button>Add To Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
