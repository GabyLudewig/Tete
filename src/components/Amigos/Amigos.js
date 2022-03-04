import './Amigos.css';
import { Nav } from "../Nav/Nav"
import React from 'react';
import { List } from 'reactstrap';
import { apiList } from "../../api/api"
import { NavLink, Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";


function Amigos() {

   const [token] = useLocalStorage("TOKEN", {});
   const navigate = useNavigate();

   useEffect(() => {
      if (!token.token) {
         navigate("/login");
      }
   }, []);

   const user = JSON.parse(localStorage.getItem("USER"))

   const [lista, setLista] = React.useState([])

   React.useEffect(() => {
      newList()

   }, [])

   const newList = async () => {

      const data = await apiList(user)
      let dataParse = {}
      let final = []

      for (let i = 0; i < data[0].length; i++) {
         dataParse = data[0][i][0][0]
         final.push(dataParse)
      }

      setLista(final)


   }

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
                                 <img className="logoTecler" src={require("../img/PabloPicasso.jpg")} />
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
                        <ul>
                           {
                              lista.map(item => (
                                 <li key={item.id}>
                                    <Link className="gray" to={`../Portada/${item.id}`}> {item.nombres} {item.apellidos}
                                    </Link>

                                 </li>

                              ))
                           }
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export { Amigos };