import React from "react";

const Proyecto = ({ proyecto }) => {
  return (
    <div>
      <li>
        <button type="button" className="btn btn-blank">
          {proyecto.nombre}
        </button>
      </li>
    </div>
  );
};

export default Proyecto;
