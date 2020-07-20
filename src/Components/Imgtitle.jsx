import React from 'react'
import './Styles/imgtitle.css';

function Imgtitle(props) {
    return (
        <div>
            <p className="imgtitle">{props.imgtitle}</p>
        </div>
    )
}

export default Imgtitle;
