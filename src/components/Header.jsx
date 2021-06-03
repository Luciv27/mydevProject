import React from 'react';
import iconName from '../assets/static/logonombre.png';
import '../assets/styles/components/Header.scss';


document.addEventListener('DOMContentLoaded', function() {
    const navPrincipal = document.getElementById('navbar');
    const offsetNav = navPrincipal.offsetTop;

    const sticky = () => {    
        
        if(window.pageYOffset >= offsetNav){
            navPrincipal.classList.add("sticky");
        }else{
            navPrincipal.classList.remove("sticky");
        }

    }
    window.onscroll = function(){sticky()} ;

});


const Header = () => {
    return(
        <nav id="navbar" className="nav_principal">
            <img src={iconName} className="icon"/> 
            <div className="menu-nav">
                <ul>
                    <input type="text" placeholder="Buscar..." />    
                    <li>Inicio</li>
                    <li>Iniciar sesión</li>
                    <button>Registrate</button>
                </ul>
            </div>
        </nav>
    );
    
    
};

export default Header;