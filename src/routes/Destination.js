import { Fragment, useState } from "react";
import NavBar from "../NavBar";
import styles from "./Destination.module.css";
import data from "../data.json";

const Destination = () => {
  const [cur, setCur] = useState(0);

  const clickHandler = (e) => {
    let selected = e.target.attributes["data-index"].value;
    if (cur != selected) {
      setCur(selected);
    }
  };

  return (
    <Fragment>
      <NavBar />
      <main className="grid-container">
        <div className="numbered-title">
          <span>01</span> Pick your destination
          {data.destinations.map((value, index) => (
            <img
              src={value.images.png}
              key={index}
              data-visible={index == cur ? "true" : "false"}
              className={styles.planets}
            />
          ))}
        </div>
        <div className="underline-indicators flex">
          {data.destinations.map((value, index) => (
            <span
              key={index}
              data-index={index}
              aria-selected={index == cur ? "true" : "false"}
              className={
                "letter-spacing-2 uppercase text-white " + styles.destinations
              }
              onClick={clickHandler}
            >
              {value.name}
            </span>
          ))}
        </div>
      </main>
    </Fragment>
  );
};

export default Destination;
