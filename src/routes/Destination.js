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
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick your destination
          {data.destinations.map((value, index) => (
            <img
              src={value.images.png}
              key={Math.random() * 1000000}
              alt={value.name}
              data-visible={index == cur ? "true" : "false"}
              className={styles.planets}
            />
          ))}
        </h1>
        <div>
          <div className="underline-indicators flex tab-list">
            {data.destinations.map((value, index) => (
              <button
                key={Math.random() * 1000000}
                data-index={index}
                aria-selected={index == cur ? "true" : "false"}
                className={
                  "letter-spacing-2 uppercase text-accent ff-sans-cond " +
                  styles.destinations
                }
                onClick={clickHandler}
              >
                {value.name}
              </button>
            ))}
          </div>
          {data.destinations.map((value, index) => (
            <h2
              key={Math.random() * 1000000}
              data-visible={index == cur ? "true" : "false"}
              className={"fs-800 ff-serif uppercase " + styles.name}
            >
              {value.name}
            </h2>
          ))}
          {data.destinations.map((value, index) => (
            <article
              key={Math.random() * 1000000}
              data-visible={index == cur ? "true" : "false"}
              className={"text-accent " + styles.description}
            >
              {value.description}
            </article>
          ))}
          <div className="flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              {data.destinations.map((value, index) => (
                <p
                  key={Math.random() * 1000000}
                  data-visible={index == cur ? "true" : "false"}
                  className={"fs-500 ff-serif uppercase " + styles.distance}
                >
                  {value.distance}
                </p>
              ))}
            </div>
            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              {data.destinations.map((value, index) => (
                <p
                  key={Math.random() * 1000000}
                  data-visible={index == cur ? "true" : "false"}
                  className={"fs-500 ff-serif uppercase " + styles.travel}
                >
                  {value.travel}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Destination;
