import React, { useState, useEffect } from "react";
import './AdminCrearReceta.css';
import axios from 'axios';
import { connect } from 'react-redux';

const AdminCrearReceta = (props) => {
    console.log("entro en AdminVerRecetas")

    // Hook
    const [recetas, setRecetas] = useState([]);

    // UseEffect de montaje
    useEffect(() => {
        traeRecetas();
    }, []);

    // UseEffect de actualizacion
    // useEffect(() => {

    // });

    // Funcion traer usuarios
    const traeRecetas = async () => {
        console.log("entro en funcion que crea receta")

//AQUI FALTA ALGO


        try {
            console.log("llamo a axios")
            let resultado = await axios.post("http://localhost:3300/recetas/registrar");
            console.log("llamada a axios realizada")
            console.log(resultado);
            setRecetas(resultado.data); // SE GUARDA EL RESULTADO EN EL HOOK

        } catch (error) {
            console.log(error);
        }
    }

    // if (recetas[0]?.id != undefined) {
    //     console.log("entro en mapeo")

        return (
            <div className="contenidoCrearReceta">
                SOY CREAR RECETA
            </div>

       
        );
    
};


export default connect((state) => ({
    // peliculaSeleccionada: state.peliculaSeleccionada,
    credenciales: state.credenciales
}))(AdminCrearReceta);

