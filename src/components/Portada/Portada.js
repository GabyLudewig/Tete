import './Portada';
import { save } from "../../redux/actions/portada";
import { connect } from "react-redux";
import {Nav}from "../Nav/Nav"

const mapStateToProps = (state) => {
  return {
    quotes: state.portadaReducer.quotes,
    loading: state.portadaReducer.loading,
  };
};

function Portada({ quotes, save, loading }) {
  const onSubmit = (event) => {
    event.preventDefault();
    let newQuote = {
      id: quotes.length + 1,
     // author: event.target[0].value,
      quote: event.target[0].value,
    };
    event.target.reset();
    save(newQuote);
  };

  const user = JSON.parse(localStorage.getItem("USER"))

  return (
   <>
     <Nav />
         <div className='container'>
         <div className='row '>
            <div className="col-lg-12" >
               <div className="card contenedor_historia ">
               <div class="card  portada mb-3">
                  <img src="..." class="card-img-top" alt="..."/>   
               </div>
               <div className="card-body">
                     <ul className="list-group">
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-user-secret"></i>                             
                              </div>
                              <a className="gray">{user.nombres} {user.apellidos}</a>
                           </div>
                        </li>
                        
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className='row '>
         <div className='col-sm-6'>
               <div className="card gray" >
                  <div className="card-body">
                     <ul className="list-group">
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-user-secret"></i>                             
                              </div>
                              <a className="gray">Ciudad y pais de residencia: {user.ciudad} {user.pais}</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-user-ninja"></i>
                              </div>
                              <a className="gray">Fecha de Nacimiento: {user.fecha_nac}</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                 <i className="fas fa-user-astronaut"></i>
                              </div>
                              <a className="gray">Estudios: </a>
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
                              <a className="gray">Perfil de linkedin: {user.linkedIn} </a>
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
               <div className="card gray" >
               <div className="card-body">
                     
                     <br/>
                     <form onSubmit>

                        
                        <div className="form-floating">
                        <textarea 
                        className="form-control"
                           id="floatingInput"
                           defaultValue={user.recomendacion}
                           autoFocus
                           required
                        />
                        <label htmlFor="floatingInput">Deja tu comentario aqui</label>
                        </div>
                        <br/>
                     
                        <button type="submit" className="btn btn-secondary">Enviar Comentario</button>
                     </form>
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
                                       {/*
                                       <div className="mb-3">
                                          <label className="form-label">Author:</label>
                                          <input type="text" className="form-control" placeholder="author name" required/>
                                       </div>
                                       */}
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
               <div className="card  " >
                  <div className="card-body">
                     <div className="card-body">
                        {
                        quotes.map(q =>(
                        <div key={q.id} className="col-lg-12">
                           <div className="card">
                              <div className="card-body">
                                 {/*
                                 <h5 className="card-title">{q.author}</h5>
                                 */}
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
      </div>
   </> 
  );
}

export default connect(mapStateToProps, { save })(Portada);