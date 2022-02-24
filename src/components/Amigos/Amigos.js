import './Amigos.css';
import {Nav}from "../Nav/Nav"
const user = JSON.parse(localStorage.getItem("USER"))


function Amigos() {
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
                  
                  <div className="card gray" >
                  <div className="card-body">
                     <ul className="list-group">
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-user-secret"></i>                             
                              </div>
                              <a className="gray">Ciudad y pais de residencia</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-user-secret"></i>                             
                              </div>
                              <a className="gray">Amigos</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-user-secret"></i>                             
                              </div>
                              <a className="gray">Amigos</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-user-secret"></i>                             
                              </div>
                              <a className="gray">Amigos</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-user-secret"></i>                             
                              </div>
                              <a className="gray">Amigos</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-user-secret"></i>                             
                              </div>
                              <a className="gray">Amigos</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-user-ninja"></i>
                              </div>
                              <a className="gray">Edad</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-user-astronaut"></i>
                              </div>
                              <a className="gray">Estudios </a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-user-astronaut"></i>
                              </div>
                              <a className="gray">Idiomas</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-user-astronaut"></i>
                              </div>
                              <a className="gray">Perfil de linkedin </a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-user-astronaut"></i>
                              </div>
                              <a className="gray">Hobbies </a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-user-astronaut"></i>
                              </div>
                              <a className="gray">Conocimientos extras </a>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
               </div>
            </div>
         </div>
      </>
     );
}

export  {Amigos};