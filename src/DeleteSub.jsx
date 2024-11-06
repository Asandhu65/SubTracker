import logo from "./assets/substract-minus-svgrepo-com.svg";

function DeleteSubButton() {
  return (
    <button className="delete-sub">
      <img className="minus-svg" src={logo} alt="" /> Delete All Subscriptions
    </button>
  );
}

export default DeleteSubButton;

//  TODO: only show button if there are 2 or more cards. click delete button to delete all subscriptions. Maybe have a pop up asking "Are you sure you want to delete all your saved subscriptions?"
