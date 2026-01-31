import "./PriceList.css";
import Search from "./search/Search";
import Actions from "./actions/Actions";
import PriceListTable from "./table/PriceListTable";
import PriceListHeader from "./table/PriceListHeader";

function PriceList() {
  return (
    <>
      <div className="price-list">
        <div className="price-top">
          <Search />
        </div>

          <Actions />
        
      </div>
      <PriceListHeader></PriceListHeader>
      <PriceListTable />
    </>
  );
}

export default PriceList;
