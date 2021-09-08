import React from 'react';


const Card = ({name, id, types}) => {
    
    return (
        <div className='pokemonCard tc dib br3 pa3 ma2 grow bw2 shadow-5 bg-animate hover-bg-blue'>
            <div className='cardTop'>
                <div className='nId'>#{id}</div>
                {/* <button className='heart'>♡</button> */}
            </div>
            <img alt={`pokemon${name}`} className='pokemon' src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} />
            <div className='cardBody'>
                <h2>{name}</h2>
                <div className='cardTypesDiv'>
                    {types}
                </div>
            </div>
        </div>
    )
}

export default Card;