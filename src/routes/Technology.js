import NavBar from "../NavBar";
import styles from "./Technology.module.css";
import data from "../data.json";
import { Fragment, useState } from "react";

const Technology = () => {
  const [cur, setCur] = useState(0);

  const clickHandler = (e) => {
    let selected = e.target.attributes["data-index"].value;
    if (cur != selected) {
      setCur(selected);
    }
  };

  return (
    <Fragment>
      <img
        src="/assets/technology/background-technology-desktop.jpg"
        alt="background"
        className={styles.bg1}
      />
      <img
        src="/assets/technology/background-technology-tablet.jpg"
        alt="background"
        className={styles.bg2}
      />
      <img
        src="/assets/technology/background-technology-mobile.jpg"
        alt="background"
        className={styles.bg3}
      />
      <NavBar />
      <main className={"grid-container flow " + styles.con}>
        <h1 className="numbered-title">
          <span aria-hidden="true">03</span> Space Launch 101
        </h1>
        <div className={"numbered-indicators flex " + styles.tabs}>
          {data.technology.map((value, index) => (
            <button
              key={Math.random() * 1000000}
              data-index={index}
              aria-selected={index == cur ? "true" : "false"}
              onClick={clickHandler}
            >
              {index}
            </button>
          ))}
        </div>
      </main>
    </Fragment>
  );
};

export default Technology;
