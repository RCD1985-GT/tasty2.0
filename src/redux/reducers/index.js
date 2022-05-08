

import {combineReducers} from 'redux';

import tipo from './datosTipo-reducer';

import recetaSeleccionada from './detallesReceta-reducer';

import credenciales from './datosLogin-reducer';



const rootReducer = combineReducers({
    tipo, recetaSeleccionada, credenciales
});

export default rootReducer;