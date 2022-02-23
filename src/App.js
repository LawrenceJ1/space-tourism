import "./App.css";

function App() {
  return (
    <div className="container">
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
      So, you want to travel to Space Let’s face it; if you want to go to space,
      you might as well genuinely go to outer space and not hover kind of on the
      edge of it. Well sit back, and relax because we’ll give you a truly out of
      this world experience!
      <div className="flex">
        <a
          href="#"
          className="large-button bg-white fs-600 text-dark ff-serif uppercase"
        >
          Explore
        </a>
      </div>
    </div>
  );
}

export default App;
