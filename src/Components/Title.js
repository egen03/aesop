import React from 'react'
import title from './Styles/title.css';

function Title(props) {
    return (
        <div>
            <p className={props.identifier}>{props.title}</p>
        </div>
    )
}

export default Title;
