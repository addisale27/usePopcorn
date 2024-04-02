import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./starRating";
//import "./index.css";
//import App from "./App";
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* { <StarRating
      className="test"
      color="blue"
      message={[`Terriable`, `bad`, `okay`, `good`, `amazing`]}
    />
    <StarRating defaultRating={3} color="gray" />} */}
    <Test />
  </React.StrictMode>
);
