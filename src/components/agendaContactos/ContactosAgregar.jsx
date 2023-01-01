import { useContext } from "react";
import axios from "axios";
import { DataContext } from "../DataContext";

const ContactosAgregar =  async (e) => {
  const {
    baseURL, setCargarDatos,
    apellido, setApellido,
    nombre, setNombre,
    celular, setCelular,
    sector, setSector,
    interno, setInterno,
  } = useContext(DataContext);

    
    try {
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
    setApellido("");
    setNombre("");
    setCelular("");
    setSector("");
    setInterno("");
    setCargarDatos(true);
};

export default ContactosAgregar;
