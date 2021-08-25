import React from 'react';


const Card = ({name, id}) => {
    
    return (
        <div className='pokemonCard tc dib br3 pa3 ma2 grow bw2 shadow-5 bg-animate hover-bg-blue'>
            <img alt={`pokemon${name}`} className='pokemon' src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} />
            <div>
                <h2>{name}</h2>
                <p>#{id}</p>
            </div>
        </div>
    )
}

export default Card;

// Img alternative
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/1.png