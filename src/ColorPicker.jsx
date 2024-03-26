import React from "react";
import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    alert("Color copied to clipboard!");
  }

  return (
    <div className="container">
      <h1 className="title">Color Picker</h1>

      <div className="card" style={{ backgroundColor: color }} onClick={copyToClipboard}>
        <h3 className="card-title">Selected color:</h3>
        <p className="card-text">{color}</p>
      </div>

      <div className="color-select">
        <p style={{ fontWeight: "bold" }}>Select a color:</p>
        <input type="color" value={color} onChange={handleChangeColor} />
      </div>
    </div>
  );
}

export default ColorPicker;
