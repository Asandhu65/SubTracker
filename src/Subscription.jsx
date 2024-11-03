import pencil from "./assets/pencil-svgrepo-com.svg";
import trash from "./assets/trash-svgrepo-com.svg";

function Subscription() {
  return (
    <div className="subscription-card">
      <ol>
        <li>
          <img
            className="site-icon"
            src="https://icon.horse/icon/netflix.com"
            alt="example.com icon"
          ></img>
          Name:
        </li>
        <li>Price:</li>
        <li>Payment Method:</li>
        <li>Total Spent:</li>
        <li>Subscription Renewal Date:</li>
      </ol>
      <button className="edit-btn">
        <img className="pencil-svg" src={pencil} alt="" />
      </button>
      <button className="delete-btn">
        <img className="trash-svg" src={trash} alt="" />
      </button>
    </div>
  );
}

export default Subscription;

//TODO: This card displays all the information that the user submitted from the form. Edit button(pencil) will allow the user to edit any data. Delete button(trash) will delete the card. only show when mouse is hovered over card.
