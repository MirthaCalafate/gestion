import React from "react";
import { GrPrevious, GrNext } from 'react-icons/gr';

const Pagination = ({productsPerPage, currentPage, setcurrentPage, totalProducts}) => {

  const nroPaginas = Math.ceil(totalProducts / productsPerPage);
  let pageNumbers = [];

  for (let i = 1; i <= nroPaginas; i++) {
    pageNumbers.push(i);
  }

  const previusPage = () => {
    setcurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setcurrentPage(currentPage + 1);
  };

  const specificPage = (n) => {
    setcurrentPage(n);
  };

  const nroStyle = {
    marginLeft: "5px",
    marginRight: "5px",
    paddingLeft: "6px",
    paddingRight: "6px",
  }

  const pagStyle = {
    backgroundColor: "transparent",
    paddingLeft: "10px",
    paddingRight: "10px",
  }

  return (
    <div className = "d-flex justify-content-end align-items-center">
      <button
        style={pagStyle}
        className={`page-link ${
          currentPage === 1 ? "disabled" : ""
        } btn `}
        onClick={previusPage}
      >
        <GrPrevious/>
        {/* Anterior */}
      </button>
      {pageNumbers.map((nPag) => (
        <button 
          style={nroStyle}
          key={nPag}
          onClick={() => specificPage(nPag)}
          className={`page-link ${
            nPag === currentPage ? "active text-bg-primary" : ""
          } `}
        >
          {nPag}
        </button>
      ))}
      <button
        style={pagStyle}
        className={`page-link ${
          currentPage >= pageNumbers.length ? "disabled" : ""
        } btn `}
        onClick={nextPage}
      >
        <GrNext />
        {/* Siguiente */}
      </button>
    </div>
  );
};

export default Pagination;

