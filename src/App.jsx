import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="app">
      <h1>Theme Creator</h1>
      <div className="color-card-container">
        {initialColors.map((color) => {
          return <Color key={color.id} color={color} />;
        })}
      </div>
    </div>
  );
}

export default App;
