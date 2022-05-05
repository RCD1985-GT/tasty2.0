

import {combineReducers} from 'redux';

import genero from './datosGenero-reducer';

import peliculaSeleccionada from './detallesPelicula-reducer';

import credenciales from './datosCredenciales-reducer';



const rootReducer = combineReducers({
    genero, peliculaSeleccionada, credenciales
});

export default rootReducer;