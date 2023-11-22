import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import Counter from "./Components/Counter/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div style={{ backgroundColor: "black", color: "grey" }}>
    <Header />
    <Counter />
  </div>
);
