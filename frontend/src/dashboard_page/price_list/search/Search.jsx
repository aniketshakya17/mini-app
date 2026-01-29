import React from 'react';
import SearchArticle from './SearchArticle';
import SearchProduct from './SearchProduct';

function Search() {
    return (
        <>
            <h1>Search</h1>
            <SearchArticle></SearchArticle>
            <SearchProduct></SearchProduct>
        </>
    );
}

export default Search;