import React from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { GENERO } from '../../redux/types';
import {useNavigate} from 'react-router-dom';


const Home = (props) => {

    let navigate = useNavigate();

	const navegar = (lugar,criterio) => {

		//Guardamos en REDUX el criterio
        props.dispatch({type: GENERO, payload: criterio});

        navigate(lugar);
    }


    return(
        <div className='diseñoHome'>
         
             <div className="contenedorInfo"> 
                <div className='infoGeneros'>
                <b>Bienvenido a Movie World</b>
                </div>
            </div>
            <div className="contenedorGeneros">

                <div className="bloque1Generos">
                    <div className="bloque1Generos1" onClick={()=>navegar("/:genero","accion")}>ACCION</div>
                    <div className="bloque1Generos2" onClick={()=>navegar("/:genero","animacion")}>ANIMACION</div>
                    <div className="bloque1Generos3" onClick={()=>navegar("/:genero","belico")}>BELICO</div>
                    <div className="bloque1Generos4" onClick={()=>navegar("/:genero","ciencia")}>CIENCIA</div>
                </div>

                <div className="bloque2Generos">
                    <div className="bloque2Generos1" onClick={()=>navegar("/:genero","clasicos")}>CLASICOS</div>
                    <div className="bloque2Generos2" onClick={()=>navegar("/:genero","comedia")}>COMEDIA</div>
                    <div className="bloque2Generos3" onClick={()=>navegar("/:genero","documental")}>DOCUMENTAL</div>
                    <div className="bloque2Generos4" onClick={()=>navegar("/:genero","drama")}>DRAMA</div>
                </div>

                <div className="bloque3Generos">
                    <div className="bloque3Generos1" onClick={()=>navegar("/:genero","infantil")}>INFANTIL</div>
                    <div className="bloque3Generos2" onClick={()=>navegar("/:genero","musical")}>MUSICAL</div>
                    <div className="bloque3Generos3" onClick={()=>navegar("/:genero","romantica")}>ROMANTICA</div>
                    <div className="bloque3Generos4" onClick={()=>navegar("/:genero","terror")}>TERROR</div>
                </div>

                <div className="bloque4Generos">
                    <div className="bloque4Generos1" onClick={()=>navegar("/:genero","thriller")}>THRILLER</div>
                    <div className="bloque4Generos2" onClick={()=>navegar("/:genero","western")}>WESTERN</div>
                </div>

            </div>    

        </div>
    )   
};

export default connect()(Home);
