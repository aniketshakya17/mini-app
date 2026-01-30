import React from 'react';

import "./Actions.css";

function Actions() {
  return (
    <div className="actions">
      <button className="action-btn add">New Product<i class="fa-solid fa-plus" style={{color:"#2d8bd2"}}></i></button>
      <button className="action-btn print">Print List<i class="fa-solid fa-print" style={{color:"#2d8bd2"}}></i></button>
      <button className="action-btn toggle">Advanced Mode<i class="fa-solid fa-sliders" style={{color:"#2d8bd2"}}></i></button>
    </div>
  );
}

export default Actions;
