
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
        console.log(receta);
        //Guardamos la receta escogida en REDUX 
        props.dispatch({ type: DETALLES, payload: receta });
        console.log("receta guardada en Redux")
        // y redirigimos a la vista de detalles Receta con navigate
        navigate("/detallesReceta");
    }

    // Funcion que trae recetas segun el tipo  ....${props.tipo}
    const traeTipo = async () => {
        console.log("entro enfuncion que trae tipo")
        try {

            let resultado = await axios.get(`http://localhost:3300/recetas/${props.tipo}`);
            console.log(resultado)
            setRecetas(resultado.data);
            console.log("recetas recibidas y guardadas en Hook", props.tipo)

        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="contenidoTipo">
            {recetas.map(item => {
                return (
                    <div className="itemTipo" key={item.id} onClick={() => escogeReceta(item)} >
                        <div className="itemfoto">{item.poster}</div>
                        <div className="itemTitulo">{item.titulo}</div>
                        {/* <div className="itemTipo">{item.tipo}</div> */}

                        {/* <p className="titulo">Foto{item.poster}</p>
                        <p className="titulo">Titulo:{item.titulo}</p>
                        <p className="titulo">Tipo:{item.tipo}</p> */}

                        {/* <p className="titulo">Ingredientes:{item.ingredientes}</p>
                        <p className="titulo">Preparacion:{item.preparacion}</p> */}
                    </div>
                )
            })
            }
        </div>
    )

}

export default connect((state) => ({
    tipo: state.tipo
}))(Tipo);