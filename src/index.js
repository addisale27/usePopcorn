import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./starRating";
//import "./index.css";
//import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating />
    <StarRating maxRating={10} />
  </React.StrictMode>
);
