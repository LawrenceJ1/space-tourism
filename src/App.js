import "./App.css";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
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
