import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const ListadoProyectos = () => {
  //extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  //obtener Proyectos cuando cargue el componente (un useEffect nunca debe estar despues de un return)
  useEffect(() => {
    obtenerProyectos();
    //eslint-disable-next-line
  }, []);

  //revisar si el state inicial tiene contenido.
  if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno.</p>;

  return (
    <div>
      <TransitionGroup>
      <ul className="listado-proyectos">
        {proyectos.map((proyecto) => (
          <CSSTransition
          key={proyecto.id}
          timeout={200}
          classNames="proyecto"
          >
            <Proyecto 
             
            proyecto={proyecto} 
            />
          </CSSTransition>
        ))}
      </ul>
      </TransitionGroup>
    </div>
  );
};

export default ListadoProyectos;
