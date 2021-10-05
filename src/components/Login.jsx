import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import '../assets/styles/components/Register.scss';

const Login = props => {
    const initialFormState = { usuario: '', password: '' }
    const [formValues, setFormValues] = useState(initialFormState)
    const initialLoggedUser = localStorage.getItem('myDevLoggedUserData') ? true : false
    const [isUserLogged, setIsUserLogged] = useState(initialLoggedUser)

    const handleInputChangeUsuario = event => {
        const { value } = event.target;
        setFormValues({ ...formValues, usuario: value })
    }

    const handleInputChangePassword = event => {
        const { value } = event.target;
        setFormValues({ ...formValues, password: value });
    }

    const loginCallApi = (request) => {
        return axios.post('http://localhost:8000/api/login', request)
            .then(function(response) {
                localStorage.setItem('myDevLoggedUserData', JSON.stringify(response.data))
                setIsUserLogged(true)
            })
            .catch(function(error) {
                console.log("ERROR");
                console.log(error);
            });
    }

    const authuser = e => {
        e.preventDefault();
        if (!formValues.usuario || !formValues.password) return
        loginCallApi(formValues)
    }

    return(
        <>
            <Header/>
            <section className="register login-form">
                {isUserLogged ? <Redirect to='/profile' /> : null}
                <h2>Iniciar sesion</h2>
                <form onSubmit={authuser} className="register-form">
                    <label htmlFor="">Ingresa el usuario</label>
                    <input type="text" name="usuario" id="user" onChange={handleInputChangeUsuario} />

                    <label htmlFor="">Ingresa tu contraseña</label>
                    <input type="password" name="password" id="pass" onChange={handleInputChangePassword} />

                    <button type="submit">Inicia sesión</button>
                </form>
            </section>
        </>
    );
};

export default Login;