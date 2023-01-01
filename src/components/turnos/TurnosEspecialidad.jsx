import "../../styles/paginaTurnos.css";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../DataContext";
import axios from "axios";

const TurnosEspecialidad = () => {
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
        elemento.especialidad
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
        const url = `${baseURL}/turnosEspecialidad`;
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
        <div className="row mb-3">
          <div className="col">
            <input
              className="form-control inputBusqueda"
              type="text"
              value={busqueda}
              placeholder="Ingrese nombre de la Especialidad"
              aria-label="default input"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row g-2">
          {datos.map((item) => {
            return (
              <div className="col-6">
                <div key={item.id} className="card">
                  <div className="card-body">
                    <h4 className="card-title text-bg-primary text-center p-2" >{item.especialidad}</h4>
                    <h5 className="card-text">{item.texto}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TurnosEspecialidad;
