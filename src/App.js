import React, {Fragment, Component} from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'


class App extends Component {

    constructor() {
        super()
        this.state = {
            pokemons: [],
            numbers: [],
            prueba: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
        
    }

    componentDidMount(){
        let nPokes = 10;
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${nPokes}`)
        .then(response => response.json())
        .then(name => this.setState({pokemons:name.results}))
        
        let j = 0; //Funciona pero no es lo ideal
        for(j=1; j<=nPokes; j++){
            this.state.numbers.push(j)
        }
        const updatePokemons = () => {
            let i = 0; //No funciona, no se puede acceder en el Componente CardList al atributo 'id' de los objetos retornados
            for(i=1; i<=nPokes; i++){
                fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
                .then(resp => resp.json())
                .then(dat => dat)
                .then(indie => this.setState(prueba => {
                    return {prueba: indie}
                }))
            }            

        } 
        updatePokemons()
    };
    
    render() {
        const filteredPokemons = this.state.pokemons.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        
        return(
            
            <Fragment>
            {
                console.log('nombres pokes',this.state.pokemons)
            }
            {
                console.log('numeros pokes', this.state.numbers)

            }
            {console.log('prueba',this.state.prueba)}
            <div className='tc'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png" alt='logopokemon'/>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList pokemons={filteredPokemons} numbers={this.state.numbers} prueba={this.state.prueba}/>
            </div>
            </Fragment>
        )

    }
}

export default App