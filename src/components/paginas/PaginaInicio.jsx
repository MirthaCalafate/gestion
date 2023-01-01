import React from 'react';
import CardNews from '../CardNews';
import Carousel from '../Carousel';

const PaginaInicio = () => {
  return (
    <div style={{marginTop: 90}}>
      {/* <h2 className="text-center text-primary">Pagina de Inicio</h2> */}
      <div><Carousel /></div>
      <div><CardNews /></div>
    </div>
  )
}

export default PaginaInicio