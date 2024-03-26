import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./starRating";
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>this movie was rated {movieRating}stars</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* {<App />} */}
    <StarRating maxRating={10} />
    <StarRating
      maxRating={5}
      size={24}
      className="test"
      message={[`Terrible`, `Bad`, `Okay`, `Good`, `Amazing`]}
      retingDefault={3}
      color="red"
    />
    <Test />
  </React.StrictMode>
);
