import pencil from "./assets/pencil-svgrepo-com.svg";
import trash from "./assets/trash-svgrepo-com.svg";
import PropTypes from "prop-types";

function Subscription({ data, onEdit, onDelete }) {
  const formatDate = dateString => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  return (
    <div className="subscription-card">
      <ol>
        <li>
          <img
            className="site-icon"
            src={`https://icon.horse/icon/${data.name.toLowerCase()}.com/`}
            alt={`${data.name} icon`}
          ></img>
          {data.name}
        </li>
        <li>Price: ${data.price}</li>
        <li>Payment Method: {data.payment}</li>
        <li>Subscription Renewal Date: {formatDate(data.date)}</li>
        <li>Renewal Type: {data.renewal}</li>
      </ol>
      <button className="edit-btn" onClick={onEdit}>
        <img className="pencil-svg" src={pencil} alt="" />
      </button>
      <button className="delete-btn" onClickCapture={onDelete}>
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
  onDelete: PropTypes.func.isRequired,
};

export default Subscription;

//TODO: 3. Only show buttons when mouse is hovered over card.
