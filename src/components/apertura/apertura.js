import './apertura.css'
import {Header} from './headerApertura'
import {Main} from './mainApertura'
import {Footer} from './footerApertura'

function Apertura(params) {
    return (
        <body>
            <Header/>
            <Main/>
            <Footer/>
        </body> 
    )
}

export {Apertura};