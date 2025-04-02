import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

import ColorForm from "./Components/Color/ColorForm";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  }); // Color data inside state

  // Add new color
  const addColor = (color) => {
    setColors([color, ...colors]); // Adds the new color to the list
  };

  // Update existing color by matching id
  const updateColor = (updatedColor) => {
    setColors((prevColors) =>
      prevColors.map(
        (color) => (color.id === updatedColor.id ? updatedColor : color) // Updates color by matching id
      )
    );
  };

  // Delete color by id
  const deleteColor = (id) => {
    // Filtering only the color with the matching id
    setColors((prevColors) => {
      const updatedColors = prevColors.filter((color) => color.id !== id);
      console.log("Remaining colors after deletion:", updatedColors); // Debug log
      return updatedColors;
    });
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={addColor} /> {/* Form to add a new color */}
      {colors.map((color) => (
        <Color
          key={color.id}
          color={color}
          onUpdateColor={updateColor} // Pass update function
          onDelete={deleteColor} // Pass delete function
        />
      ))}
    </>
  );
}

export default App;
