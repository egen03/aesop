import React from 'react'
import './Styles/subtitle.css';

function Subtitle(props) {
    return (
        <div>
            <p className={props.identifier}>{props.subtitle}</p>
        </div>
    )
}

export default Subtitle;
