import React from 'react'
import './Styles/imgsubtitle.css';

function Imgsubtitle(props) {
    return (
        <div>
            <p className={props.identifier}>{props.imgsubtitle}</p>
        </div>
    )
}

export default Imgsubtitle;
