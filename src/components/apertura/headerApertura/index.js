import './styleHeader.css'
import { React } from 'react';
import { useNavigate } from "react-router-dom";


function Header() {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login")
    }
    return (
        <header className ="header" id="inicio">
            <img src={require("../../img/tete.jpg")} alt="" className="hamburger" />
            <nav className="menu-navegacion">
                <a className='bx bxs-home-heart' undefined href="#inicio">Inicio</a>
                <a className='bx bxs-donate-heart' href="#servicio">Servicio</a>
                <a className='bx bxs-book-heart' href="#portafolio">Galeria</a>
                <a className='bx bxs-heart-circle' href="#expertos">Expertos</a>
                <a className='bx bxs-heart-circle' href="./perfil.html">Perfil</a>
                <a className='bx bxs-bookmark-heart' href="../html/registro.html">Registrate</a>
                <a className='bx bxs-user-account' href="../html/login.html">Login</a>
                <a className='bx bx-support' href="#contacto">Contacto</a>
            </nav>
            <div className ="contenedor head">
                <h1 className="titulo">Un apapacho a otro</h1>
                <p className="copy">Calidez desde la comodidad de tu hogar</p>    
                <button  className='vamos' onClick={goToLogin}>!Vamos allá¡</button>           
            </div>
        </header>
    )
}

export {Header};