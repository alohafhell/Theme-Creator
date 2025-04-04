import { useState, useEffect } from "react";
import "./CopyToClipBoard.css";

export default function CopyToClipboard({ hex }) {
  // to state to handle if the confirmation message should be shown
  const [isCopied, setIsCopied] = useState(false);

  // to make function that handle the copy action
  const handleCopy = async () => {
    try {
      // a try to copy the hex code to the clipboard
      await navigator.clipboard.writeText(hex);
      setIsCopied(true); // showing confirmation text after copying
    } catch (error) {
      console.error("Failed to copy: ", error); // ff something goes wrong log the error
    }
  };

  // hide the confirmation message after 3 secondsautomatically
  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false); // hide confirmation after 3 seconds
      }, 3000);
      return () => clearTimeout(timer); // clear timeout
    }
  }, [isCopied]);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* "copy" button */}
      <button onClick={handleCopy}>Copy</button>

      {/* confirmation message */}
      {isCopied && (
        <p style={{ color: "#f79ac6", fontSize: "14px", marginTop: "5px" }}>
          Copied! ✨
        </p>
      )}
    </div>
  );
}
