import './Nav.css';
import { NavLink } from "react-router-dom";

function Nav() {
  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top ">
   <div className="container-fluid">
     <a className="navbar-brand" href="#">TeTe</a>
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
           <NavLink className="nav-link "  to="/"><i className="fas fa-house-user"></i></ NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link" to="/curso"><i className="fas fa-graduation-cap"></i></  NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link" to="/ayuda" ><i className="fas fa-question-circle"></i>
           </  NavLink>
         </li>
         
       </ul>
       <ul className="navbar-nav position-relative start-50">
       <li className="nav-item dropdown">
           <a className="nav-link dropdown" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <i className="fas fa-bell"><span class="position-absolute top start-70 translate-middle badge border border-light rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span></i>
           </a>
           <ul className="dropdown-menu  p-4 text-muted" aria-labelledby="navbarDropdown">
             <li><a className="dropdown-item" href="#">Action</a></li>
             <li><a className="dropdown-item" href="#">Another action</a></li>
             
             <li><a className="dropdown-item" href="#">Something else here</a></li>
           </ul>
         </li>
       </ul>

       
     </div>
   </div>
 </nav>
  );
}

export {Nav};