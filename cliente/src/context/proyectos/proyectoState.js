import React, { useReducer } from "react";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { 
  FORMULARIO_PROYECTO, 
  OBTENER_PROYECTO
 } from "../../types";



const ProyectoState = (props) => {

  const proyectos = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Diseño de Sitio Web" },
    { id: 4, nombre: "MERN" },
  ];

  const inicialState = {
    proyectos: [],
    formulario: false,
  };

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, inicialState); //es igual a usar el useState

  //Serie de funciones para el CRUD del proyecto
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  //Obtener los proyectos (el parametro que tome la funcion (en este caso "proyectos") sera el payload)
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTO,
      payload: proyectos,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
        obtenerProyectos
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
