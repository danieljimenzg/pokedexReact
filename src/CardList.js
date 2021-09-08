import React from 'react'
import Card from './Card'
import typeColors from './typeColors'

const CardList = ({pokemons}) => {
    return (
    <div>
    {   //Aqui, mapeamos el array pokemons (que es pasado por parametro a este componente desde App.js). Este array lo obtenemos desde la funcion
        //Filtered Pokemons, tambien en App.js
        pokemons.map((pokemon, i ) => {
        return (
            <Card 
            key={pokemons[i].name} 
            id={pokemons[i].id} 
            name={pokemons[i].name}
            types={pokemons[i].types.map(type => { //Este map, sirve para poder darle un color determinado de background al tipo/tipos de cada uno
                                                   //de los pokemons. 
                return (
                <div 
                className="cardTypes" style={{ backgroundColor: typeColors[type.type.name] }}>{type.type.name}
                </div>
            )})}
            />
        )
    })
    }
    </div>
    )
}

export default CardList;