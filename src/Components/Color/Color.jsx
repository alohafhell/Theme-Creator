import "./Color.css";
import { useState } from "react";
import ColorForm from "./ColorForm";

export default function Color({ color, onUpdateColor }) {
  const [isEditing, setIsEditing] = useState(false); // toggle between edit mode and view mode

  // enable editing when the edit button is clicked
  const handleEdit = () => {
    setIsEditing(true); // Set isEditing to true to show the form
  };

  // cancel editing when the cancel button is clicked
  const handleCancel = () => {
    setIsEditing(false); // set isEditing to false so it hides the form
  };

  //  color update and send it to the parent component
  const handleUpdateColor = (updatedColor) => {
    onUpdateColor(updatedColor); // pass the updated color to the parent comp
    setIsEditing(false); // close the edit form after updating the color
  };


export default function Color({ color, onDelete }) {

  return (
    <div
      className="color-card"
      style={{
        background: color.hex, // setting background to the color's hex value
        color: color.contrastText, // setting text color to the colors contrastText
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>

      <p>Contrast: {color.contrastText}</p>
      <button onClick={handleEdit}>Edit</button>{" "}
      {/* Edit button triggers edit mode */}
      {/* Show the form only when isEditing is true */}
      {isEditing && (
        <div className="edit-form">
          <ColorForm
            onSubmitColor={handleUpdateColor} // pass handleUpdateColor to submit updated color
            initialRole={color.role} // pass the colors current role
            initialHex={color.hex} // pass the colors current hex
            initialContrastText={color.contrastText} // pass the colors current contrastText
            id={color.id} // pass the colors id for updates
          />
          <button onClick={handleCancel}>Cancel</button> {/* cancel edit */}
        </div>
      )}

      <p>contrast: {color.contrastText}</p>

      <button onClick={() => onDelete(color.id)}>Delete</button>

    </div>
  );
}
