import React, { useState } from "react";



const Formulario = ({ listaTareas, setListaTareas }) => {
  const [inputTarea, setInputTarea] = useState('');

  const encapsular = (evento) => {
    setInputTarea(evento.target.value);


  }

  const enviarDatos = async (evento) => {
    evento.preventDefault();
    try {
      const response = await fetch('https://playground.4geeks.com/todo/todos/Kira',
        {
          method: 'POST',
          body: JSON.stringify({
            label: inputTarea,
            is_done: false
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
          setListaTareas([...listaTareas, data]);
    } catch (error) {
      console.log('Error al cargar la lista:', error);
    }
    setInputTarea('');
  }

  return (
    <form className="formularioTareas" onSubmit={(evento) => { enviarDatos(evento) }}>
      <input
        className="formularioTareasInput"
        type="text"
        placeholder="Escribe una tarea"
        value={inputTarea}
        onChange={(evento) => { encapsular(evento) }}
      />
    </form>
  )
};

export default Formulario;