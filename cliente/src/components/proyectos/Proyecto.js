import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  //obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  //Obtener la funcion del context de tarea
  const tareasContext = useContext(tareaContext);
  const {obtenerTareas} = tareasContext;

  //Funcion para agregar el proyecyto actual
  const seleccionarProyecto = (id) => {
    proyectoActual(id); //fijar un proyecto actual.
    obtenerTareas(id);//filtrar las tareas cuando se de click.
  };

  return (
    <div>
      <li>
        <button
          type="button"
          className="btn btn-blank"
          onClick={() => seleccionarProyecto(proyecto.id)}
        >
          {proyecto.nombre}
        </button>
      </li>
    </div>
  );
};

export default Proyecto;
