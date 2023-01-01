import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const baseURL = "http://localhost:3004";
  const [cargarDatos, setCargarDatos] = useState (false);
  
  const [ID, setID] = useState("");
  const [apellido, setApellido] = useState("");
  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [sector, setSector] = useState("");
  const [interno, setInterno] = useState("");
  
  const data = {
    baseURL,
    cargarDatos, setCargarDatos,
    ID, setID,
    apellido, setApellido,
    nombre, setNombre,
    celular, setCelular,
    sector, setSector,
    interno, setInterno
  }
  
    return (
    <DataContext.Provider value = {data}>
      {children}
    </DataContext.Provider>
    )
};
