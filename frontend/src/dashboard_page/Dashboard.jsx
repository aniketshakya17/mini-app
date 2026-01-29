import React from 'react';
import Header from './header/Header';
import Menu from './menu/Menu';
import PriceList from './price_list/PriceList';

function DashBoard() {
    return (
        <>
            <Header></Header>
            <Menu></Menu>
            <PriceList></PriceList>
        </>
    );
}

export default DashBoard;