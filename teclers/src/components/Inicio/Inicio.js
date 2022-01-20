//import { useState } from 'react';
//import { getPokemon } from '../../api/api';

import { Quotes } from '../Quotes/Quotes';
import './Inicio.css';

function Inicio(props) {
    const onSearchTodoValue=(event)=>{
        console.log(event.target.value)
    }



    

  return (
<div>
    
    <div className='container-fluid'>
        <div className='row '>
            <div className='col-sm-3'>
               <div className="card gray" >
                  <div className="card-body">
                     
                     <ul className="list-group">
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons color_usuario">
                                 <i className="fas fa-user-circle"></i>                            
                              </div>
                              <a className="gray">Juan Manuel Hrenandez Gutierrez</a>
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

            
            <div className="col-lg-6" >
              
              <div className="d-flex justify-content-start flex-wrap">
                 <div className="card contenedor_historia ">
                    <div className="card historia " >
                       <img src="..." className="card-img-top" alt="..."/>
                     </div>
                     <div className="card historia" >
                       <img src="..." className="card-img-top" alt="..."/>
                     </div>
                     <div className="card historia" >
                       <img src="..." className="card-img-top" alt="..."/>
                     </div>
                     <div className="card historia" >
                       <img src="..." className="card-img-top" alt="..."/>
                     </div>
                 </div>
              </div>
              
              <div className="d-flex justify-content-start flex-wrap">
                    <div className="card perfil sub " >
                        <div className="card-body">
                        
                            <div className="card-body">
                              <p className="card-text">Juan Manuel Hernandez Gutierrez</p>     
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-start flex-wrap">
                    <div className="card perfil " >
                        <div className="card-body">
                            
                            <div className="card-body">
                              <p className="card-text">Juan Manuel Hernandez Gutierrez</p>     
                            </div>
                            <Quotes/>
                        </div>
                    </div>
                </div>
           </div>
           <div className='col-sm-3'>
               <div className="card gray" >
                  <div className="card-body">
                     
                  <ul class="list-group">
                        <li class="list-group-item">
                           <div class="d-flex justify-content-start flex-wrap align-items-center">
                              <div class="circle-icons color_amigos">
                                 <i class="fas fa-user-secret"></i>                             
                              </div>
                              <a class="gray">Gaby Ludewig</a>
                           </div>
                        </li>
                        <li class="list-group-item">
                           <div class="d-flex justify-content-start flex-wrap align-items-center">
                              <div class="circle-icons color_amigos">
                                 <i class="fas fa-user-ninja"></i>
                              </div>
                              <a class="gray">Tonny</a>
                           </div>
                        </li>
                        <li class="list-group-item">
                           <div class="d-flex justify-content-start flex-wrap align-items-center">
                              <div class="circle-icons color_amigos">
                                 <i class="fas fa-user-astronaut"></i>
                              </div>
                              <a class="gray">Isac Vega</a>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
                     
               
               <div className="card gray" >
                  <div className="card-body">
                  <h5 class="card-title">sugerencias de amistad</h5>
                     <li class="list-group-item">
                        <div class="d-flex justify-content-start flex-wrap align-items-center">
                           <div class="circle-icons color_amigos">
                              <i class="fas fa-user-astronaut"></i>
                           </div>
                           <a class="gray">Lucaz Roa</a>
                        </div>
                     </li>
                     <button class="add">
                        Agregar
                     </button>
                     <button class="eliminar">
                        Eliminar
                     </button>

                  </div>
               </div>
            </div>

        </div>
      </div>
   </div>
   
  );
}

export {Inicio};