import './perfilAmigo.css'
import React, { useParams } from 'react-router-dom';
import { Nav } from "../Nav/Nav"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function PerfilAmigo() {

    const [token] = useLocalStorage("TOKEN", {});
    const navigate = useNavigate();

    useEffect(() => {
        if (!token.token) {
            navigate("/login");
        }
    }, []);
    const { name, apellido } = useParams()
    console.log(name, apellido)
    return (
        <>
            <Nav />
            <div className='container'>
                <div className='friendName'>
                    <h1>Hola {name, apellido}</h1>
                </div>
            </div>
        </>
    );

};

export { PerfilAmigo };