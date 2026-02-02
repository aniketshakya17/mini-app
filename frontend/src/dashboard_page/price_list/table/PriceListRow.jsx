import React from "react";

function PriceListRow({ row, isActive, onClick, onChange }) {
  return (
    <div
      className={`price-row price-grid ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <span className="arrow">
        {isActive && (
          <i
            className="fa-solid fa-arrow-right"
            style={{ color: "#5cb0f0" }}
          ></i>
        )}
      </span>

      <input
        className="pill article"
        value={row.articleNo}
        onChange={(e) => onChange("articleNo", e.target.value)}
      />

      <input
        className="pill product"
        value={row.productService}
        onChange={(e) => onChange("productService", e.target.value)}
      />

      <input
        className="pill inprice"
        value={row.inPrice}
        onChange={(e) => onChange("inPrice", e.target.value)}
      />

      <input
        className="pill price"
        value={row.price}
        onChange={(e) => onChange("price", e.target.value)}
      />

      <input
        className="pill unit"
        value={row.unit}
        onChange={(e) => onChange("unit", e.target.value)}
      />

      <input
        className="pill stock"
        value={row.inStock}
        onChange={(e) => onChange("inStock", e.target.value)}
      />

      <input
        className="pill desc"
        value={row.description}
        onChange={(e) => onChange("description", e.target.value)}
      />
      <span className="dots">⋯</span>
    </div>
  );
}

export default PriceListRow;
