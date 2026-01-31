import React from "react";

function PriceListRow({ isActive, onClick }) {
  return (
    <div className="price-row price-grid" onClick={onClick}>
      <span className="arrow">
        {isActive && (
          <i
            className="fa-solid fa-arrow-right"
            style={{ color: "#5cb0f0" }}
          ></i>
        )}
      </span>

      <input className="pill article" defaultValue="1234567890" />
      <input
        className="pill product"
        defaultValue="This is a test product with fifty characters this!"
      />
      <input className="pill inprice" defaultValue="900500" />
      <input className="pill price" defaultValue="1500800" />
      <input className="pill unit" defaultValue="kilometers/hour" />
      <input className="pill stock" defaultValue="2500600" />
      <input
        className="pill desc"
        defaultValue="This is the description with fifty characters this"
      />
      <span className="dots">⋯</span>
    </div>
  );
}

export default PriceListRow;
