import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const Search = ({handleInput, search}) => {

    return (
        <section className="searchbar-wrap">
            <input type="text" placeholder="Search for a Film" className="searchbar" onChange={handleInput} onKeyPress={search}/>
        </section>
    )
}

export default Search;