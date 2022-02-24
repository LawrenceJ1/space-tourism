import { Fragment } from "react";
import NavBar from "../NavBar";
import styles from "./Destination.module.css";
import data from "../data.json";

let list = new Array(data.destinations.length);
for (let i = 0; i < list.length; i++) {
  if (i === 0) {
    list[0] = 1;
  } else {
    list[i] = 0;
  }
}

const Destination = () => {
  console.log(data.destinations);
  console.log(list);
  return (
    <Fragment>
      <NavBar />
      <main className="container-grid">
        <div className="numbered-title">
          <span>01</span> Pick your destination
          {data.destinations.map((value, index) => (
            <img
              src={value.images.png}
              key={index}
              data-visible={list[index]}
              className={styles.planets}
            />
          ))}
        </div>
        <div className="underline-indicators">
          {data.destinations.map((value, index) => (
            <span
              key={index}
              data-index={index}
              aria-selected={list[index] ? "true" : "false"}
              className={styles.destinations}
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
