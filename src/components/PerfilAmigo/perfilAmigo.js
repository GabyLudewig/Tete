import './perfilAmigo.css'
import React, { useParams } from 'react-router-dom';
import {Nav}from "../Nav/Nav"


function PerfilAmigo() {
    const {name, apellido} = useParams()
    console.log(name, apellido)
    return (
        <>
            <Nav/>
            <div className='container'>
                <div className='friendName'>
                    <h1>Hola {name, apellido}</h1>
                </div>
            </div>
        </>
    );
    
};

export { PerfilAmigo };