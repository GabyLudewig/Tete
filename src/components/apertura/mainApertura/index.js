import './styleMain.css'

function Main() {
    return (
        <main>
        <section className="contenedor" id="servicio">
            <h2 className="subtitulo">Nuestro servicio</h2>
            <div className="contenedor-servicio">
                <img src={require("../../img/nuestroservicio.png")} alt=""/>
                <div className="facebook-servicio">
                    <div className="service">
                        <h3 className="n-service"><span className="number">1</span>Conexión de teclers</h3>
                       
                    </div>
                    <div className="service">
                        <h3 className="n-service"><span className="number">2</span>Perfil personalizado</h3>
                        
                    </div>
                    <div className="service">
                        <h3 className="n-service"><span className="number">3</span>Atractivo visual</h3>
                       
                    </div>
                </div>
            </div>
        </section>
        <section className="galery" id="portafolio">
            <div>
                <h2 className="subtitulo">Galeria</h2>
                <div className="contenedor-galeria">
                    <img src={require("../../img/galeria1.jpg")} alt="" className="img-galeria"/>
                    <img src={require("../../img/galeria2.jpg")} alt="" className="img-galeria"/>
                    <img src={require("../../img/galeria3.jpg")} alt="" className="img-galeria"/>
                    <img src={require("../../img/galeria4.jpg")} alt="" className="img-galeria"/>
                    <img src={require("../../img/galeria5.jpg")} alt="" className="img-galeria"/>
                    <img src={require("../../img/galeria6.jpg")} alt="" className="img-galeria"/>
                </div>
            </div>
        </section>  
        <section className="imagen-light">   
            <img src={require("../../img/bxs-x-circle.svg")} alt="" className="close"/>
            <img src="" alt="" className="agregar-imagen"/>
        </section> 
        <section className="contenedor" id="expertos">
            <h2 className="subtitulo">Contamos con:</h2>
            <section className="experts">
                <div className="cont-expert">
                    <img src={require("../../img/Creative Process.png")} alt=""/>
                    <h3 className="n-expert">Creatividad</h3>
                </div>
                <div className="cont-expert">
                    <img src={require("../../img/equipo.png")} alt=""/>
                    <h3 className="n-expert">Equipo</h3>
                </div>
                <div className="cont-expert">
                    <img src={require("../../img/Security.png")} alt=""/>
                    <h3 className="n-expert">Seguridad</h3>
                </div>
            </section>
        </section>
    </main>
    )
}

export {Main};