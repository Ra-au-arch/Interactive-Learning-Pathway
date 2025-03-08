// ProgressTracker.js
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const ProgressTracker = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  return (
    <div className="container">
      <h2>Learning Progress</h2>
      <ProgressBar progress={progress} />
      <button onClick={increaseProgress} style={{ marginTop: "10px", padding: "5px 10px" }}>
        Increase Progress
      </button>
    </div>
  );
};

export default ProgressTracker;
