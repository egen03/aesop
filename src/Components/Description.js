import React from 'react'
import './Styles/description.css';

function Description(props) {
    return (
        <div>
            <p className="description">{props.description}</p>
        </div>
    )
}

export default Description;
