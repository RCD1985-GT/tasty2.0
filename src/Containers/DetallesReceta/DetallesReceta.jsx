import React from 'react';
import './DetallesReceta.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const DetallesReceta = (props) => {

	// Variables locales
	let navigate = useNavigate();

	
	// Hook
	const [recetasGuardadas, setRecetasGuardadas] = useState(false);

	// UseEffect de montaje
	// useEffect(() => {

	// }, []);

	// UseEffect de actualizacion
	// useEffect(() => {
	// });


	// DONDE METO EL NAVIGATE A HOME

	const guardarReceta = async () => {

		
		let body = {
			recetaId: props.detalles?.id,
			usuarioId: props.credenciales?.usuario.id,
			titulo: props.detalles?.titulo,
			tipo: props.detalles?.tipo,
			ingredientes: props.detalles?.ingredientes,
			preparacion: props.detalles?.preparacion,
		}

		let config = {
		headers: { Authorization: `Bearer ${props.credenciales.token}` }
		};
		try {
			console.log(body);
			let resultado = await axios.post("http://localhost:3300/guardados/nuevo", body, config);
			console.log(resultado);
			setRecetasGuardadas(true);
			setTimeout(()=>{
				navigate("/");
			},1200);
		} catch (error) {
			console.log(error);
		}
	}

	if (recetasGuardadas === true) { // SI SE GUARDA RECETA TE DEVUELVE MENSAJE

		return (
			<div className="diseñoDetallesRecetas">
				<div className="contenedorDetallesRecetas">
					<p>La receta ha sido guardada en tu perfil</p>
					{/* {props.detalles?.titulo}  */}
				</div>
			</div>
		);

	} else {

		return (
			<div className="diseñoDetallesRecetas">
				<div className="contenidoDetallesRecetas">
					<div className="infoIzquierda">
						{/* <img className="cartel" src={props.peliculaSeleccionada.poster} alt={props.peliculaSeleccionada.titulo}/> */}
						AQUI VA FOTO
					</div>

					<div className="infoDerecha">
						<div className="detallesTitulo">{props.detalles?.titulo}</div>
						<div className="detallesTipo">{props.detalles?.tipo}</div>
						<div className="detallesIngredientes">{props.detalles?.ingredientes}</div>
						<div className="detallesPreparacion">{props.detalles?.preparacion}</div>
					
						<button className='botonGuardar' onClick={() => guardarReceta()}>Guardar</button>
					</div>
				</div>
			</div>
		)
	}
	
};

export default connect((state) => ({
	detalles: state.detalles,
	credenciales: state.credenciales
}))(DetallesReceta);

