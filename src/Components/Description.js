import React from 'react'
import description from './Styles/description.css';

function Description(props) {
    return (
        <div>
            <p className="description">{props.description}</p>
        </div>
    )
}

export default Description;
