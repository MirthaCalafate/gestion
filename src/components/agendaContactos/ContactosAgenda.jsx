import React from 'react';
import ContactosForm from '../agendaContactos/ContactosForm';
import ContactosListado from '../agendaContactos/ContactosListado';


const ContactosAgenda = () => {


  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <ContactosListado />
          </div>
          <div className="col-2">
            <ContactosForm />
          </div>
        </div>
    </div>
  )
}

export default ContactosAgenda;