import ColorInput from "./ColorInput";
import "./ColorForm.css";
import { useEffect, useState } from "react"; // import useEffect for resetting state
import { nanoid } from "nanoid";

export default function ColorForm({
  onSubmitColor,
  initialRole = "",
  initialHex = "#000000",
  initialContrastText = "#FFFFFF",
  id, // color ID passed for editing
}) {
  const [role, setRole] = useState(initialRole); // state for role
  const [hex, setHex] = useState(initialHex); // state for hex color
  const [contrastText, setConstrastText] = useState(initialContrastText); // state for contrast text

  // to reset form values when props change (for editing)
  useEffect(() => {
    setRole(initialRole); // reset role state
    setHex(initialHex); // reset hex value
    setConstrastText(initialContrastText); // reset contrast text
  }, [initialRole, initialHex, initialContrastText]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // creating the updated color
    const updatedColor = {
      id: nanoid(), // passing the existing id to update the color
      role,
      hex,
      contrastText,
    };

    onSubmitColor(updatedColor); // submiting the updated color to the parent comp
  };

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label>
        Role
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)} // update role state
          placeholder="e.g., primary main"
        />
      </label>
      <label>
        Hex Value
        <br />
        <ColorInput
          value={hex}
          onChange={(e) => setHex(e.target.value)} // update hex state
        />
      </label>
      <label htmlFor="contrastText">
        Contrast Text
        <ColorInput
          value={contrastText}
          onChange={(e) => setConstrastText(e.target.value)} // update contrastText state
        />
      </label>
      <button>{initialRole ? "Update Color" : "Add Color"}</button>{" "}
      {/* button text will depend on if its editing or adding */}
    </form>
  );
}
