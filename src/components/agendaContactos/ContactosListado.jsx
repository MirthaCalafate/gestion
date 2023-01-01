import axios from "axios";
import { HiOutlineTrash } from "react-icons/hi";
import { TfiPencilAlt } from "react-icons/tfi";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../DataContext";
import Pagination from '../Pagination'


const ContactosListado = () => {

  const botonEvento ={
    backgroundColor: "transparent",
    border:  "transparent"
  }
  
  const {baseURL, cargarDatos, setCargarDatos,
    setID,
    setApellido,
    setNombre,
    setCelular,
    setSector,
    setInterno} = useContext(DataContext);

  const [datos, setDatos] = useState([]);
  const [tablaDatos, setTablaDatos] = useState([]);

  const [productsPerPage, setproductsPerPage] = useState(15);
  const [currentPage, setcurrentPage] = useState(1);
  const totalProducts = datos.length;
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const [busqueda, setBusqueda] = useState("");
  //   BUSCAR
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    setcurrentPage(1);
    filtrar(e.target.value);
  }
  const filtrar = (terminoBusqueda) => {
    let resultadosBusqueda = tablaDatos.filter((elemento)=>{
      if(elemento.apellido.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        elemento.sector.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      } return elemento;
    });
    setDatos(resultadosBusqueda);
    console.log(setproductsPerPage);
  }

  
  const activarFormActualizar = (valor) => {
    document.getElementById("btnAgregar").disabled = !valor;
    document.getElementById("formAgenda").disabled = valor;
    document.getElementById("btnActualizar").hidden = valor;
    document.getElementById("btnActualizar").disabled = valor;
    document.getElementById("btnGuardar").hidden = !valor;
    document.getElementById("btnCancelar").hidden = valor;
    document.getElementById("btnCancelar").disabled = valor;
  }
  const actualizarContacto = (e, id, apellido, nombre, celular, sector, interno ) => {
    e.preventDefault();
    setID(id)
    setApellido(apellido);
    setNombre(nombre);
    setCelular(celular);
    setSector(sector);
    setInterno(interno);
  }
  

  const borrarContacto = (e, id) => {
    e.preventDefault();
    const datosURL = `${baseURL}/agenda/${id}`;
      axios
        .delete(datosURL)
        .then((response) => {
          console.log(response.data);
        setCargarDatos(true);
        })
        .catch((error) => console.log(error));
  }

  useEffect(() => {
    const cargarLista = async (e) => {
      try {
        const url =  `${baseURL}/agenda`;
        const response = await axios.get(url);
        setDatos(response.data);
        setTablaDatos(response.data);
        setCargarDatos(false);
      } catch (e) {
        console.log(e.error);
      }
    };
    cargarLista();
  }, [setCargarDatos, cargarDatos, baseURL]);

  return (
    <div className="container-fluid table-hover table-responsive">
      <h2 className="text-center text-primary mb-5">Listado de contactos</h2>
      <div className="row">
        <div className="col-4">
          <input
            className="form-control"
            type="text"
            value={busqueda}
            placeholder="Ingrese texto a buscar"
            aria-label="default input"
            onChange={handleChange}
          />
        </div>
        <div className="col-8">
          <Pagination 
            productsPerPage = {productsPerPage}
            currentPage = {currentPage}
            setcurrentPage = {setcurrentPage}
            totalProducts = {totalProducts}
          />
        </div>
      </div>
      {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
        
      </div>   */}    
      <table className="table table-bordered table-striped table-primary table-hover">
        <thead>
          <tr>
            {/* <th scope="col">id</th> */}
            <th scope="col"><h5>Apellido</h5></th>
            <th scope="col"><h5>Nombre</h5></th>
            <th scope="col"><h5>Celular</h5></th>
            <th scope="col"><h5>Sector</h5></th>
            <th scope="col"><h5>Interno</h5></th>
            <th scope="col"><h5>Modificar</h5></th>
            <th scope="col"><h5>Borrar</h5></th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item) => {
            return (
              <tr key={item.id}>
                {/* <td>{item.id}</td> */}
                <td>{item.apellido}</td>
                <td>{item.nombre}</td>
                <td>{item.celular}</td>
                <td>{item.sector}</td>
                <td>{item.interno}</td>
                <td className="text-center">
                  <button 
                    style={botonEvento}
                    onClick={(e) => {activarFormActualizar(false)
                      actualizarContacto(e, item.id, item.apellido, item.nombre, item.celular, item.sector, item.interno)
                      }}
                  >
                    <TfiPencilAlt size="20px" color="darkBlue"/>
                  </button>
                </td>
                <td className="text-center">
                  <button 
                    style={botonEvento}
                    onClick={(e) => borrarContacto(e, item.id)}
                  >
                    <HiOutlineTrash size="20px" color="red"/>
                  </button>
                </td>
              </tr>
            );
          }).slice(firstIndex, lastIndex)} 
        </tbody>
      </table>
    </div>
  );
};

export default ContactosListado;
