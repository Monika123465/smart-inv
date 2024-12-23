import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext"; // Assuming this is used for closing the window

import "./BuyActionWindow.css"; // You can reuse this CSS for styling

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1); // Default quantity set to 1
  const [stockPrice, setStockPrice] = useState(0.0); // Default price is 0.0

  const handleSellClick = () => {
    // Send the sell order to the backend via POST request
    axios.post("http://localhost:3002/newOrder", {
      name: uid, // Stock identifier
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL", // Selling mode
    })
    .then(() => {
      alert("Sell order placed successfully!");
      GeneralContext.closeSellWindow(); // Close the sell window (using context or any other method)
    })
    .catch((error) => {
      console.error("Error placing sell order:", error);
      alert("There was an error placing the sell order.");
    });
  };

  const handleCancelClick = () => {
    GeneralContext.closeSellWindow(); // Close the window without placing an order
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span> {/* Adjust based on your logic */}
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-red" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
