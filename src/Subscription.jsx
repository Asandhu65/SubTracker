import AddSubForm from "./AddSubForm.jsx";

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
      <div>
        <AddSubForm />
      </div>
    </div>
  );
}

export default Subscription;
