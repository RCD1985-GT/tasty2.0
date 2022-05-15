import React from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { TIPO } from '../../redux/types';
import { useNavigate } from 'react-router-dom';


const Home = (props) => {

    // Variables locales
    let navigate = useNavigate();

    const navegar = (lugar, criterio) => {

        //Guardamos en REDUX el criterio
        props.dispatch({ type: TIPO, payload: criterio });

        navigate(lugar);
    }
    return (
        <div className='diseñoHome'>
            <div className="contenedorInfo"> </div>
            <div className="contenedorTipos">
                <div className="bloque1Tipos">
                    <div className="bloque1Tipos1" onClick={() => navegar("/tipo", "ensalada")}></div>
                    <div className="bloque1Tipos2" onClick={() => navegar("/:tipo", "asado")}></div>
                    <div className="bloque1Tipos3" onClick={() => navegar("/:tipo", "salsa")}></div>
                    <div className="bloque1Tipos4" onClick={() => navegar("/:tipo", "crujiente")}></div>
                </div>
                <div className="bloque2Tipos">
                    <div className="bloque2Tipos1" onClick={() => navegar("/:tipo", "crudo")}></div>
                    <div className="bloque2Tipos2" onClick={() => navegar("/:tipo", "vegano")}></div>
                    <div className="bloque2Tipos3" onClick={() => navegar("/:tipo", "picante")}></div>
                    <div className="bloque2Tipos4" onClick={() => navegar("/:tipo", "especiado")}></div>
                </div>
                <div className="bloque3Tipos">
                    <div className="bloque3Tipos1" onClick={() => navegar("/:tipo", "pescado")}></div>
                    <div className="bloque3Tipos2" onClick={() => navegar("/:tipo", "carne")}></div>
                    <div className="bloque3Tipos3" onClick={() => navegar("/:tipo", "plancha")}></div>
                    <div className="bloque3Tipos4" onClick={() => navegar("/:tipo", "cocido")}></div>
                </div>
            </div>
            <div className="contenedorInfo"></div>
        </div>
    )
};

export default connect()(Home);
