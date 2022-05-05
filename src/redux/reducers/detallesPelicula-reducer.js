import {DETALLES_PELICULA} from '../types';

const estadoInicial = {
    pelicula: {},
    
};

const seleccionPeliculaReducer = (state = estadoInicial, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO LOS DATOS DE LAS PELICULAS
        case DETALLES_PELICULA :
            return action.payload; // muevo el contenido sin modificar

        // case MOVIES_TITLE :
        //     return {...state, peliculas: action.payload};

        default :
            return state
    }
}

export default seleccionPeliculaReducer;