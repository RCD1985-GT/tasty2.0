import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { MODIFY_credenciales } from '../../redux/types';
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


        let res = await axios.get(`http://localhost:3300/guardados/usuario/${props.credenciales.usuario.id}`, config); // NO VA
        setRecetasGuardadas(res.data);
        console.log("esto es resultao", res.data)
    }

    // // Funcion que actualiza usuario
    // const actualizarUsuario = async () => {

    //     let config = {
    //         headers: { Authorization: `Bearer ${props.credenciales.token}` }
    //     };

    //     let body = {
    //         id: props.credenciales.usuario.id,
    //         oldPassword: "tete",
    //         newPassword: datosUsuario.newPassword,
    //     }

    //     console.log(body, "ESTO ES BODYYYYYYYY");
    //     console.log(config, "ESTO ES CONFIGGGGGGGG");


    //     try {
    //         //Hacemos el update en la base de datos
    //         let res = await axios.put(`http://localhost:5000/users/`, body, config);
    //         console.log("your password has been changed successfully");
    //         if (res) {
    //             //Guardamos en redux
    //             // props.dispatch({ type: MODIFY_credenciales, payload: datosUsuario });
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }

    return (
        <div className="perfil">

            <div className="contenedorDatos">
                <p>TUS DATOS PERSONALES:</p>
                <div className="contenidoDatos">
                    <div className="datos"><b>Nombre: </b>{props.credenciales.usuario.nombre}</div>
                    <div className="datos"><b>Apellidos: </b>{props.credenciales.usuario.apellido}</div>
                    <div className="datos"><b>Email: </b>{props.credenciales.usuario.email}</div>
                    <div className="datos"><b>Contraseña nueva:</b><input className='' type="text" name="contraseña" id="contraseña" title="contraseña" placeholder="Nueva Contraseña" autoComplete="off" onChange={(e) => { rellenarDatos(e) }} /></div>
                    <div className="datosContraseña">Actualizar</div>
                    {/* onClick={() => updateUser()} */}
                </div>
            </div>

            <div className="contenedorFavoritas">
                {/* <p>{props.credenciales.usuario.nombre},estas son tus recetas favoritas:</p> */}

                <p>TUS RECETAS FAVORITAS</p>
                <div className="contenidoFavoritas">
                    {
                        recetasGuardadas.map(receta => {
                            return (
                                <div className="cardReceta" key={receta.id} >

                                    <div className="cardRecetaIzquierda">
                                        <div className="cardRecetaIzquierdaFoto"> Foto:  {receta.poster}<br /></div>
                                        <div className="cardRecetaIzquierdaTitulo"> Titulo: {receta.titulo}<br /></div>
                                        {/* Titulo: {receta.titulo}<br />
                                        Tipo: {receta.tipo}<br /> */}
                                    </div>
                                    
                                    <div className="cardRecetaDerecha">
                                        {/* Titulo: {receta.titulo}<br />
                                        Tipo: {receta.tipo}<br /> */}
                                        <div className="cardRecetaDerechaIngredientes"> Ingredientes:{receta.ingredientes}</div>
                                        <div className="cardRecetaDerechaPreparacion">Preparacion:{receta.preparacion}</div>
                                       
                                    </div>
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