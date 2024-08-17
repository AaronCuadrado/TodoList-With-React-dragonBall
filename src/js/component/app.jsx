import React, { useEffect, useState } from "react";
import Header from "./header";
import Formulario from "./formulario";
import ListaTarea from "./listaTarea";

const App = () => {
	const [listaTareas, setListaTareas] = useState([]);

	useEffect(() => {
		const cargarTareas = async () => {
			try {
				const response = await fetch('https://playground.4geeks.com/todo/users/Kira')
				if (!response.ok) {
					throw new Error('Usuario no encontrado');
				}
				const data = await response.json();
				setListaTareas(data.todos);
			} catch (error) {
				console.log('Error al cargar la lista:', error);
				crearUsuario();
			}
		}

		const crearUsuario = async () => {
			try {
				const response = await fetch('https://playground.4geeks.com/todo/users/Kira',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify([])
					}
				);
				if(response.ok){
					console.log('Usuario creado correctamente')
					cargarTareas();
				} 
			} catch (error) {
				console.log('Error al crear usuario:', error); {

				}
			}
		}
		cargarTareas();
	}, []);
	console.log(listaTareas);

	return (
		<div className="contenedor">
			<Header />
			<Formulario listaTareas={listaTareas} setListaTareas={setListaTareas} />
			<ListaTarea listaTareas={listaTareas} setListaTareas={setListaTareas} />

		</div>
	)
};

export default App;
