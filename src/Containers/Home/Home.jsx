import React from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { TIPO } from '../../redux/types';
import {useNavigate} from 'react-router-dom';


const Home = (props) => {

    let navigate = useNavigate();

	const navegar = (lugar,criterio) => {

		//Guardamos en REDUX el criterio
        props.dispatch({type: TIPO, payload: criterio});

        navigate(lugar);
    }


    return(
        <div className='diseñoHome'>
         
             <div className="contenedorInfo"> 
                <div className='infoTipos'>
                <b>Bienvenido a TASTY...un recetario donde guiarte por tus instintos</b>
                </div>
            </div>
            <div className="contenedorTipos">

                <div className="bloque1Tipos">
                    <div className="bloque1Tipos1" onClick={()=>navegar("/:genero","ensalada")}>ENSALADA</div>
                    <div className="bloque1Tipos2" onClick={()=>navegar("/:genero","animacion")}>ASADO</div>
                    <div className="bloque1Tipos3" onClick={()=>navegar("/:genero","belico")}>SALSA</div>
                    <div className="bloque1Tipos4" onClick={()=>navegar("/:genero","ciencia")}>CRUJIENTE</div>
                </div>

                <div className="bloque2Tipos">
                    <div className="bloque2Tipos1" onClick={()=>navegar("/:genero","clasicos")}>CRUDO</div>
                    <div className="bloque2Tipos2" onClick={()=>navegar("/:genero","comedia")}>VEGANO</div>
                    <div className="bloque2Tipos3" onClick={()=>navegar("/:genero","documental")}>PICANTE</div>
                    <div className="bloque2Tipos4" onClick={()=>navegar("/:genero","drama")}>ESPECIADO</div>
                </div>

                <div className="bloque3Tipos">
                    <div className="bloque3Tipos1" onClick={()=>navegar("/:genero","infantil")}>PESCADO</div>
                    <div className="bloque3Tipos2" onClick={()=>navegar("/:genero","musical")}>CARNE</div>
                    <div className="bloque3Tipos3" onClick={()=>navegar("/:genero","romantica")}>PLANCHA</div>
                    <div className="bloque3Tipos4" onClick={()=>navegar("/:genero","terror")}>COCIDO</div>
                </div>

               
            </div>    

        </div>
    )   
};

export default connect()(Home);
