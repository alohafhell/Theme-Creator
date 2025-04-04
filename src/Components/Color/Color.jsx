import "./Color.css";
import { useState } from "react";
import ColorForm from "./ColorForm";
import CopyToClipboard from "./CopyToClipBoard";

export default function Color({ color, onUpdateColor, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false); // toggle between edit mode and view mode

  // enable editing when the edit button is clicked
  const handleEdit = (e) => {
    setIsEditing(true);
    console.log(e); // Set isEditing to true to show the form
  };

  // cancel editing when the cancel button is clicked
  const handleCancel = () => {
    setIsEditing(false); // set isEditing to false so it hides the form
  };

  // color update and send it to the parent component
  const handleUpdateColor = (updatedColor) => {
    console.log(updatedColor);
    onUpdateColor(updatedColor);
    setIsEditing(false);
    // close the edit form after updating the color
  };
  const handleDeleteConfirmation = () => {
    setIsConfirmingDelete(true); // Show confirmation
  };

  // Cancel deletion
  const handleCancelDelete = () => {
    setIsConfirmingDelete(false); // Hide confirmation
  };

  // Proceed with the deletion
  const handleConfirmDelete = () => {
    onDelete(color.id);
    setIsConfirmingDelete(false); // Hide confirmation
  };
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
        border: `1px solid ${color.hex}`,
        padding: "20px",
        borderRadius: "12px",
        margin: "10px",
        boxShadow: `0px 0px 15px ${color.hex}`,
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <h3 className="color-card-headline">{color.hex}</h3>
        <CopyToClipboard hex={color.hex} />
      </div>
      <h4>{color.role}</h4>
      <p style={{ color: color.contrastText }}>
        Contrast: {color.contrastText}
      </p>
      <button onClick={handleEdit}>Edit</button>
      {/* Show the form only when isEditing is true */}
      {isEditing && (
        <div className="edit-form">
          <ColorForm
            onSubmitColor={handleUpdateColor} // pass handleUpdateColor to submit updated color
            initialRole={color.role} // pass the color's current role
            initialHex={color.hex} // pass the color's current hex
            initialContrastText={color.contrastText} // pass the color's current contrastText
            id={color.id} // pass the color's id for updates
          />
          <button onClick={handleCancel}>Cancel</button> {/* cancel edit */}
        </div>
      )}

      {isConfirmingDelete ? (
        <div>
          <div className="delete-confirmation">Are you ready for it? 🐍</div>
          <button onClick={handleConfirmDelete}>Yes, delete</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleDeleteConfirmation}>Delete</button>
      )}
    </div>
  );
}
