import React from 'react';
import '../assets/styles/components/Register.scss';

const Login = () => (
    <section className="register login-form">
        <h2>Iniciar sesion</h2>
        <form className="register-form">
            <label htmlFor="">Ingresa el usuario</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Ingresa tu contraseña</label>
            <input type="password" name="" id="" />
            <button type="button">Inicia sesión</button>
        </form>
    </section>
);

export default Login;