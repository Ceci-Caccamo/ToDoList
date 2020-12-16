import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {
  //extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  //obtener Proyectos cuando cargue el componente (un useEffect nunca debe estar despues de un return)
  useEffect(() => {
    obtenerProyectos();
  }, []);

  //revisar si el state inicial tiene contenido.
  if (proyectos.length === 0) return null;

  return (
    <div>
      <ul className="listado-proyectos">
        {proyectos.map((proyecto) => (
          <Proyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </ul>
    </div>
  );
};

export default ListadoProyectos;
