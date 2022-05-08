import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Header.css';



const Header = () => {

	let navigate = useNavigate();

	const navegar = (lugar) => {

		console.log("me meto aqui"); // mirar esto

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }



return(
	
	  <div className="contenedorHeader">

		<div className="logo" onClick={()=>navegar("/")}><b>Tasty</b></div>

       

		<div className="entrar">
			<div className="registro" onClick={()=>navegar("/register")}>Registro</div> 
			
			<div className="acceso" onClick={()=>navegar("/login")} >Acceso</div>

			{/* <div className="admin" onClick={()=>navegar("/admin")} >Admin</div> */}
			
		</div>

		  

	  </div>
	);
  };

export default Header;