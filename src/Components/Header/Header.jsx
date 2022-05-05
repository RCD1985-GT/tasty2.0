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

		<div className="logo" onClick={()=>navegar("/")}><b>Movie World</b></div>

        <div className="secciones">
			<p className='textoSecciones' onClick={()=>navegar("/peliculas")}>Peliculas</p>
			<p className='textoSecciones' onClick={()=>navegar("/top20")}>Top20</p>
			<p className='textoSecciones' onClick={()=>navegar("/novedades")}>Novedades</p>

		</div>

		<div className="entrar">
			<div className="registro" onClick={()=>navegar("/registro")}>Registro</div> 
			
			<div className="acceso" onClick={()=>navegar("/acceso")} >Acceso</div>

			<div className="admin" onClick={()=>navegar("/admin")} >Admin</div>
			
		</div>

		  

	  </div>
	);
  };

export default Header;