import React from 'react';
import './score.scss';
import star from "../../../assets/star.svg"

const Score = () => {

    let widthDummy = 40

    return (
        <div className='score'>
            <img src={star} alt="" srcset="" />
            <div className='score__track'>
                <div className='score__value' style={{width: `${widthDummy}%`}}></div>
            </div>
            
        </div>
    )
}

export default Score
