import React, { useState, useEffect } from "react";
import './AdminCrearReceta.css';
import axios from 'axios';
import { connect } from 'react-redux';

const AdminCrearReceta = (props) => {
    console.log("entro en AdminVerRecetas")

    // Hook
    const [recetas, setRecetas] = useState([]);

    // UseEffect de montaje
    // useEffect(() => {
    //        }, []);

    // UseEffect de actualizacion
    // useEffect(() => {
    // });

    // Funcion traer usuarios
    const crearReceta = async () => {
        console.log("entro en funcion que crea receta")

        let config = {
            headers: { Authorization: `Bearer ${props.credenciales.token}` }
        };

        let body = {
            titulo: "",
            tipo: "",
            poster: "",
            ingredientes: "",
            preparacion: ""
        }

        try {

            let resultado = await axios.post("http://localhost:3300/recetas/registrar", body, config);
            console.log("llamada a axios realizada")
            console.log(resultado);
            setRecetas(resultado.data); // SE GUARDA EL RESULTADO EN EL HOOK

        } catch (error) {
            console.log(error);
        }
    }

    if (props.credenciales?.usuario.rol === true) {

        console.log("usuario = true");

        return (
            <div className='diseñoCrearReceta'>
             
            <div className="diseñoFormularioCrear">
                <div className="arribaCrear">CREA AQUI LA RECETA</div>
                <div className="medioCrear">
                    {/* {<pre>{JSON.stringify(datosUsuario, null,2)}</pre>} */}
                    <input type="text" name="titulo" id="titulo" title="titulo" placeholder="titulo:"/>
                    <input type="text" name="tipo" id="tipo" title="tipo" placeholder="tipo:" />
                    <input type="poster" name="poster" id="poster" title="poster" placeholder="poster:" />
                    <input type="text" name="ingredientes" id="ingredientes" title="ingredientes" placeholder="ingredientes:" />               
                    <input type="preparacion" name="preparacion" id="preparacion" title="preparacion" placeholder="preparacion" />                              
                </div>
                <div className="abajoRegistro">
                    {/* {msgError} */}
                    <div className="botoncrear" onClick={()=>crearReceta()}>
                        GUARDAR
                    </div>
                </div>
            </div>
        </div>
        )

    } else {
        return (
            <div className="diseñoCrearReceta">
                <div className="contenedorRecetas">
                    NO SE HAn CARGADO LAS RECETAS
                </div>
            </div>
        );
    }
};


export default connect((state) => ({
    detalles: state.detalles,
    credenciales: state.credenciales
}))(AdminCrearReceta);

