
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './Tipo.css';
import { DETALLES_RECETA } from '../../redux/types';


const Tipo = (props) => { 

    // Navegar
    let navigate = useNavigate();

    const navegar = () => {
            navigate("/detalles");
    }

    // Hook
    const [recetas, setRecetas] = useState([])

    // Use effect montaje
    useEffect(()=>{
        traeTipo();
    },[]);


 // Funcion escoger receta
 const escogeReceta = (receta) => {
            
    console.log(receta);
    //Guardamos la receta escogida en REDUX 
    props.dispatch({type:DETALLES_RECETA, payload: receta});
    console.log("receta guardada en Redux")


    //Redirigimos a la vista de detalles Receta con navigate
    navigate("/detallesReceta"); 
}

    // Funcion que trae recetas segun el tipo  ....${props.tipo}
    const traeTipo = async () => {
        console.log("entro enfuncion que trae tipo")
            try {

            let resultado = await axios.get(`http://localhost:3300/recetas/${props.tipo}`); 
            console.log(resultado)
            setRecetas(resultado.data);
            console.log("receta guardada en Hook")
           

        } catch (error) {
            console.log(error);
        }
    };


    return(

        <div className="contenidoTipo">

        {recetas.map(item => {

            return (

                <div className="itemTipo" key={item.id} onClick={()=>escogeReceta(item)} >
                    {/* <img src={item.poster} alt={item.id}/> */}
                    <p className="titulo">{item.titulo}</p>
                </div>
            )


        })
        }


        </div>
    )

}

export default connect((state) => ({
    tipo: state.tipo
}))(Tipo);