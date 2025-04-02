import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";
import ColorForm from "./Components/Color/ColorForm";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  }); // color data inside state

  // Add new color
  const addColor = (color) => {
    setColors([color, ...colors]); // adds the new color to the list
  };

  // Update existing color by matching id
  const updateColor = (updatedColor) => {
    setColors((prevColors) =>
      prevColors.map(
        (color) => (color.id === updatedColor.id ? updatedColor : color) // updates color by matching id
      )
    );
  };

  // Delete color by id
  const deleteColor = (id) => {
    setColors((prevColors) => prevColors.filter((color) => color.id !== id));
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={addColor} /> {/* form to add a new color */}
      {colors.map((color) => (
        <Color
          key={color.id} // Ensure the key is on the Color component
          color={color}
          onUpdateColor={updateColor} // Pass update function
          onDelete={deleteColor} // Pass delete function
        />
      ))}
    </>
  );
}

export default App;
