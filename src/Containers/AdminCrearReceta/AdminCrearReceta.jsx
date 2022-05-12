import React, { useState, useEffect } from "react";
import './AdminCrearReceta.css';
import axios from 'axios';
import { connect } from 'react-redux';

const AdminCrearReceta = (props) => {
    console.log("entro en AdminCrearRecetas")

    // Hook
    const [datosUsuario, setDatosUsuario] = useState({
        titulo: "",
        tipo: "",
        poster: "",
        ingredientes: "",
        preparacion: "",
    });


    // UseEffect de montaje
    // useEffect(() => {
    //        }, []);


    // UseEffect de actualizacion
    // useEffect(() => {
    // });

    // Funcipon que rellena datos
    const rellenarDatos = (e) => {
        setDatosUsuario({
            ...datosUsuario,
            [e.target.name]: e.target.value
        })
    };

    // Funcion traer recetas
    const crearReceta = async () => {
        console.log("entro en funcion que crea receta")

        let config = {
            headers: { Authorization: `Bearer ${props.credenciales.token}` }
        };

        let body = {
            titulo: datosUsuario.titulo,
            tipo: datosUsuario.tipo,
            poster: datosUsuario.poster,
            ingredientes: datosUsuario.ingredientes,
            preparacion: datosUsuario.preparacion,
        }

        try {

             await axios.post("http://localhost:3300/recetas/registrar", body, config);
             console.log(body)

        } catch (error) {
            console.log(error);
        }
    }
// NO ENTRA AQUI
    if (props.credenciales?.usuario.rol === true) {

        console.log("usuario = true");

        return (
            <div className='diseñoCrearReceta'>
             
            <div className="diseñoFormularioCrear">
                <div className="arribaCrear">CREA AQUI LA RECETA</div>
                <div className="medioCrear">
                    {/* {<pre>{JSON.stringify(datosUsuario, null,2)}</pre>} */}
                    <input type="text" name="titulo" id="titulo" title="titulo" placeholder="titulo:" onChange={(e) => { rellenarDatos(e) }}
/>
                    <input type="text" name="tipo" id="tipo" title="tipo" placeholder="tipo:" onChange={(e) => { rellenarDatos(e) }}
/>
                    <input type="poster" name="poster" id="poster" title="poster" placeholder="poster:"onChange={(e) => { rellenarDatos(e) }}
 />
                    <input type="text" name="ingredientes" id="ingredientes" title="ingredientes" placeholder="ingredientes:"onChange={(e) => { rellenarDatos(e) }}
 />               
                    <input type="preparacion" name="preparacion" id="preparacion" title="preparacion" placeholder="preparacion"onChange={(e) => { rellenarDatos(e) }}
 />                              
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
    // detalles: state.detalles,
    credenciales: state.credenciales
}))(AdminCrearReceta);

