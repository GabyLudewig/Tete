import React from  'react'
import { useParams } from 'react-router-dom'
import {Nav}from "../Nav/Nav"
import { apiPerfil } from "../../api/api"

function Perfil () {

    const id = useParams()
    console.log(id)

    const [amigo, setAmigo] = React.useState([])

   React.useEffect(() => {
      newAmigo()

   }, [])

   const newAmigo = async () => {

      const data = await apiPerfil(id)
      let dataParse = data[0][0]
      setAmigo(dataParse)
      console.log(dataParse)

     
   }

    return(

        <>
        <Nav/>
        <div className='container'>
         <div className='row '>
            <div className="col-lg-12" >
               <div className="card contenedor_historia ">
               <div class="card  portada ">

                  <img className= "picazzo" src={require("../img/picassoo.jpg")} /> 
               </div>
               <div className="card-body">
                     <ul className="list-group">
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <img className= "logoTecler" src={require("../img/PabloPicasso.jpg")} />
                              <a className="gray">{amigo.nombres} {amigo.apellidos}</a>
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
                                <i class="fas fa-globe-americas"></i>                            
                              </div>
                              <a className="gray">Ciudad y pais de residencia: {amigo.ciudad} {amigo.pais}</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                <i class="fas fa-calendar-alt"></i>
                              </div>
                              <a className="gray">Fecha de Nacimiento: {amigo.fecha_nac}</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                              <i class="fas fa-user-graduate"></i>
                              </div>
                              <a className="gray">Estudios: {amigo.estudios}</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                              <i class="fas fa-language"></i>
                              </div>
                              <a className="gray">Idiomas: {amigo.idiomas}</a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                <i class="fas fa-address-card"></i>
                              </div>
                              <a className="gray">Perfil de linkedin: {amigo.linkedIn} </a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                <i class="far fa-futbol"></i>
                              </div>
                              <a className="gray">Hobbies: {amigo.hobbies} </a>
                           </div>
                        </li>
                        <li className="list-group-item">
                           <div className="d-flex justify-content-start flex-wrap align-items-center">
                              <div className="circle-icons white-back">
                                <i class="fas fa-lightbulb"></i>
                              </div>
                              <a className="gray">Conocimientos extras: {amigo.conocimientos_extra} </a>
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
                           defaultValue={amigo.recomendacion}
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
           
            
         </div>
      </div>
    </>
    )
}

export default Perfil