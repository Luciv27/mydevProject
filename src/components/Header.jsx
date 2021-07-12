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
            <form>
                <input type="text" placeholder="Buscar..." />
                <Link to="/search"><button>Buscar</button></Link> 
            </form>
            <div className="menu-nav">
                <ul>
                    
                    <li className="homebutton"><Link to="/index">Inicio</Link></li>
                    <Link to="/login"><li className="loginbutton">Iniciar sesión</li></Link>
                    <Link to="/register"><button>Registrate</button></Link>
                </ul>
            </div>
        </nav>
    );
    
};

export default Header;