import React from 'react';
import './pill.scss'

const Pill = ({name}) => {
    return (
        <div className='pill'>
            <p>{name || "aventura"}</p>
        </div>
    )
}

export default Pill
