import sun from "./assets/sun-svgrepo-com.svg";

import moon from "./assets/moon-svgrepo-com.svg";

function ChangeMode() {
  return (
    <div>
      <button className="change-mode-btn">
        <img className="sun-svg" src={sun} alt="" />
        <img className="moon-svg" src={moon} alt="" />
      </button>
    </div>
  );
}

export default ChangeMode;

// TODO: allow the user to change the theme to dark mode or light mode. ALSO automatically match the users browser mode type.
