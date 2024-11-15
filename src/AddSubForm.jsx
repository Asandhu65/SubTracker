import { useState } from "react";
import close from "./assets/close-svgrepo-com.svg";
import PropTypes from "prop-types";

function AddSubForm({ showForm, setShowForm, onSubmit, onCurrencyChange }) {
  const [values, setValues] = useState({
    name: "",
    url: "",
    price: "",
    payment: "",
    renewal: "",
    date: "",
    currency: "",
  });

  const [errors, setErrors] = useState({});

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

    setValues({ ...values, [name]: formattedValue });

    if (name === "currency") {
      onCurrencyChange(value);
    }
  };

  const handleFocus = e => {
    const { name } = e.target;
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let tempErrors = {};
    if (!values.name) tempErrors.name = "Name is required";
    if (!values.url) tempErrors.url = "URL is required";
    if (!values.price) tempErrors.price = "Price is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("formData", JSON.stringify(values));
      onSubmit(values);
      setShowForm(false);
    }
  };

  const handleClick = () => {
    setShowForm(false);
  };

  return (
    <div className="form-container">
      <div className="form">
        <button onClick={handleClick} className="close-x">
          <img src={close} alt="x" className="x-btn" />
        </button>
        <div className="title">
          <h2>Add a new subscription</h2>
          <p>Enter details for your new subscription.</p>
        </div>
        {showForm ? (
          <form onSubmit={handleSubmit}>
            <div className="sub-name">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={errors.name ? "Please enter a name." : values.name}
                onChange={handleChange}
                onFocus={handleFocus}
                placeholder="Subscription name"
                style={{ color: errors.name ? "red" : "initial" }}
              />
            </div>
            <div className="url-name">
              <label>URL</label>
              <input
                name="url"
                type="url"
                pattern="https://.*"
                size="30"
                placeholder="Ex. https://www.netflix.com"
                value={errors.url ? "Please enter the URL." : values.url}
                onChange={handleChange}
                onFocus={handleFocus}
                style={{ color: errors.url ? "red" : "initial" }}
              />
            </div>
            <div className="price-name">
              <label>Price</label>
              <input
                name="price"
                type="number"
                placeholder="Price"
                value={errors.price ? "Please enter a price." : values.price}
                onChange={handleChange}
                onFocus={handleFocus}
                style={{ color: errors.price ? "red" : "initial" }}
              />
            </div>
            <div className="currency-name">
              <label>Currency</label>
              <select
                name="currency"
                value={values.currency}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>
                  Choose a currency...
                </option>
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
                value={values.payment}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Choose payment option...
                </option>
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
                value={values.renewal}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Choose renewal option...
                </option>
                <option value="Monthly">Monthly</option>
                <option value="Annually">Annually</option>
              </select>
            </div>
            <div className="renewal-date">
              <label>Renewal Date</label>
              <input
                name="date"
                type="date"
                value={values.date}
                onChange={handleChange}
              />
            </div>
            <div className="submit-btn">
              <button type="submit">Add Subscription</button>
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

AddSubForm.propTypes = {
  setShowForm: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
};

export default AddSubForm;
