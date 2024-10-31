function Subscription() {
  return (
    <div className="subscription-card">
      <span>
        <img
          src="https://icon.horse/icon/reddit.com"
          alt="example.com icon"
        ></img>
        <p>Name:</p>
      </span>
      <p>Price:</p>
      <p>Payment Method:</p>
      <p>Total Spent:</p>
      <p>Subscription Renewal Date:</p>
      <button>Edit ✏️</button>
      <button>Delete 🗑️</button>
    </div>
  );
}

export default Subscription;

//TODO: This card displays all the information that the user submitted from the form. Edit button will allow the user to edit any data. Delete button will delete the card.
