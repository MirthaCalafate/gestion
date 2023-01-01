import "../styles/menu.css";
import { NavLink } from "react-router-dom";
import logoSAMIC from "../images/logoSAMIC.png";


const Menu = () => {


  return (
    <>
    <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-primary mb-5">
      <div className="container-fluid d-flex justify-content-between">
        <div className="navbar-brand navBrand">
          <img className="imgNavLogo" src={logoSAMIC} alt="logo" />
          <p style={{marginLeft: "15px"}}>Gestion de Pacientes</p>
        </div>
        <div className="navMenu">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item navItem">
                <NavLink to = "/PaginaInicio"
                  className="nav-link"
                  aria-current="page">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item navItem">
                <NavLink to = "/PaginaTurnos"
                  className="nav-link"
                  aria-current="page">
                  Turnos
                </NavLink>
              </li>
              <li className="nav-item navItem">
                <NavLink to = "/PaginaAgenda"  
                  className="nav-link" >
                  Agenda
                </NavLink>
              </li>
              <li className="nav-item navItem">
                <NavLink to = "/PaginaOS" className="nav-link">
                  Obra Sociales
                </NavLink>
              </li>
              <li className="nav-item navItem">
                <NavLink to = "/PaginaLinks" className="nav-link">
                  Links
                </NavLink>
              </li>
              <li className = "nav-item navItem">
                <NavLink to = "/PaginaProcesos"    className= "nav-link" >
                  Procesos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
        </div>
      </div>
    </nav>
  </>
  );
}

export default Menu;