import NavBar from "../NavBar";
import { Fragment, useState } from "react";
import styles from "./Crew.module.css";
import data from "../data.json";

const Crew = () => {
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
        src="/assets/crew/background-crew-desktop.jpg"
        alt="background"
        className={styles.bg1}
      />
      <img
        src="/assets/crew/background-crew-tablet.jpg"
        alt="background"
        className={styles.bg2}
      />
      <img
        src="/assets/crew/background-crew-mobile.jpg"
        alt="background"
        className={styles.bg3}
      />
      <NavBar />

      <main className={"grid-container flow " + styles.con}>
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span> Meet your crew
        </h1>

        <div className={"dot-indicators flex " + styles.tabs}>
          {data.crew.map((value, index) => (
            <button
              key={Math.random() * 1000000}
              data-index={index}
              aria-selected={index == cur ? "true" : "false"}
              onClick={clickHandler}
            >
              <span className="sr-only">{value.role}</span>
            </button>
          ))}
        </div>

        <article className={styles.content}>
          {/* Role */}
          {data.crew.map((value, index) => (
            <h2
              key={Math.random() * 1000000}
              data-visible={index == cur ? "true" : "false"}
              className={"fs-600 ff-serif uppercase " + styles.role}
            >
              {value.role}
            </h2>
          ))}
          {/* Name */}
          {data.crew.map((value, index) => (
            <p
              key={Math.random() * 1000000}
              data-visible={index == cur ? "true" : "false"}
              className={"fs-700 uppercase ff-serif " + styles.name}
            >
              {value.name}
            </p>
          ))}
          {/* Bio */}
          {data.crew.map((value, index) => (
            <p
              key={Math.random() * 1000000}
              data-visible={index == cur ? "true" : "false"}
              className={styles.bio}
            >
              {value.bio}
            </p>
          ))}
        </article>

        {/* Images */}
        {data.crew.map((value, index) => (
          <img
            key={Math.random() * 1000000}
            src={value.images.png}
            alt={value.name}
            data-visible={index == cur ? "true" : "false"}
            className={styles.images}
          ></img>
        ))}
      </main>
    </Fragment>
  );
};

export default Crew;
