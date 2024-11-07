import { useEffect, useState } from "react";
import pencil from "./assets/pencil-svgrepo-com.svg";
import trash from "./assets/trash-svgrepo-com.svg";
import PropTypes from "prop-types";

function Subscription({ data, onEdit, onDelete }) {
  const [totalSpent, setTotalSpent] = useState(data.price);

  useEffect(() => {
    const storedStartDate = localStorage.getItem(
      `${data.name}-subscriptionStartDate`
    );
    const startDate = storedStartDate ? new Date(storedStartDate) : new Date();

    if (!storedStartDate) {
      localStorage.setItem(`${data.name}-subscriptionStartDate`, startDate);
    }

    const updateTotalSpent = () => {
      const now = new Date();
      const daysSinceStart = Math.floor(
        (now - startDate) / (1000 * 60 * 60 * 24)
      );
      const monthsElapsed = Math.floor(daysSinceStart / 30);

      const newTotalSpent = data.price * (monthsElapsed + 1);
      setTotalSpent(newTotalSpent);
      localStorage.setItem(`${data.name}-totalSpent`, newTotalSpent);
    };

    updateTotalSpent();
    const intervalId = setInterval(updateTotalSpent, 30 * 24 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [data.name, data.price]);

  const formatDate = dateString => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  const extractDomain = url => {
    try {
      const hostName = new URL(url).hostname;
      return hostName.replace(/^www\./, "");
    } catch {
      return null;
    }
  };

  return (
    <div className="subscription-card">
      <ol>
        <li>
          <img
            className="site-icon"
            src={`https://icon.horse/icon/${extractDomain(data.url)}/`}
            alt={`${data.name} icon`}
          ></img>
          {data.name}
        </li>
        <li>
          Price: ${data.price} <span>{data.renewal}</span>
        </li>
        <li>Payment Method: {data.payment}</li>
        {data.date && (
          <li>Subscription Renewal Date: {formatDate(data.date)}</li>
        )}
        <li>Spent since start: ${totalSpent.toFixed(2)}</li>
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
    url: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Subscription;

//TODO: ~~ Only show buttons when mouse is hovered over card. ~~
