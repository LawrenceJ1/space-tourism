import "./App.css";
import NavBar from "../NavBar";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        So, you want to travel to Space Let’s face it; if you want to go to
        space, you might as well genuinely go to outer space and not hover kind
        of on the edge of it. Well sit back, and relax because we’ll give you a
        truly out of this world experience!
        <div className="flex">
          <a
            href="#"
            className="large-button bg-white fs-600 text-dark ff-serif uppercase"
          >
            Explore
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
