import React from "react";
import "./Actions.css";

function Actions() {
  return (
    <div className="actions">
      <button className="action-btn add" type="button">
        <span>New Product</span>
        <i className="fa-solid fa-plus" />
      </button>

      <button className="action-btn print" type="button">
        <span>Print List</span>
        <i className="fa-solid fa-print" />
      </button>

      <button className="action-btn toggle" type="button">
        <span>Advanced Mode</span>
        <i className="fa-solid fa-sliders" />
      </button>


    </div>
  );
}

export default Actions;
