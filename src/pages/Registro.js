import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { apiRegistro } from "../api/api";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { GlobalContext } from "../context/GlobalContext";

function Registro() {
  const {setSesion} = useContext(GlobalContext);
  const navigate = useNavigate();
  const [loadingR, setLoadingR] = useState(false);
  const [error, setError] = useState({ error: false, errorMessage: "Error" });
  const [user, saveUser] = useLocalStorage("USER", {});
  const [token, saveToken] = useLocalStorage("TOKEN", {});

    const registro = async (event) => {
      event.preventDefault();
      let newRegistro = {
        email: event.target[0].value,
        nombre: event.target[1].value,
        apellido: event.target[2].value,
        ciudad: event.target[3].value,
        pais: event.target[4].value,
        estudios: event.target[5].value,
        idiomas: event.target[6].value,
        conocimientos_extra: event.target[7].value,
        linkedin: event.target[8].value,
        hobbies: event.target[9].value,
        fecha_nac: event.target[10].value,
        password: event.target[11].value,
        
        

      };
    setLoadingR(true);
  
    let registroResult = await apiRegistro(newRegistro);
    if(registroResult){
      setLoadingR(false);
  
      if(registroResult.error){
        setError({
          errorMessage: registroResult.error,
          error: true,
        });
      }
      if (registroResult.token) {
        setError({ ...error, error: false });
        saveToken({ token: registroResult.token });
        let data = registroResult.token.split(".");
        let userData = window.atob(data[1]);
        saveUser(userData)
        setSesion(userData)
        navigate("/");
      }
      if (registroResult.details) {
        setError({
          errorMessage: "Password fuera de parametros",
          error: true,
        });
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
                  {error.error && (
                    <div className="alert alert-danger text-center" role="alert">
                      <strong>{error.errorMessage}</strong>
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
                    <div className="form-floating mb-3">
                      <input
                        type="ciudad"
                        className="form-control"
                        id="floatingRciudad"
                        placeholder="ciudad"
                        defaultValue={user.ciudad}
                        autoFocus
                        
                      />
                      <label htmlFor="floatingRApellido">ciudad</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="pais"
                        className="form-control"
                        id="floatingRpais"
                        placeholder="pais"
                        defaultValue={user.pais}
                        autoFocus
                        
                      />
                      <label htmlFor="floatingRApellido">pais</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="estudios"
                        className="form-control"
                        id="floatingRestudios"
                        placeholder="algo"
                        defaultValue={user.estudios}
                        autoFocus
                        
                      />
                      <label for="disabledSelect" class="form-label">estudios</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="idiomas"
                        className="form-control"
                        id="floatingRidiomas"
                        placeholder="idiomas"
                        defaultValue={user.idiomas}
                        autoFocus
                        
                      />
                      <label htmlFor="floatingRApellido">Idiomas</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="conocimientos"
                        className="form-control"
                        id="floatingRconocimientos"
                        placeholder="otros conocimientos"
                        defaultValue={user.conocimientos_extra}
                        autoFocus
                        
                      />
                      <label htmlFor="floatingRApellido">otros conocimientos</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="linkedin"
                        className="form-control"
                        id="floatingRlinkedin"
                        placeholder="linkedin"
                        defaultValue={user.linkedin}
                        autoFocus
                        
                      />
                      <label htmlFor="floatingRApellido">Perfil de linkedin</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="hobbies"
                        className="form-control"
                        id="floatingRhobbies"
                        placeholder="hobbies"
                        defaultValue={user.hobbies}
                        autoFocus
                        
                      />
                      <label htmlFor="floatingRApellido">Hobbies</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        
                        className="form-control" type="date"  
                        id="floatingRedad"
                        placeholder="edad"
                        defaultValue={user.fecha_nac}
                        autoFocus
                        
                      />
                      <label htmlFor="floatingRApellido">Fecha de nacimiento</label>
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
                        <button className="btn btn-secondary" type="submit">
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
    
    
    