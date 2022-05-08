import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
// import { MODIFY_credenciales } from '../../redux/types';
import axios from 'axios';



import "./Perfil.css";

const Perfil = (props) => {

    // Variables locales
    let navigate = useNavigate();

    // Hook recetas guardadas
    const [recetasGuardadas, setRecetasGuardadas] = useState([]);

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
            navigate("/");
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

        let id = props.credenciales.usuario.id;

        let res = await axios.get(`http://localhost:5000/receta_adquirida/${id}`, config); // CAMBIAR

        setRecetasGuardadas(res.data);
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
            <div className="datos">
                <div className=''>
                    <div className=" "><b>Nombre: </b>{props.credenciales.usuario.nombre}</div>
                    <div className=" "><b>Apellidos: </b>{props.credenciales.usuario.apellido}</div>
                    <div className=" "><b>Email: </b>{props.credenciales.usuario.email}</div>
                    <div className=" "><b>Age: </b>{props.credenciales.usuario.edad}</div>
                    <div className=" "><b>Contraseña nueva:</b><input className='inp' type="text" name="newPassword" id="newPassword" title="newPassword" placeholder="new pass" autoComplete="off" onChange={(e) => { rellenarDatos(e) }} /></div>
                    {/* <div className="" onClick={() => updateUser()}>Update</div> */}
                </div>
            </div>
            <div className="recetas_fav">
                <div>
                    <p>Lista de tus recetas favorita {props.credenciales.usuario.nombre}</p>
                    {
                        recetasGuardadas.map(results => {
                            return (
                                <div className="pedidos2">
                                    <p>
                                        Nombre: {results.nombre}.<br />
                                        Ingredientes:{results.ingredientes}<br />
                                        Preparacion:{results.preparacion}
                                    </p>
                                    <img className='cartel3' src={results.imagen} alt=''></img>
                                </div>
                            )
                        })
                    }
                    {/* <div className='borrar' onClick={() => borrar_pedido()}> // CAMBIAR
                    </div> */}

                </div>
            </div>

            <div>

            </div>
        </div>
    )


}

export default connect((state) => ({
    credenciales: state.credenciales
}))(Perfil);