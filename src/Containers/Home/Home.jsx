import React from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { TIPO } from '../../redux/types';
import {useNavigate} from 'react-router-dom';


const Home = (props) => {

    // Variables locales
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
                    <div className="bloque1Tipos1" onClick={()=>navegar("/tipo","ensalada")}>ENSALADA</div>
                    <div className="bloque1Tipos2" onClick={()=>navegar("/:tipo","asado")}>ASADO</div>
                    <div className="bloque1Tipos3" onClick={()=>navegar("/:tipo","salsa")}>SALSA</div>
                    <div className="bloque1Tipos4" onClick={()=>navegar("/:tipo","crujiente")}>CRUJIENTE</div>
                </div>

                <div className="bloque2Tipos">
                    <div className="bloque2Tipos1" onClick={()=>navegar("/:tipo","crudo")}>CRUDO</div>
                    <div className="bloque2Tipos2" onClick={()=>navegar("/:tipo","vegano")}>VEGANO</div>
                    <div className="bloque2Tipos3" onClick={()=>navegar("/:tipo","picante")}>PICANTE</div>
                    <div className="bloque2Tipos4" onClick={()=>navegar("/:tipo","especiado")}>ESPECIADO</div>
                </div>

                <div className="bloque3Tipos">
                    <div className="bloque3Tipos1" onClick={()=>navegar("/:tipo","pescado")}>PESCADO</div>
                    <div className="bloque3Tipos2" onClick={()=>navegar("/:tipo","carne")}>CARNE</div>
                    <div className="bloque3Tipos3" onClick={()=>navegar("/:tipo","plancha")}>PLANCHA</div>
                    <div className="bloque3Tipos4" onClick={()=>navegar("/:tipo","cocido")}>COCIDO</div>
                </div>

               
            </div>    

        </div>
    )   
};

export default connect()(Home);
