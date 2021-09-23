import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';


export default function Card ({name, id, types, life, attack, defense, weight, height}) {

    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
        
    if(name !== 'darmanitan-standard'){
        let pkmImg = `https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`
           
         return (
            <div className='pokemonCard tc dib br3 pa3 ma2 grow bw2 shadow-5 bg-animate unselectable'>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>        
                <div className='pokemonCardFront' onClick={handleClick}>
                    <div className='cardTopFront'>
                        <div className='nId'>#{id}</div>
                        {/* <button className='heart'>♡</button> */}
                    </div>
                    <img alt={`pokemon${name}`} className='pokemon' src={pkmImg} />
                    <div className='cardBody'>
                        <h2>{name}</h2>
                        <div className='cardTypesDiv'>
                            {types}
                        </div>
                    </div>
                    </div>
                <div className='pokemonCardBack' onClick={handleClick}>
                    <img alt={`pokemon${name}`} className='pokemonBack' src={pkmImg} />
                    <div className='stats'>
                    <div className='clearfix'>
                    <div className={`c100 p${life} small green`}>
                    <span>{life}</span>
                    <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                    </div>
                    </div>
                    </div>

                    <div className='clearfix'>
                    <div className={`c100 p${attack} small red`}>
                    <span>{attack}</span>
                    <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                    </div>
                    </div>
                    </div>

                    <div className='clearfix'>
                    <div className={`c100 center p${defense} small blue`}>
                    <span>{defense}</span>
                    <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                    </div>
                    </div>
                    </div>

                    </div>

                    <div className='statsName'>
                        <li className='liHP'>HP</li>
                        <li className='liATK'>ATK</li>
                        <li className='liDEF'>DEF</li>
                    </div>

                    <div className='pokemonSize'>
                    <div className='heightDiv'>
                        <div className='heightName'>Height</div>
                        <div className='height'>{(height * 0.1).toFixed(2)} M</div>
                    </div>
                    <div className='weightDiv'>
                        <div className='weightName'>Weight</div>
                        <div className='weight'>{(weight * 0.1).toFixed(1)} Kg</div>
                    </div>
                    </div>
                </div>
            </ReactCardFlip>
            </div>
        )
    }else{
        let darmanitanImg = 'https://img.pokemondb.net/sprites/black-white/anim/normal/darmanitan-standard-mode.gif';
        return(
            <div className='pokemonCard tc dib br3 pa3 ma2 grow bw2 shadow-5 bg-animate unselectable'>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>        
              <div className='pokemonCardFront' onClick={handleClick}>
                  <div className='cardTop'>
                      <div className='nId'>#{id}</div>
                      {/* <button className='heart'>♡</button> */}
                  </div>
                  <img alt={`pokemon${name}`} className='pokemon' src={darmanitanImg} />
                  <div className='cardBody'>
                      <h2>{name}</h2>
                      <div className='cardTypesDiv'>
                          {types}
                      </div>
                  </div>
                  </div>
              <div className='pokemonCardBack' onClick={handleClick}>
                  <div className='cardTop'>
                      <div className='nId'>#{id}</div>
                      <img alt={`pokemon${name}`} className='pokemonBack' src={darmanitanImg} />
                  </div>
                  <div className='stats'>
                  <div className='clearfix'>
                  <div className={`c100 p${life} small green`}>
                  <span>{life}</span>
                  <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                  </div>
                  </div>
                  </div>
            
                  <div className='clearfix'>
                  <div className={`c100 p${attack} small red`}>
                  <span>{attack}</span>
                  <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                  </div>
                  </div>
                  </div>
            
                  <div className='clearfix'>
                  <div className={`c100 p${defense} small blue`}>
                  <span>{defense}</span>
                  <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                  </div>
                  </div>
                  </div>
            
                  </div>
            
                  <div className='statsName'>
                      <li className='liHP'>HP</li>
                      <li className='liATK'>ATK</li>
                      <li className='liDEF'>DEF</li>
                  </div>
            
                  <div className='sizes'>
                  <div className='heightDiv'>
                      <div className='heightName'>Height</div>
                      <div className='height'>{(height * 0.1).toFixed(2)} M</div>
                  </div>
                  <div className='weightDiv'>
                      <div className='weightName'>Weight</div>
                      <div className='weight'>{(weight * 0.1).toFixed(1)} Kg</div>
                  </div>
                  </div>
              </div>
            </ReactCardFlip>
            </div>
        )
    }
}

// alternative images:
// https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif
// https://projectpokemon.org/images/normal-sprite/${name}.gif
// https://img.pokemondb.net/sprites/bank/normal/${name}.png