import { useState } from "react";
import CartComponent from "./components/CartComponent";
import Header from "./components/Header";
import MedicineList from "./components/MedicineList";

function App() {
  const [showCart, setShowCart] = useState(false);

  const cartVisible = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <Header setShowCart={cartVisible} />
      <MedicineList />
      {showCart && <CartComponent />}
    </>
  );
}

export default App;
