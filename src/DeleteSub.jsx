import logo from "./assets/substract-minus-svgrepo-com.svg";
import PropTypes from "prop-types";

function DeleteSubButton({ onDelete }) {
  return (
    <div className="delete-sub-btn-container">
      <button className="delete-sub" onClick={onDelete}>
        <img className="minus-svg" src={logo} alt="" /> Delete All Subscriptions
      </button>
    </div>
  );
}
DeleteSubButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DeleteSubButton;
