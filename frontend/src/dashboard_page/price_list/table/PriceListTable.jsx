import React from "react";
import "./PriceListTable.css";
import PriceListRow from "./PriceListRow";

function PriceListTable() {
  return (
    <form className="price-table" >
      <div className="price-header price-grid">
        <span className="col-article">Article No.</span>
        <span className="col-product">Product/Service</span>
        <span className="col-inprice">In Price</span>
        <span className="col-price">Price</span>
        <span className="col-unit">Unit</span>
        <span className="col-stock">In Stock</span>
        <span className="col-desc">Description</span>
        <span></span>
      </div>

      <PriceListRow />
      <PriceListRow />
      <PriceListRow />
      <PriceListRow />
      <PriceListRow />
      <PriceListRow />
    </form>
  );
}

export default PriceListTable;
