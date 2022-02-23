import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex primary-navigation underline-indicators">
        <li className="active">
          <a className="uppercase text-white letter-spacing-2">
            <span>00</span> Home
          </a>
        </li>
        <li>
          <a className="uppercase text-white letter-spacing-2">
            <span>01</span> Destination
          </a>
        </li>
        <li>
          <a className="uppercase text-white letter-spacing-2">
            <span>02</span>Crew
          </a>
        </li>
        <a className="uppercase text-white letter-spacing-2">
          <span>03</span>
          Technology
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;
