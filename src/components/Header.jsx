import React, { useState } from "react";
import { Link } from "react-router-dom";
import iconName from "../assets/static/logonombre.png";
import "../assets/styles/components/Header.scss";

const Header = () => {
  //USER LOGGED?
  const initialLoggedUser = localStorage.getItem("myDevLoggedUserData")
    ? true
    : false;
  const [isUserLogged, setIsUserLogged] = useState(initialLoggedUser);

  //LOGOUT USER
  const logoutUser = () => {
    localStorage.clear();
    location.href = "/";
  };

  //FORM SEARCH USER

  return (
    <nav id="navbar" className="nav_principal sticky">
      <Link to="/">
        <img src={iconName} className="icon" />
      </Link>
      <div className="menu-nav">
        {!isUserLogged ? (
          <ul>
            <li className="homebutton">
              <Link to="/search">Buscar</Link>
            </li>
            <li className="homebutton">
              <Link to="/">Inicio</Link>
            </li>
            <Link to="/login">
              <li className="loginbutton">Iniciar sesión</li>
            </Link>
            <Link to="/register">
              <button>Registrate</button>
            </Link>
          </ul>
        ) : (
          <ul>
            <li className="homebutton">
              <Link to="/search">Buscar</Link>
            </li>
            <li className="homebutton">
              <Link to="/index">Muro</Link>
            </li>
            <Link to="/profile">
              <li className="loginbutton">Perfil</li>
            </Link>
            <button onClick={logoutUser}>Cerrar sesión</button>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
