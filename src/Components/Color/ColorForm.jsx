import ColorInput from "./ColorInput";
import "./ColorForm.css";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function ColorForm({ onSubmitColor }) {
  const [role, setRole] = useState("");
  const [hex, setHex] = useState("#000000");
  const [contrastText, setConstrastText] = useState("#FFFFFF");

  const handleSubmit = (event) => {
    event.preventDefault();

    //new color creation from values
    const newColor = {
      id: nanoid(),
      role,
      hex,
      contrastText,
    };

    //new color for parent comp
    onSubmitColor(newColor);

    //reset form after submitting
    setRole("");
    setHex("#000000");
    setConstrastText("#FFFFFF");
  };

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label>
        Role
        <input
          type="text"
          id="role"
          onChange={(e) => setRole(e.target.value)}
          placeholder="e.g., primary main"
        />
      </label>

      <label>
        Hex Value
        <br />
        <ColorInput
          id="hex"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
        />
      </label>

      <label htmlFor="contrastText">
        Contrast Text
        <ColorInput
          id="contrastText"
          value={contrastText}
          onChange={(e) => setConstrastText(e.target.value)}
        />
      </label>
      <button>ADD COLOR</button>
    </form>
  );
}
