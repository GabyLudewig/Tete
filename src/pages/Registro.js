import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { apiRegistro } from "../api/api";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { GlobalContext } from "../context/GlobalContext";

function Registro() {
  const {setSesion} = useContext(GlobalContext);
  const navigate = useNavigate();
  const [loadingR, setLoadingR] = useState(false);
  const [errorR, setErrorR] = useState({ errorR: false, errorRMessage: "ErrorR" });
  const [user, saveUser] = useLocalStorage("USER", {});
  const [token, saveToken] = useLocalStorage("TOKEN", {});

    const registro = async (event) => {
      event.preventDefault();
      let newRegistro = {
        email: event.target[0].value,
        nombre: event.target[1].value,
        apellido: event.target[2].value,
        password: event.target[3].value,
      };
    setLoadingR(true);
  
    let registroResult = await apiRegistro(newRegistro);
    if(registroResult){
      setLoadingR(false);
  
      if(registroResult.errorR){
        setErrorR({
          errorRMessage: registroResult.errorR,
          errorR: true,
        });
      }
      if (registroResult.token) {
        setErrorR({ ...errorR, errorR: false });
        saveToken({ token: registroResult.token });
        let data = registroResult.token.split(".");
        let userData = window.atob(data[1]);
        saveUser(userData)
        setSesion(userData)
        navigate("/");
      }
      }
    }

    return (
        <div className="container">
          <br />
          <div className="row">
            
            <div className="col-lg-6 ">
              <div className="card" >
                <div className="card-body">
                  <h1 className="card-title">Nuevo Tecler?</h1>
                  {errorR.errorR && (
                    <div className="alert alert-danger text-center" role="alert">
                      <strong>{errorR.errorRMessage}</strong>
                    </div>
                  )}
                  <form onSubmit={registro}>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingREmail"
                        placeholder="Email"
                        defaultValue={user.email}
                        autoFocus
                        required
                      />
                      <label htmlFor="floatingREmail">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="nombre"
                        className="form-control"
                        id="floatingRNombre"
                        placeholder="Nombre"
                        defaultValue={user.nombre}
                        autoFocus
                        required
                      />
                      <label htmlFor="floatingRNombre">Nombre</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="apellido"
                        className="form-control"
                        id="floatingRApellido"
                        placeholder="Apellido"
                        defaultValue={user.apellido}
                        autoFocus
                        required
                      />
                      <label htmlFor="floatingRApellido">Apellido</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingRPassword"
                        placeholder="Password"
                        required
                      />
                      <label htmlFor="floatingRPassword">Password</label>
                    </div>
                    <br />
                    {!loadingR && (
                      <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit">
                          Registrate
                        </button>
                      </div>
                    )}
                  </form>
    
                  {loadingR && (
                    <div className="text-center">
                      <div className="spinner-grow text-primary" role="status">
                        <span className="visually-hidden">LoadingR...</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export { Registro };
    
    
    