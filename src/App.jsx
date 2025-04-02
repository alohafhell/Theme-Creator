import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";
import ColorForm from "./Components/Color/ColorForm";

function App() {
  const [colors, setColors] = useState(initialColors);

  const addColor = (color) => {
    setColors([color, ...colors]);
  };

  const deleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={addColor} />

      {colors.map((color) => (
        <Color key={color.id} color={color} onDelete={deleteColor} />
      ))}
    </>
  );
}

export default App;

console.log("Find Issue 1");
