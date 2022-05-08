import {DETALLES} from '../types';

const estadoInicial = {
    receta: {},
    
};

const seleccionRecetaReducer = (state = estadoInicial, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO LOS DATOS DE LAS RECETAS
        case DETALLES :
            return action.payload; // muevo el contenido sin modificar

       
        default :
            return state
    }
}

export default seleccionRecetaReducer;