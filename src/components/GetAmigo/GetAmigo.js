import "./GetAmigo.css";
import { getAmigo } from "../../redux/actions/amigo";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { Nav } from "../Nav/Nav"
import { apiNewAmigo } from "../../api/api"

const mapStateToProps = (state) => {
  return {
    amigo: state.amigoReducer.amigo,
    loading: state.amigoReducer.loading,
    error: state.amigoReducer.error,
    nombreAmigo: state.amigoReducer.nombreAmigo,
  };
};
const user = JSON.parse(localStorage.getItem("USER"))


function GetAmigo({ amigo, loading, error, nombreAmigo, getAmigo }) {

  const printAmigo = (event) => {
    event.preventDefault();
    getAmigo(event.target.value);
    

  };
  // let  parsedAmigo = amigo[0][0]
  console.log(amigo[0])

  const onClick = async (id) => {
    console.log(id)
    let newAmigo = {
      id_1: user.id,
      id_2:id ,
  
    };
    const data = await apiNewAmigo(newAmigo)
    console.log(data)  
 }
 

  return (
    <>
      <Nav />
      <div className="card">
        <div className="card-body">
          <h3 className="gray">Busca un Amigo:</h3>
          <input
            className="form-control"
            type="text"
            onChange={printAmigo}
            placeholder="Ingresa nombre del amigo"
            value={nombreAmigo}
          />
          <br />

          {loading && (
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}

          {error && (
            <div className="alert alert-danger" role="alert">
              No es posible conectar a la API
            </div>
          )}

          {amigo[0] && !loading && (
            <div>
              <ul>
                {
                  amigo[0].map(item => (
                    <li key={item.id}>
                      <Link className="gray" to={`../Portada/${item.id}`}> Nombre: {item.nombres} {item.apellidos}  id: {item.id}
                      </Link>
                      <div className="card-body">
                                       <form >
                                          <div id="output"></div>
                                          <div className="mb-3">
                                          </div>
                                          {!loading && (
                                             <div className="d-grid gap-2">
                                                <button className="btn btn-secondary " onClick={() => onClick(item.id)} type='button'>Agregar</button>
                                             </div>
                                          )}
                                       </form>

                                       {loading && (
                                          <div className="d-grid gap-2">
                                             <button className="btn btn-secondary" type="button" disabled>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                Publicando ...
                                             </button>
                                          </div>
                                       )}


                                    </div>
                    </li>

                  ))
                }
              </ul>

            </div>
          )}
          <br />
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps, { getAmigo })(GetAmigo);
