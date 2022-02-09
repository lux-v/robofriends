import React from "react";
import './SearchBox.css';


const SearchBox = ({searchfield, searchChange}) =>{
    return(
        <div className="searchBoxSection">
            <input 
                className="searchBox"
                type='search' 
                placeholder="Search robots" 
                onChange={searchChange}
                />
        </div>
        
    );
}

export default SearchBox;