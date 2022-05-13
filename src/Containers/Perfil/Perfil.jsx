import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { MODIFY_credenciales } from '../../redux/types';
import { DETALLES } from '../../redux/types';
import axios from 'axios';

import "./Perfil.css";

const Perfil = (props) => {

    // Variables locales
    let navigate = useNavigate();

    // Hook recetas guardadas
    const [recetasGuardadas, setRecetasGuardadas] = useState([]); // MIRAR ESTO

    // Hook datos uduario
    const [datosUsuario, setDatosUsuario] = useState({
        newPassword: '', // cambiar a español
    });

    // Funcion que rellena los datos 
    const rellenarDatos = (e) => {
        setDatosUsuario({
            ...datosUsuario,
            [e.target.name]: e.target.value
        })
    };

    // Funcion escoger receta
    const escogeReceta = (receta) => {
        console.log(receta);
        //Guardamos la receta escogida en REDUX 
        props.dispatch({ type: DETALLES, payload: receta });
        console.log("receta guardada en Redux")
        // y redirigimos a la vista de detalles Receta con navigate
        navigate("/detallesReceta");
    }

    // Use effect 1
    useEffect(() => {
        if (props.credenciales.token === '') {

        }
        mostrarRecetasGuardadas();

    }, [])

    // Use effect 2
    useEffect(() => {
    });

    // Función borrar receta
    // const borrar_pedido = (req, res) => {

    // let id = props.credenciales.usuario.id;


    // console.log(id);
    // axios.delete(`http://localhost:5000/receta_adquirida/${id}`)
    // console.log(res.data);

    // Funcion mostrar recetas guardadas
    const mostrarRecetasGuardadas = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.credenciales.token}` }
        };


        let res = await axios.get(`http://localhost:3300/guardados/usuario/${props.credenciales.usuario.id}`, config);
        setRecetasGuardadas(res.data);
        console.log("esto es resultao", res.data)
    }

    return (
        <div className="perfil">

            <div className="contenedorDatos">
                <p>TUS DATOS PERSONALES:</p>
                <div className="contenidoDatos">
                    <div className="datos"><b>Nombre: </b>{props.credenciales.usuario.nombre}</div>
                    <div className="datos"><b>Apellido: </b>{props.credenciales.usuario.apellido}</div>
                    <div className="datos"><b>Email: </b>{props.credenciales.usuario.email}</div>
                    {/* <div className="datos"><b>Contraseña nueva:</b><input className='' type="text" name="contraseña" id="contraseña" title="contraseña" placeholder="Nueva Contraseña" autoComplete="off" onChange={(e) => { rellenarDatos(e) }} /></div>
                    <div className="datosContraseña">Actualizar</div> */}
                    {/* onClick={() => updateUser()} */}
                </div>
            </div>

            <div className="contenedorFavoritas">
                <p>TUS RECETAS FAVORITAS</p>
                <div className="contenidoFavoritas">
                    {
                        recetasGuardadas.map(receta => {
                            return (

                                <div className="itemReceta" key={receta.id} >
                                    <p className="receta">{receta.poster}</p>
                                    <p className="receta">{receta.titulo}</p>
                                    <p className="receta">{receta.tipo}</p>
                                    <div className="info" onClick={() => escogeReceta(receta)}>INFO</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default connect((state) => ({
    credenciales: state.credenciales,
}))(Perfil);