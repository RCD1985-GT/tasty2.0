import React, { useState, useEffect } from "react";
import './AdminVerRecetas.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const AdminVerRecetas = (props) => {

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

    // Funcion traer recetas
    const traeRecetas = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.credenciales.token}` }
        };

        try {
            let resultado = await axios.get("http://localhost:3300/recetas");

            setRecetas(resultado.data);

        } catch (error) {
            console.log(error);
        }
    }

    if (props.credenciales?.usuario.rol === true) {


        return (
            <div className="contenidoRecetas">

                {recetas.map((receta) => {

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

