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
      <img
        src="/assets/destination/background-destination-desktop.jpg"
        alt="background"
        className={styles.bg1}
      />
      <img
        src="/assets/destination/background-destination-tablet.jpg"
        alt="background"
        className={styles.bg2}
      />
      <img
        src="/assets/destination/background-destination-mobile.jpg"
        alt="background"
        className={styles.bg3}
      />
      <NavBar />
      <main className="grid-container">
        <div className="numbered-title">
          <span>01</span> Pick your destination
          {data.destinations.map((value, index) => (
            <img
              src={value.images.png}
              key={Math.random() * 1000000}
              data-visible={index == cur ? "true" : "false"}
              className={styles.planets}
            />
          ))}
        </div>
        <div>
          <div className="underline-indicators flex">
            {data.destinations.map((value, index) => (
              <span
                key={Math.random() * 1000000}
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
          {data.destinations.map((value, index) => (
            <h1
              key={Math.random() * 1000000}
              data-visible={index == cur ? "true" : "false"}
              className={"fs-900 ff-serif uppercase " + styles.name}
            >
              {value.name}
            </h1>
          ))}
          {data.destinations.map((value, index) => (
            <p
              key={Math.random() * 1000000}
              data-visible={index == cur ? "true" : "false"}
              className={"text-accent " + styles.description}
            >
              {value.description}
            </p>
          ))}
        </div>
      </main>
    </Fragment>
  );
};

export default Destination;
