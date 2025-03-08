// ProgressBar.js
import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ width: "100%", backgroundColor: "#ddd", borderRadius: "5px" }}>
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: "#4CAF50",
          padding: "5px",
          textAlign: "center",
          color: "white",
          borderRadius: "5px",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
