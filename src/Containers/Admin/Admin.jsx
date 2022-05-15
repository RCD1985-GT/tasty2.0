import React from 'react';
import './Admin.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const Admin = (props) => {

  // Variables locales
  let navigate = useNavigate();

  // Funcion navegar a AdminVerUsuarios
  const navegar1 = () => {
    navigate("/adminVerUsuarios");
  }

  // Funcion navegar a AdminVerRecetas
  const navegar2 = () => {
    navigate("/adminVerRecetas");
  }

  // Funcion navegar a AdminCrearReceta
  const navegar3 = () => {
    navigate("/adminCrearReceta");
  }

  // UseEffect 1
  useEffect(() => {
    if (props.credenciales.usuario.rol === false) {
      navigate('/');
    }
  })

  return (

    <div className="diseñoAdmin">
      <div className="contenedorAdmin">
        <div className="dato" onClick={() => navegar1("/adminVerUsuarios")}>VER USUARIOS</div>
        <div className="dato" onClick={() => navegar2("/adminVerRecetas")}>VER RECETAS</div>
        <div className="dato" onClick={() => navegar3("/adminCrearReceta")}>NUEVA RECETA</div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  credenciales: state.credenciales,
}))(Admin);


