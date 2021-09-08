import React, {Fragment, Component} from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'


class App extends Component {
    //Aqui, se crea el constructor para poder hacer uso y manejo de los states
    constructor() {
        super()
        this.state = {
            pokemons: [],
            searchfield: ''
        }
    }
    //Funcion para que los caracteres tipeados en la barra de busqueda, se conviertan en el state 'searchfield'
    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
        
    }

    componentDidMount(){
        let nPokes = 16; //Cantidad de pokemones a mostrar. Min 1, max 649
        const updatePokemon = async () => {
            let pokemon = []; // esto es para guardar todos los ids de los pokemons
            for (let i=1; i<= nPokes; i++) {
              let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
              let info = await res.json();
              pokemon.push(info);
            }
          
            // aqui actualizamos el state despues de obtener todos los ids
            this.setState({ pokemons: pokemon });
          }
        updatePokemon()

    };
    
    render() {
        //Esta funcion filtra todos los pokemons que tenemos en nuestro state "pokemons", y dependiendo del valor que tenga el state "searchfield"
        //devuelve los resultados que coincidan. Es decir, se encarga de la funcionalidad buscar.
        const filteredPokemons = this.state.pokemons.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        
        return(
            
            <Fragment>
            <div className='tc'>
                <div className='center'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png" alt='logopokemon'/>
                {/* <button><img src='https://uc-emoji.azureedge.net/orig/21/a0a3d90dda96eca3b8e291c61f6ee8.png' width='30' height='30'alt='heart'/></button> */}
                </div>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList pokemons={filteredPokemons}/>
            </div>
            </Fragment>
        )

    }
}

export default App

//&#10084;&#65039; heart