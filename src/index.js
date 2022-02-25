import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./routes/App";
import Destination from "./routes/Destination";
import Crew from "./routes/Crew";
import Technology from "./routes/Technology";

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="destination" element={<Destination />} />
      <Route path="crew" element={<Crew />} />
      <Route path="technology" element={<Technology />} />
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);
