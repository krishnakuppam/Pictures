import React, { useState } from "react";

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={handleToggle}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          fontWeight: "bold",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          backgroundColor: isOn ? "green" : "red",
          color: "white",
        }}
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}
