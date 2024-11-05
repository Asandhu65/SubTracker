import { useEffect, useState } from "react";
import pencil from "./assets/pencil-svgrepo-com.svg";
import trash from "./assets/trash-svgrepo-com.svg";

function Subscription({ trigger }) {
  const [savedData, setSavedData] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      setSavedData(JSON.parse(data));
    }
  }, [trigger]);

  return (
    <div className="subscription-card">
      <ol>
        <li>
          <img
            className="site-icon"
            src="https://icon.horse/icon/netflix.com"
            alt="example.com icon"
          ></img>
          Name: {savedData.name}
        </li>
        <li>Price: ${savedData.price}</li>
        <li>Payment Method: {savedData.payment}</li>
        <li>Subscription Renewal Date: {savedData.date}</li>
        <li>Renewal Type: {savedData.renewal}</li>
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

//TODO: 1. Need to create new cards when form is submitted again. 2. Edit button(pencil) will allow the user to edit any data. Delete button(trash) will delete the card. 3. Only show buttons when mouse is hovered over card. 4. pull url from submitted data and use icon API to display icon from url.
