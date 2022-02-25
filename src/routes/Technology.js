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

        <div className={"number-indicators flex " + styles.tabs}>
          {data.technology.map((value, index) => (
            <button
              key={Math.random() * 1000000}
              data-index={index}
              aria-selected={index == cur ? "true" : "false"}
              onClick={clickHandler}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <article className={"flow " + styles.content}>
          <header className={"flow " + styles.header}>
            <h2 className={"fs-400 ff-serif uppercase " + styles.role}>
              The Terminology...
            </h2>
            {data.technology.map((value, index) => (
              <p
                key={Math.random() * 1000000}
                data-visible={index == cur ? "true" : "false"}
                className={"fs-700 uppercase ff-serif " + styles.name}
              >
                {value.name}
              </p>
            ))}
          </header>

          {data.technology.map((value, index) => (
            <p
              key={Math.random() * 1000000}
              data-visible={index == cur ? "true" : "false"}
              className={styles.bio}
            >
              {value.description}
            </p>
          ))}
        </article>

        {data.technology.map((value, index) => (
          <Fragment>
            <img
              key={Math.random() * 1000000}
              src={value.images.landscape}
              alt={value.name}
              data-visible={index == cur ? "true" : "false"}
              className={styles.images_landscape}
            ></img>
            <img
              key={Math.random() * 1000000}
              src={value.images.portrait}
              alt={value.name}
              data-visible={index == cur ? "true" : "false"}
              className={styles.images_portrait}
            ></img>
          </Fragment>
        ))}
      </main>
    </Fragment>
  );
};

export default Technology;
