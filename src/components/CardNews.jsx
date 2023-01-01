import React from "react";



const CardNews = () => {
  return (
    <>
      <div className="container">
        <div className="card text-center mb-5">
          <div className="card-header  text-bg-primary">
            Importante LEER
          </div>
          <div className="card-body">
            <h3 className="card-title">Titulo de la noticia</h3>
            <h5 className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              provident, quos nulla quibusdam sequi deleniti dolorum blanditiis
              modi nihil magni optio laboriosam facere nostrum. Odit alias
              accusamus cum ipsa sed!
            </h5>
            <a href="/" className="btn btn-outline-primary mt-3">
              Ir a algun lugar
            </a>
          </div>
          <div className="card-footer text-muted">Fecha de actualizacion</div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card border border-primary shadow mb-5 rounded">
              <div className="card-body bg-light">
                <h5 className="card-title">Titulo Noticia</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/" className="btn btn-outline-primary">
                  Leer
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card border border-primary shadow mb-5 rounded">
              <div className="card-body bg-light">
                <h5 className="card-title">Titulo Noticia</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content. With supporting text below as a natural lead-in to
                  additional content.
                </p>
                <a href="/" className="btn btn-outline-primary">
                  Leer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardNews;
