import React from 'react';
import './location.scss';

function Location(props) {
    return (
        <div className="container">
            {props.places}
        </div>
    );
}

export default Location;
