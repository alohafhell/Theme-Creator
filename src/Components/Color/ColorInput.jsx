import { useState } from "react";

export default function ColorInput({ id, value, onChange }) {
  return (
    <div>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder="e.g., #ff5733"
      />
      <input type="color" value={value} onChange={onChange} />
    </div>
  );
}
