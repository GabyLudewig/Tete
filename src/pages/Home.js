import { Inicio } from "../components/Inicio/Inicio";
function Home ({quotesDB}) {
    return ( 
        <Inicio quotesDB={quotesDB}/>
     );
}

export {Home} ;