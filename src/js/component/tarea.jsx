import React, { useState } from "react";

const Tarea = ({ tarea, editandoTarea }) => {
    const [editarTarea, setEditarTarea] = useState(false);
    const [tareaEditada, setTareaEditada] = useState(tarea.label);
    const [tareaEliminada, setTareaEliminada] = useState(false);
    
    const enviarFormulario = async (evento) => {
        evento.preventDefault();
        try {
            const response = await fetch (`https://playground.4geeks.com/todo/todos/${tarea.id}`, {
                method: 'PUT',
                body: JSON.stringify(
                    {
                        label: tareaEditada,
                        is_done: tarea.is_done
                    }
                ),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Error al actualizar la tarea');
                
            }
            const data = await response.json();
            editandoTarea(data.id, data.label);
        } catch (error) {
            console.log('Error al actualizar la tarea:', error);
        }
        setEditarTarea(false);
      
    };
  
    
    return (
        <li className="listaTareaTarea">
            {editarTarea === true ?
                <form className="actualizarTarea" onSubmit={enviarFormulario }>
                    <input className="editarTareaInput"
                        type="text"
                        value={tareaEditada}
                        onChange={(evento) => { setTareaEditada(evento.target.value)}}
                      
                        >
                    </input>
                    <button className="actualizarTareaBoton" onClick={enviarFormulario}><i class="fa-solid fa-check"></i></button>
                </form>
                :
                tarea.label
            }

            <div className="listaTareasBotones">
                <button className="botonEliminar" onClick={() => {setTareaEliminada(!tareaEliminada)}}><i className="fa-solid fa-trash"></i></button>
                <button className="botonEditar" onClick={() => { setEditarTarea(!editarTarea) }}><i className="fa-solid fa-pen-to-square"></i></button>
            </div>
        </li>
    )
};

export default Tarea;