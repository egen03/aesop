import React from 'react'
import subtitle from './Styles/subtitle.css';

function Subtitle(props) {
    return (
        <div>
            <p className="subtitle">{props.subtitle}</p>
        </div>
    )
}

export default Subtitle;
