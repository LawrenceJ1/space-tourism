import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./routes/App";
import Destination from "./routes/Destination";
import Crew from "./routes/Crew";
import Technology from "./routes/Technology";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="destination" element={<Destination />} />
      <Route path="crew" element={<Crew />} />
      <Route path="technology" element={<Technology />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
