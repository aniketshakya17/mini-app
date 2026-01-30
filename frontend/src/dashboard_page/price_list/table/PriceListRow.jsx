import React from 'react';

function PriceListRow() {
  return (
    <div className="price-row price-grid">
      <span className="arrow">→</span>

      <input
        className="pill article"
        name="article_no"
        defaultValue="1234567890"
      />

      <input
        className="pill product"
        name="product_name"
        defaultValue="This is a test product with fifty characters this!"
      />

      <input
        className="pill inprice"
        name="in_price"
        defaultValue="900500"
      />

      <input
        className="pill price"
        name="price"
        defaultValue="1500800"
      />

      <input
        className="pill unit"
        name="unit"
        defaultValue="kilometers/hour"
      />

      <input
        className="pill stock"
        name="in_stock"
        defaultValue="2500600"
      />

      <input
        className="pill desc"
        name="description"
        defaultValue="This is the description with fifty characters this"
      />

      <span className="dots">⋯</span>
    </div>
  );
}

export default PriceListRow;
