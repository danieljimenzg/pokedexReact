import React from 'react'
import Card from './Card'

const CardList = ({pokemons, numbers, prueba}) => {
    return (
    <div>
    {   
        pokemons.map((pokemon, i, ) => {
        return (
            <Card 
            key={pokemons[i].name} 
            id={prueba.id} 
            name={pokemons[i].name}
            />
        )
    })
    }
    </div>
    )
}

export default CardList;




// import React from 'react'
// import Card from './Card'

// const CardList = ({pokemons, numbers}) => {
//     return (
//     <div>
//     {
//         pokemons.forEach((pokemon, i ) => {
//             console.log(pokemon.url[])
//         return (
//             <Card 
//             key={numbers[i].id} 
//             id={numbers[i].id} 
//             name={pokemons[i].name}
//             />
//         )
//     })
//     }
//     </div>
//     )
// }

// export default CardList;
