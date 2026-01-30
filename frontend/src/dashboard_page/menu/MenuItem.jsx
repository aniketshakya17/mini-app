import React from "react";

function MenuItem({ icon, label, active, color }) {
  return (
    <div className={`menu-item ${active ? "active" : ""}`}>
      <span className="menu-icon" style={{ color }}>{icon}</span>
      <span className="menu-text">{label}</span>
    </div>
  );
}

export default MenuItem;
