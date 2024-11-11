import logo from "./assets/add-plus-svgrepo-com.svg";
import PropTypes from "prop-types";

function AddSubButton({ showForm, setShowForm }) {
  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="add-sub-btn-container">
      <button className="add-sub" onClick={handleClick}>
        <img className="plus-svg" src={logo} alt="" />
        Add Subscription
      </button>
    </div>
  );
}

AddSubButton.propTypes = {
  showForm: PropTypes.bool.isRequired,
  setShowForm: PropTypes.func.isRequired,
};

export default AddSubButton;
