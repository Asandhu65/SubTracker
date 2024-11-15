import sun from "./assets/sun-svgrepo-com.svg";

import moon from "./assets/moon-svgrepo-com.svg";

function ChangeMode() {
  return (
    <div className="dark-light-btn">
      <button className="change-mode-btn">
        <img className="sun-svg" src={sun} alt="" />
      </button>
      <button className="change-mode-btn">
        <img className="moon-svg" src={moon} alt="" />
      </button>
    </div>
  );
}

export default ChangeMode;
