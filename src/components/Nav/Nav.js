import './Nav.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-blue sticky-top ">
         <div className="container-fluid">
            <a className="navbar-brand" href="#"><img  src="./img/tete.jpg" className="fotologo" alt="TeTe"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="buscar en TeTe" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
               </form>
               <div className="contenedor_iconos">
                  <i className="fab fa-facebook-messenger"></i>
                  <i className="fas fa-bell"></i>
                  <i className="fas fa-cog"></i>
               </div>
               
            </div>
         </div>
      </nav>
  );
}

export {Nav};