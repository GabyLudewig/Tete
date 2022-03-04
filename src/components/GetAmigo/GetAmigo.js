import "./GetAmigo.css";
import { getAmigo } from "../../redux/actions/amigo";
import { connect } from "react-redux";
import React from 'react';
import { NavLink, Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    amigo: state.amigoReducer.amigo,
    loading: state.amigoReducer.loading,
    error: state.amigoReducer.error,
    nombreAmigo: state.amigoReducer.nombreAmigo,
  };
};

function GetAmigo({ amigo, loading, error, amigoAmigo, getAmigo }) {

  const printAmigo = (event) => {
    event.preventDefault();
    getAmigo(event.target.value);
    
  };
  let parsedAmigo = amigo[0][0]
  console.log (parsedAmigo)

    return (
    <div className="card">
      <div className="card-body">
        <h3 className="gray">Busca un Amigo:</h3>
        <input
          className="form-control"
          type="text"
          onChange={printAmigo}
          placeholder="Ingresa Inombre del amigo"
          value={amigoAmigo}
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
                              parsedAmigo.map(item => (
                                <li key={item.id}>
                                <Link className="gray" to={`../Portada/${item.id}`}> Nombre: {item.nombres} {item.apellidos}  id: {item.id}
                                </Link>

                                 </li>

                              ))
                           }
                        </ul>
            
          </div>
       )}
        <br />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, { getAmigo })(GetAmigo);
