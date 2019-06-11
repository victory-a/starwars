import React, { Fragment } from 'react';

function SearchBox (props) {
    const { visibility, SearchChange } = props;
    if (visibility) {
        return ( 
        <Fragment>
            <form className="menu__search-form">
                <input className="menu__search-input " placeholder="Type and hit enter" autoFocus 
                onChange={SearchChange}/>
            </form>
        </Fragment>)
    } else {
        return '';
    }

}

export default SearchBox;