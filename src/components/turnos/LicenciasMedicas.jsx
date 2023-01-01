import { useState, useEffect, useContext } from "react";
import { DataContext } from "../DataContext";
import axios from "axios";

const LicenciasMedicas = () => {

  const [datos, setDatos] = useState([]);
  const [tablaDatos, setTablaDatos] = useState([]);
  const { baseURL } = useContext(DataContext);
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    /* setcurrentPage(1); */
    filtrar(e.target.value);
  };
  const filtrar = (terminoBusqueda) => {
    let resultadosBusqueda = tablaDatos.filter((elemento) => {
      if (
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      } 
    });
    setDatos(resultadosBusqueda);
  };

  useEffect(() => {
    const cargarLista = async (e) => {
      try {
        const url = `${baseURL}/licencias`;
        const response = await axios.get(url);
        setDatos(response.data);
        setTablaDatos(response.data);
      } catch (e) {
        console.log(e.error);
      }
    };
    cargarLista();
  }, [baseURL]);

  return (
    <>
      <div className="container">
        <div className="row mb-5">
          <div className="col">
            <input
              className="form-control inputBusqueda"
              type="text"
              value={busqueda}
              placeholder="Ingrese el nombre del Profesional"
              aria-label="default input"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row g-2">
          {datos.map((item) => {
            return (
              <div className="col-3">
                <div key={item.id} className="card">
                  <div className="card-body text-bg-primary">
                    <h4 className="card-title text-center bg-white text-primary">{item.nombre}</h4>
                    <h5 className="card-text">Desde:  {item.desde}</h5>
                    <h5 className="card-text">Hasta:  {item.hasta}</h5>                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default LicenciasMedicas