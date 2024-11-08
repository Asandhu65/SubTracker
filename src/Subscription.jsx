import { useEffect, useState } from "react";
import pencil from "./assets/pencil-svgrepo-com.svg";
import trash from "./assets/trash-svgrepo-com.svg";
import PropTypes from "prop-types";

function Subscription({ data, onEdit, onDelete, currency }) {
  const [totalSpent, setTotalSpent] = useState(data.price);

  const formatPriceYen = price => {
    if (currency === "¥") {
      return price.toFixed(0);
    }
    return price.toFixed(2);
  };

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

      let periodsElapsed;
      if (data.renewal === "Monthly") {
        periodsElapsed = Math.floor(daysSinceStart / 30);
      } else if (data.renewal === "Annually") {
        periodsElapsed = Math.floor(daysSinceStart / 365);
      }

      const newTotalSpent = data.price * (periodsElapsed + 1);
      setTotalSpent(newTotalSpent);
      localStorage.setItem(`${data.name}-totalSpent`, newTotalSpent);
    };

    updateTotalSpent();
    const intervalDuration =
      data.renewal === "Monthly"
        ? 30 * 24 * 60 * 60 * 1000
        : 365 * 24 * 60 * 60 * 1000;
    const intervalId = setInterval(updateTotalSpent, intervalDuration);

    return () => clearInterval(intervalId);
  }, [data.name, data.price, data.renewal]);

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
          Price: {data.currency}
          {formatPriceYen(data.price)}
          <span> {data.renewal}</span>
        </li>
        <li>Payment Method: {data.payment}</li>
        {data.date && (
          <li>Subscription Renewal Date: {formatDate(data.date)}</li>
        )}
        <li>
          Spent since start: {data.currency}
          {formatPriceYen(totalSpent)}
        </li>
        {data.url && (
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cancel-link"
          >
            Visit Site
          </a>
        )}
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
    currency: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Subscription;

// ~~ Only show buttons when mouse is hovered over card.
// Implement dark and light mode and automatically match the users browser settings,
// Finish styling and make sure site is mobile responsive.
// Maybe create a way for user to group types of cards together: entertainment, health, food etc.~~
// ~~ Maybe figure out a way to show when the next renewal date is for the sub if the user enters the date they subscribed? for ex. "Enter your subscription renewal date so that "
