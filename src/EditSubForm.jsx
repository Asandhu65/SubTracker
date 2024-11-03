function EditSubForm() {
  return (
    <div className="form">
      <h1>test</h1>
      <form action="">
        <label htmlFor="subscription">Name</label>
        <input name="subscription" type="text" placeholder="Subscription" />
        <br />
        <input type="text" placeholder="Price" />
        <br />
        <label htmlFor="payment">Payment Method</label>
        <select name="payment" id="payment">
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
          <option value="paypal">Paypal</option>
          <option value="amex">Amex</option>
        </select>
        <br />
        <label htmlFor="renewal-type">Renewal Type</label>
        <select name="renewal-type" id="renewal-type">
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
        <br />
        <input type="date" />
        <input className="submit-btn" type="submit" />
      </form>
    </div>
  );
}

export default EditSubForm;

// TODO: Add form validation for all inputs. Clicking submit will save data locally to users browser and display in a card with all the information that was submitted.