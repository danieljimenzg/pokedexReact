import React, {Fragment, Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import Loader from '../components/Loader'
import Footer from '../components/Footer'


class App extends Component {
    //Aqui, se crea el constructor para poder hacer uso y manejo de los states
    constructor() {
        super()
        this.state = {
            pokemons: [],
            searchfield: '',
            source: ''
        }
    }

    //Funcion para que los caracteres tipeados en la barra de busqueda, se conviertan en el state 'searchfield'
    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
        
    }

    backgroundArray = [
        'https://i.imgur.com/TQW5VzG.mp4', 
        'https://thumbs.gfycat.com/HotShoddyChimneyswift-mobile.mp4',
        'https://i.imgur.com/gtX0Lvp.mp4',
        'https://i.imgur.com/xF88QYp.mp4',
        'https://desktophut-com.cdn.vidyome.com/videos/02-2019/ZAJttWQzCCGxECGynNbF.mp4',
        'https://cdn-cf-east.streamable.com/video/mp4-mobile/rtvv9.mp4?Expires=1632423360&Signature=C~izwlDUCwUm4XUDWUy1dDrXPNYjy99tzITd2b1klVjyw-9wJxBNq7NFOp4~igo8n-bsQ6NbO9h4MNKSR02DCLhQCzpJ-CQhpeogPPQhBU5mCkeSP0t9739LyZ4VKz2Ngmwo6fA-oyi~P7560TSzYRceREO-uGXb7D0ZFcqCAIrBc0xEHbOmFI3nPWYq9KuiZBXLpXnxzJcu~mR0gdNUeoSK2qfT-dF4D-yTjOgFQfkL3kWDQpw7Z6Gpc7g5T5WplhHz~FDNQZ5kzuKZ7sGC4D3VGv0vzmOBOhbQVDIB7znMqv49vyXqPCAn2hFLXaMLShuxQuOj2lCpxbomawEeUQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ'
    ];
    

    componentDidMount(){
        let nPokes = 151; //Cantidad de pokemones a mostrar. Min 1, max 649
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
        
        const setBackground = () => {
            let random = Math.floor(Math.random() * this.backgroundArray.length);
            let backgroundRandom = this.backgroundArray[random]
            this.setState({source: backgroundRandom})
            
        }

        updatePokemon()
        setBackground()
    }
    
    render() {
        
        //Esta funcion filtra todos los pokemons que tenemos en nuestro state "pokemons", y dependiendo del valor que tenga el state "searchfield"
        //devuelve los resultados que coincidan. Es decir, se encarga de la funcionalidad buscar.
        const {pokemons, searchfield} = this.state
        const filteredPokemons = pokemons.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !pokemons.length ? 
            
        <Loader src={this.state.source}/> :

        (
            
            <Fragment>
                <div className='tc'>
                <video muted autoPlay loop id='bgvideo'>
					<source src={this.state.source} type='video/mp4'></source>
				</video>
                    <div className='header center'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png" alt='logopokemon'/>
                    {/* <button><img src='https://uc-emoji.azureedge.net/orig/21/a0a3d90dda96eca3b8e291c61f6ee8.png' width='30' height='30'alt='heart'/></button> */}
                    </div>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <div className='scroll-container'>
                    <Scroll>
                        <CardList pokemons={filteredPokemons}/>
                    </Scroll>
                    </div>
                    <Footer/>
                </div>
            </Fragment>
        )
    }
}

export default App

//&#10084;&#65039; heart

// Video background: 
// Pokemon Gold title screen https://i.imgur.com/TQW5VzG.mp4 
// Pokemon Emerald title screen https://thumbs.gfycat.com/HotShoddyChimneyswift-mobile.mp4
// Pokemon Saphire title screen https://i.imgur.com/gtX0Lvp.mp4
// Pokemon Ruby title screen https://i.imgur.com/xF88QYp.mp4
// Pokemon Biome full https://desktophut-com.cdn.vidyome.com/videos/02-2019/ZAJttWQzCCGxECGynNbF.mp4
// Pokemon Biome individuals https://loginportal.funnyjunk.com/hdgifs/Pokebiome_2bf06c_5671312.webm, https://loginportal.funnyjunk.com/hdgifs/Pokebiome_3c0d10_5671312.webm, https://loginportal.funnyjunk.com/hdgifs/Pokebiome_ba3ef3_5671312.webm
// Pokemon Umbreon https://cdn-cf-east.streamable.com/video/mp4-mobile/rtvv9.mp4?Expires=1632423360&Signature=C~izwlDUCwUm4XUDWUy1dDrXPNYjy99tzITd2b1klVjyw-9wJxBNq7NFOp4~igo8n-bsQ6NbO9h4MNKSR02DCLhQCzpJ-CQhpeogPPQhBU5mCkeSP0t9739LyZ4VKz2Ngmwo6fA-oyi~P7560TSzYRceREO-uGXb7D0ZFcqCAIrBc0xEHbOmFI3nPWYq9KuiZBXLpXnxzJcu~mR0gdNUeoSK2qfT-dF4D-yTjOgFQfkL3kWDQpw7Z6Gpc7g5T5WplhHz~FDNQZ5kzuKZ7sGC4D3VGv0vzmOBOhbQVDIB7znMqv49vyXqPCAn2hFLXaMLShuxQuOj2lCpxbomawEeUQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ 