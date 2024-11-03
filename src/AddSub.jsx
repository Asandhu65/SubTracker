import logo from "./assets/add-plus-svgrepo-com.svg";

function AddSubButton({ showForm, setShowForm }) {
  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button className="add-sub" onClick={handleClick}>
        <img className="plus-svg" src={logo} alt="" />
        Add Subscription
      </button>
    </div>
  );
}

export default AddSubButton;

// TODO: once form has been submitted hide the form component.
