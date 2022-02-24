import './Inicio.css';
import { useState } from 'react';
import {Nav}from "../Nav/Nav"





function Inicio({quotesDB}) {

const [quotes,setInicio] = useState(quotesDB)

const [loading,setLoading] = useState(false)

const user = JSON.parse(localStorage.getItem("USER"))
const foto= user.foto_perfil
console.log (foto)


const onSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    let newQuote ={
        id: quotes.length + 1,
        //author:event.target[0].value,
        quote:event.target[0].value
    }

    setLoading(true)
    setTimeout(()=> {
        setInicio([...quotes,newQuote])
        event.target.reset()
        setLoading(false)
    },3000)

    
}

  return (
   <>
      <Nav />
      <div className='container'>
         <div className='row '>
               <div className='col-sm-3'>
                  <div className="card gray" >
                     <div className="card-body">
                        
                        <ul className="list-group">
                           <li className="list-group-item">
                              <div className="d-flex justify-content-start flex-wrap align-items-center">
                                 <div>
                                 <img className= "logoTecler" src={require("../img/PabloPicasso.jpg")} />                           
                                 </div>
                                 <a className="gray" href='/portada'>{user.nombres} {user.apellidos}</a>
                              </div>
                           </li>
                           <li className="list-group-item">
                              <div className="d-flex justify-content-start flex-wrap align-items-center">
                                 <div className="circle-icons color_amigos">
                                    <i className="fas fa-user-friends"></i>
                                 </div>
                                 <a className="gray" href='/amigos'>Amigos</a>
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
                     <div className="card perfil sub " >
                           <div className="card-body">
                           
                              <div className="card-body">
                              <div className="col-lg-12 offset-md-12">
                              <div className="card">
                           <div className="card-body">
                           <form onSubmit={onSubmit} >
                              {/*<div className="mb-3">
                                 <label className="form-label">Author:</label>
                                 <input type="text" className="form-control" placeholder="author name" required/>
                              </div>*/}
                              <div id="output"></div>
                              <div className="mb-3">
                                 {/*<label className="form-label">Quote:</label>*/}
                                 <textarea className="form-control"  rows="4" placeholder= "Que estas pensando:" required></textarea>
                              </div>
                              { !loading && (
                                 <div className="d-grid gap-2">
                                       <button className="btn btn-secondary btn-block">publicar</button>
                                    </div>
                              )}
                           </form>

                           { loading && (
                              <div className="d-grid gap-2">
                              <button className="btn btn-secondary" type="button" disabled>
                                 <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                 Publicando ...
                              </button>
                           </div>
                           )}


                           </div>
                     </div>
                  </div>    
                              </div>
                           </div>
                     </div>
                  </div>
                  <div className="d-flex justify-content-start flex-wrap">
                     <div className="card perfil " >
                           <div className="card-body">
                              
                              <div className="card-body">
                              {
                                 quotes.map(q =>(
                                 <div key={q.id} className="col-lg-12">
                                 <div className="card">
                                       <div className="card-body">
                                          {/*<h5 className="card-title">{q.author}</h5>*/}
                                          <p className="card-text quote-text"><i>"{q.quote}"</i></p>
                                       </div>
                                       </div>
                                 </div>

                                 ))
                              }      
                              </div>
                              
                           </div>
                     </div>
                  </div>
            </div>
            <div className='col-sm-3'>
                  <div className="card gray" >
                     <div className="card-body">
                        
                     <ul className="list-group">
                           <li className="list-group-item">
                              <div className="d-flex justify-content-start flex-wrap align-items-center">
                                 <div className="circle-icons color_amigos">
                                    <i className="fas fa-user-secret"></i>                             
                                 </div>
                                 <a className="gray">Gaby Ludewig</a>
                              </div>
                           </li>
                           <li className="list-group-item">
                              <div className="d-flex justify-content-start flex-wrap align-items-center">
                                 <div className="circle-icons color_amigos">
                                    <i className="fas fa-user-ninja"></i>
                                 </div>
                                 <a className="gray">Tonny</a>
                              </div>
                           </li>
                           <li className="list-group-item">
                              <div className="d-flex justify-content-start flex-wrap align-items-center">
                                 <div className="circle-icons color_amigos">
                                    <i className="fas fa-user-astronaut"></i>
                                 </div>
                                 <a className="gray">Isac Vega</a>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
                        
                  
                  <div className="card gray" >
                     <div className="card-body">
                     <h5 className="card-title">sugerencias de amistad</h5>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons color_amigos">
                                 <i className="fas fa-user-astronaut"></i>
                              </div>
                              <a className="gray">Lucaz Roa</a>
                           </div>
                           <button className="btn btn-secondary btn-block">Agregar</button>{"  "}
                           <button className="btn btn-dark btn-block">Eliminar</button> 
                        </li>
                        
                                    

                     </div>
                  </div>
               </div>

         </div>
         </div>
   </>
  );
}

export {Inicio};