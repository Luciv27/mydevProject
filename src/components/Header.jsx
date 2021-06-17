import React from 'react';
import { Link } from 'react-router-dom';
import iconName from '../assets/static/logonombre.png';
import '../assets/styles/components/Header.scss';


const Header = () => {
    return(
        <nav id="navbar" className="nav_principal sticky">
            <Link to="/">
                <img src={iconName} className="icon"/> 
            </Link>
            <div className="menu-nav">
                <ul>
                    <input type="text" placeholder="Buscar..." />    
                    <li className="homebutton"><Link to="/index">Inicio</Link></li>
                    <li className="loginbutton">Iniciar sesión</li>
                    <button>Registrate</button>
                </ul>
            </div>
        </nav>
    );
    
};

export default Header;