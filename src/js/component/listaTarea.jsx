import React from "react";
import Tarea from "./tarea";


const ListaTarea = ({ listaTareas, setListaTareas }) => {

    const editandoTarea = (id, nuevoTexto) => {
        setListaTareas(listaTareas.map((tarea) => {
            if (tarea.id === id) {
               return {...tarea, label: nuevoTexto} 
            }
           return tarea;
        }));
    }
    return (
        <ul className="listaTareas">
            {
                listaTareas.length > 0
                    ?
                    listaTareas.map((tarea) => {
                        return (
                           <Tarea key={tarea.id}
                            tarea={tarea}
                            editandoTarea={editandoTarea}
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