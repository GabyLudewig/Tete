import { useState } from 'react';
import { getPokemon } from '../../api/api';

import './Counter.css';

function Counter(props) {

    const [state, setState] = useState({counter: 0,title:"Contador de estado",color:"blue",pokemonImage:"",pokemonName:"",pokemonID:false})  

    const add = () =>{
        let newState = {
            ...state,
            counter: state.counter + 1, 
        }
        setState(newState)
    }

    const substract = () =>{
        let newState = {
            ...state,
            counter: state.counter - 1, 
        }
        setState(newState)
    }

    const reset = () =>{
        let newState = {
            ...state,
            counter: 0, 
        }
        setState(newState)
    }


    const setColor = (event) =>{
        let newState = {
            ...state,
            color: event.target.value
        }
        setState(newState)
    }


    const printPokemon = async (event) =>{

        let newPokemon =  await getPokemon(event.target.value)
        let pokeJSON = await newPokemon.json()

        let newState = {
            ...state,
            pokemonImage: pokeJSON.sprites.front_default,
            pokemonName: pokeJSON.name,
            pokemonID: event.target.value
        }
        setState(newState)   
    }
 
    const isEven = state.counter % 2 === 0
    const message = isEven ? "Is Even" : "Is Odd"


  return (
<div>
    
    <div className='container-fluid'>
        <div className='row '>
            <div className='col-sm-4'>
            <br />
                <div className='card'>
                    <div className='card-body'>
                        <h3>Contador de Pokémon</h3>
                        <h3>{state.counter}</h3>
                        <h4>{message}</h4>
                        <br />
                        <div className='row'>
                            <div className='col-sm-4'>
                            <button className='btn btn-primary' onClick={add}> <i className="fas fa-plus-circle"></i> Agregar</button>
                            </div>
                            <div className='col-sm-4'>
                            <button className='btn btn-primary' onClick={substract}> <i className="fas fa-plus-circle"></i> Restar</button>
                            </div>
                            <div className='col-sm-4'>
                            <button className='btn btn-danger' onClick={reset}> <i className="fas fa-toilet"></i> Reset</button>
                            </div>
                        </div>
                        <br />
                        <input className='form-control' type="number" onChange={printPokemon}  placeholder='Ingresa el titulo del contador'/>
                        <br />
                        <p>Elije el color de fondo:</p>
                        <input className='form-control' type="color" onChange={setColor}  placeholder='Ingresa el titulo del contador'/>
                        <br />
                        <h3>Trae un Pokémon:</h3>
                        <br />
                        {state.pokemonID &&
                            <>
                            <h3>{state.pokemonName}</h3>
                            <img className='img-fluid' src={state.pokemonImage} alt='Pokémon' />   
                            </>
                        } 
                        <br />
                    </div>
                </div>
                <div className='card'>
                <div className='card-body'>
                        <h3>Contador de Pokémon</h3>
                        <h3>{state.counter}</h3>
                        <h4>{message}</h4>
                        <br />
                        <div className='row'>
                            <div className='col-sm-4'>
                            <button className='btn btn-primary' onClick={add}> <i className="fas fa-plus-circle"></i> Agregar</button>
                            </div>
                            <div className='col-sm-4'>
                            <button className='btn btn-primary' onClick={substract}> <i className="fas fa-plus-circle"></i> Restar</button>
                            </div>
                            <div className='col-sm-4'>
                            <button className='btn btn-danger' onClick={reset}> <i className="fas fa-toilet"></i> Reset</button>
                            </div>
                        </div>
                        <br />
                        <input className='form-control' type="number" onChange={printPokemon}  placeholder='Ingresa el titulo del contador'/>
                        <br />
                        <p>Elije el color de fondo:</p>
                        <input className='form-control' type="color" onChange={setColor}  placeholder='Ingresa el titulo del contador'/>
                        <br />
                        <h3>Trae un Pokémon:</h3>
                        <br />
                        {state.pokemonID &&
                            <>
                            <h3>{state.pokemonName}</h3>
                            <img className='img-fluid' src={state.pokemonImage} alt='Pokémon' />   
                            </>
                        } 
                        <br />
                    </div>
                </div>
            </div>
            <div className='col-sm-8'>
                <br />
                <div className='card'>
                    <div className='card-body'>
                        <h3>Contador de Pokémon</h3>
                        <h3>{state.counter}</h3>
                        <h4>{message}</h4>
                        <br />
                        <div className='row'>
                            <div className='col-sm-4'>
                            <button className='btn btn-primary' onClick={add}> <i className="fas fa-plus-circle"></i> Agregar</button>
                            </div>
                            <div className='col-sm-4'>
                            <button className='btn btn-primary' onClick={substract}> <i className="fas fa-plus-circle"></i> Restar</button>
                            </div>
                            <div className='col-sm-4'>
                            <button className='btn btn-danger' onClick={reset}> <i className="fas fa-toilet"></i> Reset</button>
                            </div>
                        </div>
                        <br />
                        <input className='form-control' type="number" onChange={printPokemon}  placeholder='Ingresa el titulo del contador'/>
                        <br />
                        <p>Elije el color de fondo:</p>
                        <input className='form-control' type="color" onChange={setColor}  placeholder='Ingresa el titulo del contador'/>
                        <br />
                        <h3>Trae un Pokémon:</h3>
                        <br />
                        {state.pokemonID &&
                            <>
                            <h3>{state.pokemonName}</h3>
                            <img className='img-fluid' src={state.pokemonImage} alt='Pokémon' />   
                            </>
                        } 
                        <br />
                    </div>
                </div>
            </div>  
        </div>
    </div>
</div>
  );
}

//export {Counter};