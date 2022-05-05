import {DETALLES_RECETA} from '../types';

const estadoInicial = {
    receta: {},
    
};

const seleccionRecetaReducer = (state = estadoInicial, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO LOS DATOS DE LAS RECETAS
        case DETALLES_RECETA :
            return action.payload; // muevo el contenido sin modificar

        // case MOVIES_TITLE :
        //     return {...state, peliculas: action.payload};

        default :
            return state
    }
}

export default seleccionRecetaReducer;