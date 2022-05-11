import React, { useState, useEffect } from "react";
import './AdminVerUsuarios.css';
import axios from 'axios';
import { connect } from 'react-redux';

const AdminVerUsuarios = (props) => {
    console.log("entro en AdminVerUsuarios")

    // Hook
    const [usuarios, setUsuarios] = useState([]);

    // UseEffect de montaje
    useEffect(() => {
        traeUsuarios();
    }, []);

    // UseEffect de actualizacion
    // useEffect(() => {

    // });

    // Funcion traer usuarios
    const traeUsuarios = async () => {
        console.log("entro en funcion trae usuarios")

        try {
            console.log("llamo a axios")
            let resultado = await axios.get("http://localhost:3300/usuarios");
            console.log("llamada a axios realizada")
            console.log(resultado);
            setUsuarios(resultado.data); // SE GUARDA EL RESULTADO EN EL HOOK

        } catch (error) {
            console.log(error);
        }
    }

    if (usuarios[0]?.id != undefined) {
        console.log("entro en mapeo")

        return (
            <div className="contenidoUsuarios">

                {usuarios.map(usuario => {

                    return ( // COMPROBAR SI USUARIOS.ID VA EN SINGULAR O PLURAL
                        <div className="itemUsuario" key={usuario.id} >
                            <p className="usuario">{usuario.nombre}</p>
                            <p className="usuario">{usuario.apellido}</p>
                            <p className="usuario">{usuario.email}</p>
                        </div>
                    )
                })
                }

            </div>
        )

    } else {
        return (
            <div className="diseñoUsuarios">
                <div className="contenedorUsuarios">
                    NO SE HA CARGADO LOS USUARIOS
                </div>
            </div>
        );
    }
};


export default connect((state) => ({
    // peliculaSeleccionada: state.peliculaSeleccionada,
    credenciales: state.credenciales
}))(AdminVerUsuarios);

