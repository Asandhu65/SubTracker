import pencil from "./assets/pencil-svgrepo-com.svg";
import trash from "./assets/trash-svgrepo-com.svg";
import PropTypes from "prop-types";

function Subscription({ data, onEdit }) {
  return (
    <div className="subscription-card">
      <ol>
        <li>
          <img
            className="site-icon"
            src="https://icon.horse/icon/hulu.com/"
            alt="example.com icon"
          ></img>
          Name: {data.name}
        </li>
        <li>Price: ${data.price}</li>
        <li>Payment Method: {data.payment}</li>
        <li>Subscription Renewal Date: {data.date}</li>
        <li>Renewal Type: {data.renewal}</li>
      </ol>
      <button className="edit-btn" onClick={onEdit}>
        <img className="pencil-svg" src={pencil} alt="" />
      </button>
      <button className="delete-btn">
        <img className="trash-svg" src={trash} alt="" />
      </button>
    </div>
  );
}

Subscription.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    payment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    renewal: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Subscription;

//TODO: Delete button(trash) will delete the card. 3. Only show buttons when mouse is hovered over card. 4. pull url from submitted data and use icon API to display icon from url.
