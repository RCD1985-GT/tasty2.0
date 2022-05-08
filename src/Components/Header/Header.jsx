import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.css';
import { LOGOUT } from '../../redux/types';
import { connect } from 'react-redux';
import axios from 'axios';



const Header = (props) => {

	let navigate = useNavigate();

	const navegar = (lugar) => {
		console.log("me meto aqui"); // mirar esto
        setTimeout(() => {
            navigate(lugar);
        }, 200);
    }

	const [nombre, setNombre] = useState("");

	const logOut = () => {
        //Borrar de RDX las credenciales
        props.dispatch({ type: LOGOUT });

        setTimeout(() => {
            navigate("/");
        }, 1500);
    }


if (!props.credenciales?.token) {
return(
	
	  <div className="contenedorHeader">

		<div className="logo" onClick={()=>navegar("/")}><b>Tasty</b></div>

       
		<div className="entrar">
			<div className="registro" onClick={()=>navegar("/register")}>Registro</div> 
			
			<div className="acceso" onClick={()=>navegar("/login")} >Acceso</div>

						
		</div>

		  
	  </div>
	)
} else {
	return ( 

		<div className="contenedorHeader">
			<div className="logo" onClick={()=>navegar("/")}><b>Tasty</b></div>

			
		<div className="entrar">

		<div className="link" onClick={()=>navegar('/perfil')} >{props.credenciales?.usuario.nombre} {props.credenciales?.usuario.apellido}</div>

		<div className="" onClick={() => logOut()}>Logout</div>

			{/* <div className="registro" onClick={()=>navegar("/register")}>Registro</div> 
			
			<div className="acceso" onClick={()=>navegar("/login")} >Acceso</div> */}
		
		</div>



		</div>
	)
}
};

// export default Header;

export default connect((state) => ({
    credenciales: state.credenciales,
  }))(Header);