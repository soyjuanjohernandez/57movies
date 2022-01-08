import React from 'react';
import './pill.scss'

const Pill = ({text}) => {
    return (
        <div className='pill'>
            <p>{text || "aventura"}</p>
        </div>
    )
}

export default Pill
