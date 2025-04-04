import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

import ColorForm from "./Components/Color/ColorForm";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  }); // color data inside state

  // add new color
  const addColor = (color) => {
    console.log(color);
    setColors([color, ...colors]); // Adds the new color to the list
  };

  // update existing color by matching id
  const updateColor = (updatedColor) => {
    console.log("1111", updatedColor);
    setColors((prevColors) =>
      prevColors.map(
        (color) => (color.id === updatedColor.id ? updatedColor : color) // Updates color by matching id
      )
    );
  };

  // delete color by id
  const deleteColor = (id) => {
    // filtering only the color with the matching id
    setColors((prevColors) => {
      const updatedColors = prevColors.filter((color) => color.id !== id);
      console.log("Remaining colors after deletion:", updatedColors); // Debug log
      return updatedColors;
    });
  };
  console.log(colors);
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={addColor} /> {/* form adding a new color */}
      {colors.map((color) => (
        <Color
          key={color.id}
          color={color}
          onUpdateColor={updateColor} // pass updating function
          onDelete={deleteColor} // pass deleting function
        />
      ))}
    </>
  );
}

export default App;
