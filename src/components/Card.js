import React from 'react';

const Card = ({name, email, id}) =>{
    return (
        <div className='card tc dib pa2 ma2 grow bw2 shadow-5'>
            <img alt='contacts' src={`https://robohash.org/${id}?150x150`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;