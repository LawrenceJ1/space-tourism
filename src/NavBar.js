import "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex primary-navigation underline-indicators">
        <NavLink to="/" className="uppercase text-white letter-spacing-2">
          <span>00</span> Home
        </NavLink>
        <NavLink
          to="/destination"
          className="uppercase text-white letter-spacing-2"
        >
          <span>01</span> Destination
        </NavLink>
        <NavLink to="/crew" className="uppercase text-white letter-spacing-2">
          <span>02</span>Crew
        </NavLink>
        <NavLink
          to="/Technology"
          className="uppercase text-white letter-spacing-2"
        >
          <span>03</span>
          Technology
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
