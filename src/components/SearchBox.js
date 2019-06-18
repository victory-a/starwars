import React from 'react';

function SearchBox (props) {
    const { visibility, onSearchChange } = props;
    if (visibility) {
        return ( 
            <>
                <form className="menu__search-form">
                    <input className="menu__search-input " placeholder="Type and press enter " autoFocus  onChange={onSearchChange}/>
                </form>
            </>
        )
    } else {
        return '';
    }
}

export default SearchBox;