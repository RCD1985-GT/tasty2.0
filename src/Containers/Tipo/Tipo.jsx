
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './Tipo.css';
import { DETALLES } from '../../redux/types';

const Tipo = (props) => {

    // Navegar
    let navigate = useNavigate();

    const navegar = () => {
        navigate("/detallesReceta");
    }

    // Hook de recetas
    const [recetas, setRecetas] = useState([])

    // Use effect montaje
    useEffect(() => {
        traeTipo();
    }, []);

    // Funcion escoger receta
    const escogeReceta = (receta) => {
         props.dispatch({ type: DETALLES, payload: receta });
        navigate("/detallesReceta");
    }

    // Funcion que trae recetas segun el tipo  ....${props.tipo}
    const traeTipo = async () => {
        console.log("entro enfuncion que trae tipo")
        try {

            let resultado = await axios.get(`http://localhost:3300/recetas/${props.tipo}`);
            setRecetas(resultado.data);
            
        } catch (error) {
            console.log(error);
        }
    };
    return (

        <div className="contenidoTipo">
            <div className="contenedorInfo"></div>
            {recetas.map(item => {
                return (
                    <div className="itemTipo" key={item.id} onClick={() => escogeReceta(item)} >
                        <div className="itemfoto">{item.poster}</div>
                        <div className="itemTitulo">{item.titulo}</div>
                    </div>
                )
            })
            }
            <div className="contenedorInfo"></div>
        </div>
    )
}

export default connect((state) => ({
    tipo: state.tipo
}))(Tipo);