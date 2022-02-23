import "./App.css";

function App() {
  return (
    <div className="container">
      <nav className="flex">
        <h2 className="numbered-title">
          <span>00</span> Home
        </h2>
        <h2 className="numbered-title">
          <span>01</span> Destination
        </h2>
        <h2 className="numbered-title">
          <span>02</span>Crew
        </h2>
        <h2 className="numbered-title">
          <span>03</span>
          Technology
        </h2>
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
