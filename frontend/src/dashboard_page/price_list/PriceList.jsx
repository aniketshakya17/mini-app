import "./PriceList.css";
import Search from "./search/Search";
import Actions from "./actions/Actions";
import PriceListTable from "./table/PriceListTable";

function PriceList() {
  return (
    <>
      <div className="price-list">
        <div className="price-top">
          <Search />
        </div>
        <div className="actions">
          <Actions></Actions>
        </div>
      </div>
      <PriceListTable></PriceListTable>
    </>
  );
}

export default PriceList;
