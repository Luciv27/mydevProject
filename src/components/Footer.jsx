import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
    <footer>
        <a href="#">Términos y condiciones</a>
        <a href="#">Acerca del servicio</a>
        <div className="second-search">
            <p>Busca personas aquí:</p>
            <input type="text" placeholder="Buscar..." />
        </div>
        <p>¿Ya tienes cuenta? <a href="#">Inicia sesión</a></p>
        <div>
            <button className="thirdreg-button">Registrate</button> 
        </div>
              
    </footer>
);

export default Footer;