import React, {useState} from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = () => {
    const initialLoggedUser = localStorage.getItem("myDevLoggedUserData")
    ? true
    : false;
  const [isUserLogged, setIsUserLogged] = useState(initialLoggedUser);
    return(

        <footer>
            <a href="#">Términos y condiciones</a>
            <a href="#">Acerca del servicio</a>
            {isUserLogged ?
                <p>¿Ya tienes cuenta? <a href="#">Inicia sesión</a></p>
                : null
            }
            
            
                
        </footer>
    )
};

export default Footer;