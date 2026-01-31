import React from "react";
import "./Actions.css";

function Actions() {
  return (
    <div className="actions">
      <button className="action-btn add">
        <span>New Product</span>
        <i className="fa-solid fa-plus"></i>
      </button>

      <button className="action-btn print">
        <span>Print List</span>
        <i className="fa-solid fa-print"></i>
      </button>

      <button className="action-btn toggle">
        <span>Advanced Mode</span>
        <i className="fa-solid fa-sliders"></i>
      </button>
    </div>
  );
}

export default Actions;
