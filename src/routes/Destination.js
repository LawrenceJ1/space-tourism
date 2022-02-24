import { Fragment } from "react";
import NavBar from "../NavBar";
import "./Destination.module.css";
import data from "../data.json";

const Destination = () => {
  console.log(data.destinations);
  return (
    <Fragment>
      <NavBar />
    </Fragment>
  );
};

export default Destination;
