import "./PriceList.css";
import Search from "./search/Search";
import Actions from "./actions/Actions";
import PriceListTable from "./table/PriceListTable";
import PriceListHeader from "./table/PriceListHeader";
import { useRef } from "react";

function PriceList() {
  const tableRef = useRef(null);

  return (
    <>
      <div className="price-list">
        <div className="price-top">
          <Search />
        </div>

        <Actions
          onSave={() => tableRef.current?.saveAll()}
          saving={tableRef.current?.saving}
        />
      </div>

      <PriceListHeader />
      <PriceListTable ref={tableRef} />
    </>
  );
}

export default PriceList;
