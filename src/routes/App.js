import styles from "./App.module.css";
import NavBar from "../NavBar";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <img
        src="/assets/home/background-home-desktop.jpg"
        alt="background"
        className={styles.bg1}
      />
      <img
        src="/assets/home/background-home-tablet.jpg"
        alt="background"
        className={styles.bg2}
      />
      <img
        src="/assets/home/background-home-mobile.jpg"
        alt="background"
        className={styles.bg3}
      />
      <NavBar />
      <main className={"grid-container " + styles.con}>
        <div>
          <h1 className="text-accent fs-500 ff-sans-cord uppercase letter-spacing-1">
            So, you want to travel to
            <span className="d-block fs-900 ff-serif text-white">Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <a
            href="#"
            className="large-button bg-white text-dark ff-serif uppercase"
          >
            Explore
          </a>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
