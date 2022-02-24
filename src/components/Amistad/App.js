import React from "react";
import {Nav}from "../Nav/Nav"

import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  
} from "reactstrap";

const data = [
  { id: 1, Persona: "Lupita Juarez",  },
  { id: 2, Persona: "aldo Castillo",  },
  { id: 3, Persona: "Damian Rodriguez",  },
  { id: 4, Persona: "Gaby Ludewig", },
  { id: 5, Persona: "Isaac Vega "},
  { id: 6, Persona: "Jorge Hernandez" },
];

class App extends React.Component {
  state = {
  data: data,
  modalActualizar: false,
  modalInsertar: false,
  form: {
  id: "",
  Persona: "",
  
  },
  };
  mostrarModalActualizar = (dato) => {
  this.setState({
  form: dato,
  modalActualizar: true,
  });
  };
  cerrarModalActualizar = () => {
  this.setState({ modalActualizar: false });
  };
  mostrarModalInsertar = () => {
  this.setState({
  modalInsertar: true,
  });
  };
  cerrarModalInsertar = () => {
  this.setState({ modalInsertar: false });
  };
  editar = (dato) => {
  var contador = 0;
  var arreglo = this.state.data;
  arreglo.map((registro) => {
  if (dato.id == registro.id) {
  arreglo[contador].Persona = dato.Persona;
  
  }
  contador++;
  });
  this.setState({ data: arreglo, modalActualizar: false });
  };
  eliminar = (dato) => {
  var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
  if (opcion == true) {
  var contador = 0;
  var arreglo = this.state.data;
  arreglo.map((registro) => {
  if (dato.id == registro.id) {
  arreglo.splice(contador, 1);
  }
  contador++;
  });
  this.setState({ data: arreglo, modalActualizar: false });
  }
  };
  insertar= ()=>{
  var valorNuevo= {...this.state.form};
  valorNuevo.id=this.state.data.length+1;
  var lista= this.state.data;
  lista.push(valorNuevo);
  this.setState({ modalInsertar: false, data: lista });
  }
  handleChange = (e) => {
  this.setState({
  form: {
  ...this.state.form,
  [e.target.name]: e.target.value,
  },
  });
  };
  render() {
  return (
  <>
  <Nav />
  <Container>
     
     <br />
     <Table primary>
        <thead >
           <tr>
              <th>ID</th>
              <th>Persona</th>
              
              <th>Acción</th>
           </tr>
        </thead>
        <tbody>
           {this.state.data.map((dato) => (
           <tr key={dato.id}>
              <td>{dato.id}</td>
              <td>{dato.Persona}</td>
              
              <td>
                 <Button
                    color="secondary"
                    onClick={() => this.mostrarModalActualizar(dato)}
                 >
                 Agregar
                 </Button>{" "}
                 <Button color="dark" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
              </td>
           </tr>
           ))}
        </tbody>
     </Table>
  </Container>
  
  
  </>
  );
  }
  }
export default App;
