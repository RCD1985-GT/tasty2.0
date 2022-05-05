import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {checkError} from '../../utiles';
import './Registro.css';


const Registro = () => {  

    let navigate = useNavigate();
    
    //Hooks

    const [datosUsuario, setDatosUsuario] = useState({
            nombre: "", apellido: "", edad: "", email: "", password: "", password2: "" 
        });

    const [msgError, setMsgError] = useState("");

    //useEffect

    useEffect(()=>{
        //se ejecuta la primera vez que se ejecuta tan solamente
    },[]);

    useEffect(()=>{
        //se ejecuta cada vez que se actualiza CUALQUIER HOOK  
    })


    //Handler (manejador)
    const rellenarDatos = (e) => {
            setDatosUsuario({...datosUsuario, 
                [e.target.name]: e.target.value})
    };


    //Funciones locales del componente

    const registrame = async () => {

        //Array de distintos campos

        setMsgError("");
        let error = "";

        let arrayCampos = Object.entries(datosUsuario);
        
        // //1 comprobación de errores antes de enviar al backend

        if(datosUsuario.password !== datosUsuario.password2){

            return (setMsgError("Los dos password deben de coincidir"));

        }else{
            setMsgError("");
        }

        for(let elemento of arrayCampos){
            error = checkError(elemento[0],elemento[1]);

            if(error !== "ok"){
                setMsgError(error);
                return;
            };
        };

        console.log("todo ha ido bien")

        //2construimos el body

        let body = {
            nombre: datosUsuario.nombre,
            apellido: datosUsuario.apellido,
            email: datosUsuario.email,
            edad: datosUsuario.edad,
            password: datosUsuario.password,
            
        }

        console.log("le llaman BODY", body);
        //3 envio de axios

        try {
            
            let resultado = await axios.post("http://localhost:3300/usuarios/registro", body); 
            console.log(resultado);
            
                setTimeout(()=>{
                    navigate("/acceso");
                },1000);
            
            
            
        } catch (error) {
            console.log(error);
        }

    }

    return(
        <div className='diseñoRegistro'>
             
            <div className="diseñoFormularioRegistro">
                <div className="arribaRegistro">Formulario de Registro</div>
                <div className="medioRegistro">
                    {/* {<pre>{JSON.stringify(datosUsuario, null,2)}</pre>} */}
                    <input type="text" name="nombre" id="nombre" title="nombre" placeholder="Nombre:" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input type="text" name="apellido" id="apellido" title="apellido" placeholder="Apellido:" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input type="email" name="email" id="email" title="email" placeholder="Correo Electrónico:" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input type="text" name="edad" id="edad" title="edad" placeholder="Edad:" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>               
                    <input type="password" name="password" id="password" title="password" placeholder="Contraseña" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input type="password" name="password2" id="password2" title="password2" placeholder="Repite contraseña" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    
                    
                </div>
                <div className="abajoRegistro">
                    {msgError}
                    <div className="botonRegistro" onClick={()=>registrame()}>
                        Registrarme
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Registro; 