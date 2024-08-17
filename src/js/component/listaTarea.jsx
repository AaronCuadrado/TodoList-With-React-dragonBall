import React from "react";
import Tarea from "./tarea";


const ListaTarea = ({ listaTareas, setListaTareas }) => {
    return (
        <ul className="listaTareas">
            {
                listaTareas.length > 0
                    ?
                    listaTareas.map((tarea) => {
                        return (
                           <Tarea key={tarea.id}
                            tarea={tarea}
                           />
                        )

                    })
                    :
                    <p className="listaTareasMensaje">No hay tareas</p>
            }
        </ul>
    )
};

export default ListaTarea;