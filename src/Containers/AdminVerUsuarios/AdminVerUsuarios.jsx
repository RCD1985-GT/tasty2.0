import React, { useState, useEffect } from "react";
import './AdminVerUsuarios.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

const AdminVerUsuarios = (props) => {
  
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
       
        let config = {
            headers: { Authorization: `Bearer ${props.credenciales.token}` }
        };

        try {
           
            let resultado = await axios.get("http://localhost:3300/usuarios", config);
            setUsuarios(resultado.data);

        } catch (error) {
            console.log(error);
        }
    }

    if (props.credenciales?.usuario.rol === true) {
        
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

