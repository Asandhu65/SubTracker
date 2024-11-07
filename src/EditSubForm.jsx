import PropTypes from "prop-types";
import close from "./assets/close-svgrepo-com.svg";
import { useState } from "react";

function EditSubForm({ data, onUpdate, setIsEditing }) {
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
  };

  const handleSubmit = e => {
    e.preventDefault();
    onUpdate({ ...formData, price: parseFloat(formData.price) });
    setIsEditing(false);
  };

  return (
    <div className="form">
      <button onClick={() => setIsEditing(false)} className="close-x">
        <img src={close} alt="x" className="x-btn" />
      </button>
      <h1>Edit Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
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
        <button className="submit-btn" type="submit">
          Update Subscription
        </button>
      </form>
    </div>
  );
}

EditSubForm.propTypes = {
  data: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  setIsEditing: PropTypes.func.isRequired,
};

export default EditSubForm;
