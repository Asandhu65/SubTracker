import PropTypes from "prop-types";
import close from "./assets/close-svgrepo-com.svg";
import { useState } from "react";

function EditSubForm({ data, onUpdate, setIsEditing, onCurrencyChange }) {
  const [formData, setFormData] = useState(data);

  const handleChange = e => {
    const { name, value } = e.target;

    const formattedValue =
      name === "name"
        ? value
            .split(" ")
            .map(
              word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ")
        : value;

    setFormData({ ...formData, [name]: formattedValue });

    if (name === "currency") {
      onCurrencyChange(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onUpdate({ ...formData, price: parseFloat(formData.price) });
    setIsEditing(false);
  };

  return (
    <div className="form-container">
      <div className="form">
        <button onClick={() => setIsEditing(false)} className="close-x">
          <img src={close} alt="x" className="x-btn" />
        </button>
        <div className="title">
          <h2>Edit Subscription</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="sub-name">
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="url-name">
            <label>URL</label>
            <input
              name="url"
              type="url"
              pattern="https://.*"
              size="30"
              value={formData.url}
              onChange={handleChange}
            />
          </div>
          <div className="price-name">
            <label>Price</label>
            <input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="currency-name">
            <label>Currency</label>
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              required
            >
              <option value="$">USD - US Dollar</option>
              <option value="€">EUR - Euro</option>
              <option value="£">GBP - British Pound</option>
              <option value="¥">JPY - Japanese Yen</option>
            </select>
          </div>
          <div className="payment-name">
            <label>Payment Method</label>
            <select
              name="payment"
              required
              value={formData.payment}
              onChange={handleChange}
            >
              <option value="Visa">Visa</option>
              <option value="MasterCard">MasterCard</option>
              <option value="Paypal">Paypal</option>
              <option value="Apple Pay">Apple Pay</option>
              <option value="Amex">Amex</option>
            </select>
          </div>
          <div className="renewal-name">
            <label>Renewal Type</label>
            <select
              name="renewal"
              required
              value={formData.renewal}
              onChange={handleChange}
            >
              <option value="Monthly">Monthly</option>
              <option value="Annually">Annually</option>
            </select>
          </div>
          <div className="renewal-date">
            <label>Renewal Date</label>
            <input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="submit-btn">
            <button type="submit">Update Subscription</button>
          </div>
        </form>
      </div>
    </div>
  );
}

EditSubForm.propTypes = {
  data: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  setIsEditing: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
};

export default EditSubForm;
