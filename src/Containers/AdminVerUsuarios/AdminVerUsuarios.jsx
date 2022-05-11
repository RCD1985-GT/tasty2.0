import React, { useState, useEffect } from "react";
import './AdminVerUsuarios.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

const AdminVerUsuarios = (props) => {
    console.log("entro en AdminVerUsuarios")

    // Variables locales
    let navigate = useNavigate();

    // Hook
    const [usuarios, setUsuarios] = useState([]);

    // UseEffect 1
    useEffect(() => {
        traeUsuarios();
    }, []);

    // UseEffect 2
    // useEffect(() => {
    //   })

    // Funcion traer usuarios
    const traeUsuarios = async () => {
        console.log("entro en funcion trae usuarios")

        let config = {
            headers: { Authorization: `Bearer ${props.credenciales.token}` }
        };

        try {
            console.log("llamo a axios")
            let resultado = await axios.get("http://localhost:3300/usuarios", config);
            console.log("llamada a axios realizada")
            console.log(resultado);
            setUsuarios(resultado.data);

        } catch (error) {
            console.log(error);
        }
    }

    if (props.credenciales?.usuario.rol === true) {
        console.log("entro en mapeo")

        return (
            <div className="contenidoUsuarios">

                {usuarios.map(usuario => {

                    return (
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
    credenciales: state.credenciales
}))(AdminVerUsuarios);

