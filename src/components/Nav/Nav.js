import './Nav.css';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";


function Nav() {

  const [token, saveToken] = useLocalStorage("TOKEN", {});
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
    saveToken({});
    
  };
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top ">
   <div className="container-fluid">
   
     <a className="navbar-brand" href="/home" ><img className= "logoTete" src={require("../img/tete.jpg")} /></a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <form className="d-flex">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <button className="btn btn-outline-success" type="submit">Search</button>
       </form>
       <ul className="navbar-nav position-absolute start-50">
         
         <li className="nav-item">
           <NavLink className="nav-link "  to="/home"><i className="fas fa-house-user"></i></ NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link" to="/curso"><i className="fas fa-graduation-cap"></i></  NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link" to="/ayuda" ><i className="fas fa-question-circle"></i>
           </  NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link "  to="/portada"><i className="fas fa-house-user"></i></ NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link "  to="/amigos"><i className="fas fa-house-user"></i></ NavLink>
         </li>
         
       </ul>
     
       <ul className="navbar-nav position-relative start-50">
       <li className="nav-item dropdown">
           <a className="nav-link dropdown" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <i className="fas fa-bell"><span className="position-absolute top start-70 translate-middle badge border border-light rounded-circle bg-danger p-1"><span className="visually-hidden">unread messages</span></span></i>
           </a>
           <ul className="dropdown-menu  p-4 text-muted" aria-labelledby="navbarDropdown">
             <li><a className="dropdown-item" href="#">Action</a></li>
             <li><a className="dropdown-item" href="#">Another action</a></li>
             
             <li><a className="dropdown-item" href="#">Something else here</a></li>
           </ul>
         </li>
         <ul className="navbar-nav">
              <li className="nav-item">
                <span className="nav-link" onClick={logout}>
                  {" "}
                  Log Out <i className="fas fa-sign-out-alt"></i>{" "}
                </span>
              </li>
            
          </ul>
       </ul>

       
     </div>
   </div>
 </nav>
  );
}

export {Nav};