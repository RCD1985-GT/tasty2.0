
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

    // Funcion modificar receta


    // Funcion borrar receta
    const borrarReceta = async (id) => {

        try {
            let config = {
                headers: { Authorization: `Bearer ${props.credenciales.token}` }
            };

            console.log(id);
            let res = await axios.delete(`http://localhost:3000/eliminar/${id}`, config)
            console.log(res.data)

        } catch (error) {
            console.log("error");
        }
    }


    // Funcion que trae recetas segun el tipo  ....${props.tipo}
    const traeTipo = async () => {
        try {

            let resultado = await axios.get(`http://localhost:3300/recetas/${props.tipo}`);
            setRecetas(resultado.data);

        } catch (error) {
            console.log(error);
        }
    };

    // SI ES ADMINISTRADOR
    if (props.credenciales.usuario.rol === true) {
        return (

            <div className="contenidoTipo">
                <div className="contenedorInfo"></div>
                {recetas.map(item => {
                    return (
                        <div className="itemTipo" key={item.id} >
                            <div className="itemfoto">{item.poster}</div>
                            <div className="itemTitulo">{item.titulo}</div>
                            <div className="itemTitulo" onClick={() => escogeReceta(item)}>Ver Receta</div>
                            <div className="itemTitulo" >Modificar </div>
                            <div className="itemTitulo" onClick={() => borrarReceta(item)}>Borrar</div>

                        </div>
                    )
                })
                }
                <div className="contenedorInfo"></div>
            </div>
        )

    } else {
        return (
            <div className="contenidoTipo">
                <div className="contenedorInfo"></div>
                {recetas.map(item => {
                    return (
                        <div className="itemTipo" key={item.id} >
                            <div className="itemfoto">{item.poster}</div>
                            <div className="itemTitulo">{item.titulo}</div>
                            <div className="itemTitulo" onClick={() => escogeReceta(item)}>Ver Receta</div>
                            {/* <div className="itemTitulo" onClick={() => modificarReceta(item)}>Modificar </div>
                        <div className="itemTitulo"  onClick={() => borrarReceta(item)}>Borrar</div> */}

                        </div>
                    )
                })
                }
                <div className="contenedorInfo"></div>
            </div>
        )
    }
}
export default connect((state) => ({
    tipo: state.tipo,
    credenciales: state.credenciales,
    detalles: state.detalles
}))(Tipo);