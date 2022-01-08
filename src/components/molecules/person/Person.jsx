import React from 'react';
import './person.scss';

const Person = () => {
    return (
        <div className='person'>
            <img src="https://www.themoviedb.org/t/p/w138_and_h175_face/yPd4G2RcjXQPNWkKUPbWh5v1flC.jpg" alt="" />
            <div className="person__text">
                <h3>marisa tomei</h3>
                <p>peter parker / spiderman</p>
            </div>
        </div>
    )
}

export default Person
