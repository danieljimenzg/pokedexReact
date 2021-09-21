import React from 'react';


const Card = ({name, id, types, key}) => {
    
    if(name !== 'darmanitan-standard'){
           
         return (
            <div className='pokemonCard tc dib br3 pa3 ma2 grow bw2 shadow-5 bg-animate'>
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
    }else{
        return(
            <div className='pokemonCard tc dib br3 pa3 ma2 grow bw2 shadow-5 bg-animate hover-bg-light-blue'>
            <div className='cardTop'>
                <div className='nId'>#{id}</div>
                {/* <button className='heart'>♡</button> */}
            </div>
            <img alt={`pokemon${name}`} className='pokemon' src={`https://img.pokemondb.net/sprites/black-white/anim/normal/darmanitan-standard-mode.gif`} />
            <div className='cardBody'>
                <h2>Darmanitan</h2>
                <div className='cardTypesDiv'>
                    {types}
                </div>
            </div>
        </div>
        )
    }
}

export default Card;

// alternative images:
// https://projectpokemon.org/images/normal-sprite/${name}.gif
// https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif
// https://img.pokemondb.net/sprites/bank/normal/${name}.png