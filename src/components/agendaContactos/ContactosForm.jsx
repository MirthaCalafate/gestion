import { useContext } from "react";
import axios from "axios";
import { DataContext } from "../DataContext";

const ContactosForm = () => {

  const desactivarBotones = () => {
    document.getElementById("btnAgregar").disabled = false;
    document.getElementById("btnGuardar").hidden = false;
    document.getElementById("btnCancelar").hidden = false;
    document.getElementById("btnActualizar").hidden = false;
    document.getElementById("btnGuardar").disabled = true;
    document.getElementById("btnCancelar").disabled = true;
    document.getElementById("btnActualizar").disabled = true;
  }

  const {
    baseURL, setCargarDatos,
    ID, setID,
    apellido, setApellido,
    nombre, setNombre,
    celular, setCelular,
    sector, setSector,
    interno, setInterno} = useContext(DataContext);
    
  const blanquear = () => {
    setID("");
    setApellido("");
    setNombre("");
    setCelular("");
    setSector("");
    setInterno("");
    setCargarDatos(true);
  }

  const activarFormAgregar = (valor) => {
    document.getElementById("formAgenda").disabled = valor;
    document.getElementById("btnGuardar").hidden = valor;
    document.getElementById("btnCancelar").hidden = valor;
    document.getElementById("btnGuardar").disabled = valor;
    document.getElementById("btnCancelar").disabled = valor;
    document.getElementById("btnActualizar").hidden = !valor;
    document.getElementById("btnAgregar").disabled = !valor;
  }

  const agregarContacto = async(e) => {
      try {
        e.preventDefault();
        const url = `${baseURL}/agenda`;
        const newContact = {
          apellido: apellido,
          nombre: nombre,
          celular: celular,
          sector: sector,
          interno: interno,
        };
        const response = await axios({
          method: "post",
          url: url,
          data: newContact,
        });
        console.log(response.data);
      } catch (e) {
        console.log(e.error);
      }
      blanquear();
    } 

    const actualizarContacto = async (e) => {
      const url = `${baseURL}/agenda/${ID}`;
        const updtContact = {
          apellido: apellido,
          nombre: nombre,
          celular: celular,
          sector: sector,
          interno: interno,
        };
        const response = await axios.put(url,updtContact)
        console.log(response.data)
      /* try {
        e.preventDefault();
        const url = `${baseURL}/agenda/${ID}`;
        const updtContact = {
          apellido: apellido,
          nombre: nombre,
          celular: celular,
          sector: sector,
          interno: interno,
        };
        const response = await axios({
          method: "put",
          url: url,
          data: updtContact,
        });
        console.log(response.data);
      } catch (e) {
        console.log(e.error);
      } */
      blanquear();
    }


  return (
    <div className="container-fluid pt-3 pb-3 bg-primary bg-opacity-25" >
      <div className="d-grid gap-2 mb-3">
        <button 
          id="btnAgregar"
          className = "btn btn-primary" 
          onClick={(e) => activarFormAgregar(false)}>
            Agregar Contacto
        </button>
      </div>
      <form>
      <fieldset id="formAgenda" disabled>
        <input
          value={apellido}
          className="form-control mb-3"
          type="text"
          placeholder="Apellido"
          onChange={(e) => setApellido(e.target.value)}
        />
        <input
          value={nombre}
          className="form-control mb-3"
          type="text"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          value={celular}
          className="form-control mb-3"
          type="text"
          placeholder="Celular"
          onChange={(e) => setCelular(e.target.value)}
        />
        <input
          value={sector}
          className="form-control mb-3"
          type="text"
          placeholder="Sector"
          onChange={(e) => setSector(e.target.value)}
        />
        <input
          value={interno}
          className="form-control mb-3"
          type="text"
          placeholder="Interno"
          onChange={(e) => setInterno(e.target.value)}
        />
        <div className="d-grid gap-2">
          <button id="btnGuardar" type="button" className="btn btn-success"
            onClick={(e) => {agregarContacto(e);
              desactivarBotones();
              document.getElementById("formAgenda").disabled = true;
            }}
          >
            Guardar
          </button>
          <button id="btnActualizar" type="button" className="btn" style={{backgroundColor:"darkblue",color:"white"}}
            onClick={(e) => {
              actualizarContacto();
              desactivarBotones();
              document.getElementById("formAgenda").disabled = true;
            }}
            >
            Actualizar
          </button>
          <button id="btnCancelar" className="btn btn-secondary"
            onClick={(e) => {
              desactivarBotones();
              blanquear();
              document.getElementById("formAgenda").disabled = true;
            }}
          >
              Cancelar
          </button>
        </div>
        </fieldset>
      </form>
    </div>
  )
}

export default ContactosForm;