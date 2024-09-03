import React, { useEffect, useState } from "react";
import ImgSamosa from "./samosa.png";
import "./App.css";
import ImgPlus from "./plus.png";
import ImgMinus from "./minus.png";


function App() {
  const SAMOSA_PRICE = 12;
  const [quantity, setQuantity] = useState(1);
  const [totalBill, setTotalBill] = useState();

  console.log(totalBill);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else if (type === "minus" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const total = SAMOSA_PRICE * quantity;
    if (quantity < 5) {
      setTotalBill(total);
    } else if (quantity >= 5 && quantity <= 10) {
      setTotalBill(total - 20);
    } else {
      setTotalBill(total - 50);
    }
  }, [quantity]);

  return (
    <>
      <div>
        <div className="card">
          <img src={ImgSamosa} alt="samosa" className="card-img" />
          <h1 className="card-title">Samosa</h1>

          <p className="card-text">
            Best Indian snack,filled with a mixture of, mashed boiled
            Potato,green peas, spices,and green chilli. It is generally served
            hot with chutney.
          </p>

          <div className="card-price-container">
            <span className="card-price">Price : ₹ {SAMOSA_PRICE}</span>
            <span className="card-total">Total : ₹ {totalBill} </span>
          </div>

          <p className="card-error">
            {quantity > 10 ? "For bulk orders delivery time may vary" : null}
          </p>

          <div className="card-quantity-container">
            <img
              src={ImgMinus}
              className="card-quantity-icon"
              onClick={() => {
                updateQuantity("minus");
              }}
            />

            <span className="card-quantity">{quantity}</span>

            <img
              src={ImgPlus}
              className="card-quantity-icon"
              onClick={() => {
                updateQuantity("plus");
              }}
            />
          </div>

          <button className="card-btn">Buy Now</button>
        </div>
      </div>

     
    </>
  );
}

export default App;
