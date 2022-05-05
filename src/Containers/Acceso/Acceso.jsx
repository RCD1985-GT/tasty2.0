import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CREDENCIALES } from '../../redux/types';
import { connect } from 'react-redux';
import './Acceso.css';


const Login = (props) => {

    let navigate = useNavigate();

    
   
    //1-Hooks 
    const [credenciales, setCredenciales] = useState("");
    const [datosUsuario, setDatosUsuario] = useState({email: "", password: ""});
    const [msgError, setMsgError] = useState("");
    const [msgError2, setMsgError2] = useState("");

    //Funciones handlers
    const rellenarDatos = (e) => {
        //Funcion handler que setea los datos en el hook...[e.target.name] obtiene 
        //el nombre de la propiedad a cambiar, e.target.value tiene el valor..ambos
        //obtienen los datos del evento, que es el hecho de escribir en un input en concreto
        setDatosUsuario({...datosUsuario, [e.target.name]: e.target.value})
    };

    const checkPassword = (e) => {

        if(e.target.value.length < 4){
            setMsgError("EL password debe de tener 4 caracteres");
        } else {
            setMsgError("");
        }

    };

    
    // UseEffect de montaje
    //    (()=>{
    //     console.log("Me he montado por primera y única vez");
    // },[]);


    // UseEffect de actualizacion
    useEffect(()=>{
        //Este useEffect se ejecutará por cada vez que se actualize el 
        //componente. Es decir, cuando cambie un hook y por lo tanto se actualize el componente.

        //Es peligroso cambiar hooks aqui, si no tenemos condicionales que eviten
        //que entremos en bucles infinitos.
        // console.log("Credenciales vale....", credenciales);



        if(credenciales?.token !== undefined){

            setTimeout(()=>{
                navigate("/");
            }, 3000);
        };

    });

    //Funciones locales

    const login = async () => {

        try {

            let body = {
                 email: datosUsuario.email,
                 password: datosUsuario.password
            }

            let resultado = await axios.post("http://localhost:3300/usuarios/login",body); 


            
            if(resultado.data === "Usuario o contraseña inválido"){
                setMsgError2("Usuario o contraseña inválido")
            }else{
                
                props.dispatch({type:CREDENCIALES, payload: resultado.data});
                setCredenciales(resultado.data);
                
            }


        } catch (error) {

            console.log(error)

        }

        
    };

    const takeMeRegister = () => {
        setTimeout(()=>{
            navigate("/registro");
        },1000);
    }


    //2-Render (lo que pinta en pantalla)

    if(credenciales?.token !== undefined){
        return(
            <div>Hola {credenciales?.usuario?.nombre}, bienvenid@ a Movie World.</div>
        )
    } else {
         
        return(
            
            <div className='diseñoAcceso'>
                 
                <div className="diseñoFormulario">
                <p>FORMULARIO USUARIO</p>
                    <input type="email" name="email" id="email" title="email" placeholder="Correo Electrónico" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input type="password" name="password" id="password" title="password" placeholder="Contraseña" autoComplete="off" onChange={(e)=>{rellenarDatos(e); checkPassword(e)}}/>
                    {msgError}
                    {msgError2}
                    <button className='botonAcceder' onClick={()=>login()}>Acceder </button>
                    <div className='botonNoRegistrado' onClick={()=>takeMeRegister()}>
                    <u>¿ Aún no estas registrado ?</u>
                    </div>
                </div>
                
                
                
            </div>
        );
    }
    

};


// export default Login;

export default connect((state) => ({
    peliculaSeleccionada: state.peliculaSeleccionada,
	credenciales: state.credenciales
}))(Login);
