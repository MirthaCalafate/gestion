import React from "react";
import '../../styles/paginaLinks.css'

const PaginaLinks = () => {
  return (
    <div style={{ marginTop: 90 }}>
      <h2 className="text-center text-primary mb-5">Pagina de Links</h2>
      <div className="container">
        <div className="row">
          <div className="col">
            <ul>
              <h2>Obras Sociales</h2>
              <li>
                <a
                  href="https://menu.traditum.com/View/Login.aspx"
                  target="_blank" rel="noopener noreferrer"
                >
                  Traditum{" "}
                </a>
              </li>
              <li>
                <a href="https://www.osde.com.ar/index.html#!homepage.html" target="_blank" rel="noopener noreferrer">
                  Osde
                </a>
              </li>
              <li>
                <a href="http://validador.iosfa.gob.ar" target="_blank" rel="noopener noreferrer">
                  Iosfa
                </a>
              </li>
              <li>
                <a
                  href="https://swissmedical.com.ar/prestadores/home/"
                  target="_blank" rel="noopener noreferrer"
                >
                  Swiss Medical
                </a>
              </li>
            </ul>
            <ul>
              <h2>Interes General</h2>
              <li>
                <a href="http://www.legisalud.gov.ar/" target="_blank" rel="noopener noreferrer">
                  Legisalud - Legislación en Salud de la República Argentina
                </a>
                <p>
                  Portal especializado en Legislación en Salud de la República
                  Argentina. Contiene normas sanitarias nacionales, provinciales
                  y municipales a texto completo.
                </p>
              </li>
              <li>
                {" "}
                <a href="https://www.argentina.gob.ar/salud" target="_blank" rel="noopener noreferrer">
                  Ministerio de Salud de la Nación
                </a>
              </li>
              <li>
                <a
                  href="https://www.santacruz.gob.ar/boletin-oficial/#gsc.tab=0"
                  target="_blank" rel="noopener noreferrer"
                >
                  Boletin Oficial Provincia de Santa Cruz
                </a>
              </li>
              <li>
                <a href="https://consejomedicosc.org.ar/" target="_blank" rel="noopener noreferrer">
                  Consejo Médico de la Provincia de Santa Cruz
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <h2>Plan Sumar</h2>
              <li>
                <a
                  href="https://micuilonline.com.ar/averiguar-cuil-cuit"
                  target="_blank" rel="noopener noreferrer"
                >
                  Constancia de CUIL
                </a>
              </li>
              <li>
                <a
                  href="https://servicioswww.anses.gob.ar/censite/index.aspx"
                  target="_blank" rel="noopener noreferrer"
                >
                  Anses - Certificación negativa
                </a>
              </li>
              <li>
                <a
                  href="http://servicioswww.anses.gob.ar/ooss2/"
                  target="_blank" rel="noopener noreferrer"
                >
                  Consulta de Beneficiarios con Obra Social (CODEM)
                </a>
              </li>
            </ul>
            <ul>
              <h2>Docencia</h2>
              <li>
                <a href="https://bvs.salud.gob.ar/" target="_blank" rel="noopener noreferrer">
                  Biblioteca virtual en Salud
                </a>
              </li>
              <li>
                <a
                  href="http://www.revistasam.com.ar/index.php/RAM"
                  target="_blank" rel="noopener noreferrer"
                >
                  Revista Argentina de Medicina
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaLinks;
