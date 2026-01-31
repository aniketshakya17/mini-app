import "./PriceListTable.css";

function PriceListHeader() {
  return (
    <div className="price-header price-grid">
      <span className="arrow"></span>
      <span className="article">Article No.</span>
      <span className="product">Product/Service</span>
      <span className="inprice">In Price</span>
      <span className="price">Price</span>
      <span className="unit">Unit</span>
      <span className="stock">In Stock</span>
      <span className="desc">Description</span>
      <span className="dots"></span>
    </div>
  );
}

export default PriceListHeader;
