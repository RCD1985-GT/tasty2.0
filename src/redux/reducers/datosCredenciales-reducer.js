import {CREDENCIALES} from '../types';

const initialState = {
    credenciales: ""
};

const credencialesReducer = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO LAS CREDENCIALES
        case CREDENCIALES :
            return action.payload;

        default :
            return state
    }
}

export default credencialesReducer;