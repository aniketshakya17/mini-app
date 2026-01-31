import React, { useState } from "react";
import "./PriceListTable.css";
import PriceListRow from "./PriceListRow";

function PriceListTable() {
  const [activeRow, setActiveRow] = useState(null);

  return (
    <div className="price-table-wrapper">
      <form className="price-table">


        {Array.from({ length: 20 }).map((_, index) => (
          <PriceListRow
            key={index}
            isActive={activeRow === index}
            onClick={() => setActiveRow(index)}
          />
        ))}
      </form>
    </div>
  );
}

export default PriceListTable;
