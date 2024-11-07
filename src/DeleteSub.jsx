import logo from "./assets/substract-minus-svgrepo-com.svg";
import PropTypes from "prop-types";

function DeleteSubButton({ onDelete }) {
  return (
    <button className="delete-sub" onClick={onDelete}>
      <img className="minus-svg" src={logo} alt="" /> Delete All Subscriptions
    </button>
  );
}
DeleteSubButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DeleteSubButton;

//  TODO: Maybe have a pop up asking "Are you sure you want to delete all your saved subscriptions?"
