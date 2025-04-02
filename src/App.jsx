import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";
import ColorForm from "./Components/Color/ColorForm";

function App() {
  const [colors, setColors] = useState(initialColors); //  color data inide state

  // add new color
  const addColor = (color) => {
    setColors([color, ...colors]); // adds the new color top of the list
  };

  // updating  existing color by matching  id
  const updateColor = (updatedColor) => {
    setColors((prevColors) =>
      prevColors.map(
        (color) => (color.id === updatedColor.id ? updatedColor : color) // updates color by matching id
      )
    );
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={addColor} /> {/* form to add a new color */}
      {colors.map((color) => (
        <Color key={color.id} color={color} onUpdateColor={updateColor} />
      ))}
    </>
  );
}

export default App;
