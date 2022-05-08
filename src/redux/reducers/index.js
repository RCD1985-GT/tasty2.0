

import {combineReducers} from 'redux';

import tipo from './datosTipo-reducer';

import detalles from './datosReceta-reducer';

import credenciales from './datosLogin-reducer';



const rootReducer = combineReducers({
    tipo, detalles, credenciales
});

export default rootReducer;