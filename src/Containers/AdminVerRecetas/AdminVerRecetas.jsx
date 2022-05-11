import React, { useState, useEffect } from "react";
import './AdminVerRecetas.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const AdminVerRecetas = (props) => {
    console.log("entro en AdminVerRecetas")

    // Variables locales
    let navigate = useNavigate();

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
        console.log("entro en funcion trae recetas")

        try {
            console.log("llamo a axios")
            let resultado = await axios.get("http://localhost:3300/recetas");
            console.log("llamada a axios realizada")
            console.log(resultado);
            setRecetas(resultado.data); 

        } catch (error) {
            console.log(error);
        }
    }

    if (props.credenciales.token === "") {
        console.log("entro en mapeo")


        return (
            <div className="contenidoRecetas">

                {recetas.map(receta => {

                    return ( 
                        <div className="itemReceta" key={receta.id} >
                            <p className="receta">{receta.titulo}</p>
                            <p className="receta">{receta.tipo}</p>
                            <p className="receta">{receta.poster}</p>
                            <p className="receta">{receta.ingredientes}</p>
                            <p className="receta">{receta.preparacion}</p>
                        </div>
                    )
                })
                }

            </div>
        )

    } else {
        return (
            <div className="diseñoRecetas">
                <div className="contenedorRecetas">
                    NO SE HAn CARGADO LAS RECETAS
                </div>
            </div>
        );
    }
};


export default connect((state) => ({
    credenciales: state.credenciales
}))(AdminVerRecetas);

