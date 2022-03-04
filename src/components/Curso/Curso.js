import './Curso.css';
import {Nav}from "../Nav/Nav"
const user = JSON.parse(localStorage.getItem("USER"))


function Curso() {
   return (   
      <>
       <Nav />
         <div>
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
                  </div>

                  
                  
                  <div className="col-lg-7" >
                     
                        <div className="card gray ">
                           <div className="card-body">
                           <input className="form-control " type="text" placeholder="Nuevo Curso" aria-label="Disabled input example" disabled/>
                              <br/>
                              <form onSubmit>
                                 <div className="form-floating mb-3">
                                    <input  className="form-control " tabIndex={1} />
                                    <label className="label_black">Nombre del Curso</label>
                                 </div>
                                 <div className="form-floating">
                                    <input  className="form-control" type="date" id="fecha_nac" tabIndex={3} />
                                    <label className="label_black" >Fecha de Realizacion</label>
                                 </div>
                                 <br/>
                                 <div className="form-floating">
                                    
                                 <input className='form-control' type="number" />
                                 <label className="label_black">Cursos Realizados</label>
                                 </div>
                                 <br/>
                                 <button type="button" className="btn btn-secondary">Enviar</button>
                              </form>
                           </div>
                        </div>
                     
                  </div>
               </div>
            </div>
         </div>
      </>
    );
}



export {Curso};