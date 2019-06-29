import React from 'react';

const Scroll = (props) => {
    const style = {
        marginTop:'50px',
        height: '800px'
    }
    
    return (
        <div style = {style}>
            {props.children}
        </div> 
    )

};

export default Scroll;
