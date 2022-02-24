import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const ClickHandler = (e) => {
  const visibility = document.querySelector(".primary-navigation");
  if (e.target.attributes["aria-expanded"].value === "false") {
    e.target.attributes["aria-expanded"].value = "true";
    visibility.setAttribute("data-visible", true);
  } else {
    e.target.attributes["aria-expanded"].value = "false";
    visibility.setAttribute("data-visible", false);
  }
};

const NavBar = () => {
  return (
    <header className="flex primary-header">
      <div>
        <img
          src="/assets/shared/logo.svg"
          alt="space tourism logo"
          className="logo"
        />
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={ClickHandler}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          data-visible="false"
          className="flex primary-navigation underline-indicators"
        >
          <NavLink to="/" className="uppercase text-white letter-spacing-2">
            <span>00</span>Home
          </NavLink>
          <NavLink
            to="/destination"
            className="uppercase text-white letter-spacing-2"
          >
            <span>01</span>Destination
          </NavLink>
          <NavLink to="/crew" className="uppercase text-white letter-spacing-2">
            <span>02</span>Crew
          </NavLink>
          <NavLink
            to="/Technology"
            className="uppercase text-white letter-spacing-2"
          >
            <span>03</span>Technology
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
