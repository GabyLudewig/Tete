import './Help.css';
import {Nav}from "../Nav/Nav"
const user = JSON.parse(localStorage.getItem("USER"))


function Help() {
    return ( 
      <>
          <Nav />
         <div className='container-fluid'>
            <div className='row '>
               <div className='col-sm-4'>
                  <div className="card gray" >
                     <div className="card-body">
                        <ul className="list-group">
                           <li className="list-group-item">
                              <div className="d-flex justify-content-start flex-wrap align-items-center">
                                 <img className= "logoTecler" src={require("../img/PabloPicasso.jpg")} />
                                 <a className="gray">{user.nombres} {user.apellidos}</a>
                              </div>
                           </li>
                           <li className="list-group-item">
                              <div className="d-flex justify-content-start flex-wrap align-items-center">
                                 <div className="circle-icons color_amigos">
                                    <i className="fas fa-user-friends"></i>
                                 </div>
                                 <a className="gray">Amigos</a>
                              </div>
                           </li>
                           <li className="list-group-item">
                              <div className="d-flex justify-content-start flex-wrap align-items-center">
                                 <div className="circle-icons yellow-back">
                                    <i className="far fa-bookmark"></i>
                                 </div>
                                 <a className="gray">Guardado</a>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="card gray" >
                     <div className="card-body">
                        <h5 className="card-title">Accesos Directos</h5>
                        <ul className="list-group">
                           <li className="list-group-item">
                              <div className="d-flex justify-content-start flex-wrap align-items-center">
                                 <div className="circle-icons white-back">
                                    <i className="fas fa-gamepad"></i>                             
                                 </div>
                                 <a className="gray">Juegos</a>
                              </div>
                           </li>
                           <li className="list-group-item">
                              <div className="d-flex justify-content-start flex-wrap align-items-center">
                                 <div className="circle-icons white-back">
                                    <i className="fas fa-video"></i>
                                 </div>
                                 <a className="gray">Videos</a>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="card gray" >
                     <div className="card-body">
                        <h5 className="card-title">Accesos Directos</h5>
                        <ul className="list-group">
                           <li className="list-group-item">
                              <div className="d-flex justify-content-start flex-wrap align-items-center">
                                 <div className="circle-icons white-back">
                                 <i className="fas fa-cog"></i>                             
                                 </div>
                                 <a className="gray">Ajustes</a>
                              </div>
                           </li>
                           <li className="list-group-item">
                              <div className="d-flex justify-content-start flex-wrap align-items-center">
                                 <div className="circle-icons white-back">
                                 <i className="fas fa-comments"></i>
                                 </div>
                                 <a className="gray">Chat</a>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-lg-7" >
                  <div className="card curso  ">
                     <div className="card-body">
                        <input className="form-control " type="text" placeholder="¿Necesitas ayuda?"  aria-label="Disabled input example" disabled/>
                        <br/>
                        <form onSubmit>

                           <div className="form-floating  mb-3">
                              <input  className="form-control " />
                              <label >Titulo</label>
                           </div>
                           <div className="form-floating">
                           <textarea className="form-control"></textarea>
                           <label >Comentarios</label>
                           </div>
                           <br/>
                           <div className="form-floating">
                              <input className='form-control'  />
                              <label >Problemas Comunes</label>
                           </div>
                           <br/>
                           <button type="button" className="btn btn-secondary">Enviar Comentario</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
     );
}

export  {Help};