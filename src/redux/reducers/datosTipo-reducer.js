import {TIPO} from '../types';

const initialState = {
    tipo: ""
};

const busquedaTipoReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO LOS DATOS DEL TIPO
        case TIPO :
            return action.payload;

        default :
            return state
    }
}

export default busquedaTipoReducer;