import React from 'react';
import './Footer.css';


const Footer = () => {
	return(
		
	  <div className="contenedorFooter">
		<div className="contenidoFooter">
{/* 
			<div className="arribaIzquierdaFooter">
				<a href="#"> Contacto</a>
				<a href="#"> Aviso Legal</a>
			</div> */}

			<div className="iconosFooter">
				<div className="iconoFacebook"></div> 
				<div className="iconoInstagram"></div>
				<div className="iconoTwitter"></div>
			</div>
		</div>

		{/* <div className="abajoFooter">
			  <div className="caja1"></div>
			  <div className="caja2"></div>
			  <div className="caja3"></div>
		</div> */}
	  </div>
	);
  };
export default Footer;