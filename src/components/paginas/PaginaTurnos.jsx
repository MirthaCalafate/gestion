import React from "react";
import "../../styles/paginaTurnos.css";
import LicenciasMedicas from "../../components/turnos/LicenciasMedicas";
import TurnosEspecialidad from "../../components/turnos/TurnosEspecialidad";

const PaginaTurnos = () => {
  return (
    <>
      {/* <div >
        <h2 className="text-center text-primary mb-5">Pagina de Turnos</h2>
      </div> */}
      <div className="container nav-content" style={{ marginTop: 100 }}>
        <ul className="nav nav-tabs">
          <li className="active">
            <a href="#tab1" data-toggle="tab" className="li-a">
              Turnos por Especialidad
            </a>
          </li>
          <li>
            <a href="#tab2" data-toggle="tab" className="li-a">
              Licencias de los Profesionales
            </a>
          </li>
          <li>
            <a href="#tab3" data-toggle="tab" className="li-a">
              Medicos Itinerantes
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="tab1">
            <TurnosEspecialidad />
          </div>
          <div className="tab-pane" id="tab2">
            <LicenciasMedicas />
          </div>
          <div className="tab-pane" id="tab3">
            <h5>Medicos Itinerantes</h5>
            <h4>
              Los turnos de los médicos Itinerantes se anotan en lista de espera
              de Sigheos con pedido médico sin excepción.
            </h4>
            <ul>
              <li>Reumatologia Infantil</li>
              <li>Endocrinologia Infantil</li>
              <li>Gastroenterólogo Infantil</li>
              <li>Neurologo Infantil</li>
              <li>Neurologo Adulto</li>
              <li>Oncologia</li>
              <li>Reumatología Adultos</li>
              <li>Genetista</li>
              <li>Traumatologo</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaginaTurnos;