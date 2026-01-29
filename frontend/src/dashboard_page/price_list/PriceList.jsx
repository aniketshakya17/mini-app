import React from 'react';
import Search from './search/Search';
import Actions from './actions/Actions';
import PriceListTable from './table/PriceListTable';

function PriceList() {
    return (
        <>
            <Search></Search>
            <Actions></Actions>
            <PriceListTable></PriceListTable>
        </>
    );
}

export default PriceList;