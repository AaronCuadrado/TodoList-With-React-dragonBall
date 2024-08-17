import React from "react";

const Tarea = ({tarea}) => {
    return (
        <li className="listaTareaTarea">
            <div>{tarea.texto} </div>
            <div className="listaTareasBotones">
                <button className="botonEliminar"><i className="fa-solid fa-trash"></i></button>
                <button className="botonEditar"><i className="fa-solid fa-pen-to-square"></i></button>
            </div>
        </li>
    )
};

export default Tarea;