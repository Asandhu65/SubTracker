import { useState } from "react";
import AddSubForm from "./AddSubForm.jsx";
import logo from "./assets/add-plus-svgrepo-com.svg";

function AddSubButton() {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      <button className="add-sub" onClick={handleClick}>
        {showComponent ? "" : ""}
        <img className="plus-svg" src={logo} alt="" />
        Add Subscription{" "}
      </button>
      {showComponent && <AddSubForm />}
    </div>
  );
}

export default AddSubButton;

// TODO: once form has been submitted hide the form component.
