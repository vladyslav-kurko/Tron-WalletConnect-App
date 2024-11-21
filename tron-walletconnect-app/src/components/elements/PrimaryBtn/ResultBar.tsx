import React from "react";
import "./ResultBar.css";

interface ResultBarProps {
  text: string; // Label text
  percentage: number; // Progress percentage
  color: string; // Bar color
}

const ResultBar: React.FC<ResultBarProps> = ({ text, percentage, color }) => {
  return (
    <div className="result-bar-container">
      <div className="result-bar-header">
        <span className="result-bar-text">{text}</span>
        <span className="result-bar-percentage">{percentage}%</span>
      </div>
      <div className="result-bar">
        <div
          className="result-bar-fill"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export default ResultBar;
