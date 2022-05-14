import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.css';
import { LOGOUT } from '../../redux/types';
import { connect } from 'react-redux';

const Header = (props) => {

	// Variables locales
	let navigate = useNavigate();

	// Funcion navegar
	const navegar = (lugar) => {
		navigate(lugar);
	}

	// Funcion Logout
	const logOut = () => {
		props.dispatch({ type: LOGOUT });
		setTimeout(() => {
			navigate("/");
		}, 1500);
	}
	
	// SI HAY TOKEN
	if (props.credenciales.token === '') {
		
		return (
			<div className="contenedorHeader">
				<div className="logo" onClick={() => navegar("/")}><b>Tasty</b></div>
				<div className='infoTipos'>
                    Bienvenido a TASTY...un recetario donde guiarte por tus instintos
                </div>
				<div className="entrar">
					<div className="registro" onClick={() => navegar("/register")}>Registro</div>
					<div className="acceso" onClick={() => navegar("/login")} >Acceso</div>
				</div>
			</div>
		)

		// SI ES ADMINISTRADOR
	} else if (props.credenciales.usuario.rol === true){
		return (
			<div className="contenedorHeader">
				<div className="logo" onClick={() => navegar("/")}><b>Tasty</b></div>
				<div className='infoTipos'>
                    Bienvenido a TASTY...un recetario donde guiarte por tus instintos
                </div>
				<div className="entrar">
					<div className="link" onClick={() => navegar('/perfil')} >{props.credenciales?.usuario.nombre} {props.credenciales?.usuario.apellido}</div>
					<div className="link" onClick={() => logOut()}>Logout</div>
					<div className="link" onClick={() => navegar('/admin')}>Zona Admin</div>
				</div>
			</div>
		) 
		// SI ESTA LOGUEADO
	} else {
		return (
			<div className="contenedorHeader">
				<div className="logo" onClick={() => navegar("/")}><b>Tasty</b></div>
				<div className='infoTipos'>
                    Bienvenido a TASTY...un recetario donde guiarte por tus instintos
                </div>
				<div className="entrar">
					<div className="link" onClick={() => navegar('/perfil')} >{props.credenciales?.usuario.nombre} {props.credenciales?.usuario.apellido}</div>
					<div className="link" onClick={() => logOut()}>Logout</div>
				</div>
			</div>
		) 
	}
};

export default connect((state) => ({
	credenciales: state.credenciales,
}))(Header);