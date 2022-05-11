import React from 'react';
import './DetallesReceta.css';
import axios from 'axios'; 
import { connect } from 'react-redux';
import { useState, useEffect } from "react";

const DetallesReceta = (props) => {
	
// YA TENGO LOS DATOS EN REDUX ASI QUE PASO DIRECTAMENTE AL RETURN 

// Hook
const [alquilada, setAlquilada] = useState(false);

// UseEffect de montaje
// useEffect(() => {
	
// }, []);

// UseEffect de actualizacion
useEffect(() => {
	console.log(props.credenciales);
});


const hacerPedido = async () => {

	console.log(props.credenciales.token);

	let body = {
		peliculaId : props.peliculaSeleccionada?.id,
		usuarioId : props.credenciales?.usuario.id, 
		precio : "5",
		fechaAlquiler : "2022-03-24",
		fechaDevolucion :  "2022-03-25"
	   }

    // let config = {
	// headers: { Authorization: `Bearer ${props.credenciales.token}` }
	// };

	try {
		console.log(body);
		let resultado = await axios.post("http://localhost:3300/pedidos/nuevoPedido", body); 
		console.log(resultado);
		setAlquilada(true);
		
	} catch (error) {
		console.log(error);
	}
}

if(alquilada === true){
// if (props.peliculaSeleccionada != undefined) {

	return(

	<div className="diseñoPedidos">
	
		<div className="contenedorPedidos">

		Gracias por alquilar {props.peliculaSeleccionada?.titulo}
			
		</div>
	</div>
	
);
	
	} else {   

		return (
		<div className="diseñoDetalles">
			<div className="contenidoDetalles">
				<div className="infoIzquierda"> 
					<img className="cartel" src={props.peliculaSeleccionada.poster} alt={props.peliculaSeleccionada.titulo}/>
				</div> 
			
				<div className="infoDerecha"> 
					<div className="datosPeliculaTitulo">{props.peliculaSeleccionada?.titulo}</div>
					<div className="datosPeliculaSinopsis">{props.peliculaSeleccionada?.sinopsis}</div>
					<button className='botonAlquilar' onClick={()=>hacerPedido()}>ALQUILAR</button>
				</div>	
			</div>
		</div>
		)
	}
	
};

export default connect((state) => ({
    peliculaSeleccionada: state.peliculaSeleccionada,
	credenciales: state.credenciales
}))(DetallesReceta);

