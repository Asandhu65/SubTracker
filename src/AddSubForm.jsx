import { useState } from "react";
import close from "./assets/close-svgrepo-com.svg";
import AddSubButton from "./AddSub.jsx";

function AddSubForm({ showForm, setShowForm }) {
  const handleClick = () => {
    setShowForm(false);
  };
  return (
    <div className="form">
      <button onClick={handleClick} className="close-x">
        <img src={close} alt="x" className="x-btn" />
      </button>
      <div className="title">
        <h2>Add a new subscription</h2>
        <p>Enter details for your new subscription.</p>
      </div>
      <form action="">
        <div className="sub-name">
          <label htmlFor="subscription">Name</label>
          <input name="subscription" type="text" placeholder="Subscription" />
        </div>
        <div className="url-name">
          <label htmlFor="url">URL</label>
          <input name="url" type="text" placeholder="Url" />
        </div>
        <div className="price-name">
          <label htmlFor="price">Price</label>
          <input name="price" type="text" placeholder="Price" />
        </div>
        <div className="payment-name">
          <label htmlFor="payment">Payment Method</label>
          <select name="payment" id="payment">
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="paypal">Paypal</option>
            <option value="amex">Amex</option>
          </select>
        </div>
        <div className="renewal-name">
          <label htmlFor="renewal-type">Renewal Type</label>
          <select name="renewal-type" id="renewal-type">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div className="renewal-date">
          <label htmlFor="renewal-type">Renewal Date</label>
          <input type="date" />
        </div>
        <input className="submit-btn" type="submit" value="Add Subscription" />
      </form>
    </div>
  );
}

export default AddSubForm;

// TODO: Add form validation for all inputs. Clicking submit will save data locally to users browser and display in a card with all the information that was submitted. Need to add x button to close window.
