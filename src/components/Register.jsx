import React from 'react';
import '../assets/styles/components/Register.scss';

const Register = () => (
    <section className="register">
        <h2>Registrate</h2>
        <form className="register-form">
            <label htmlFor="">Ingresa el usuario</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Ingresa tu nombre</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Sube una foto de perfil </label>
            <input type="file" name="" id="fileavatar" />
            <label htmlFor="">Cuentanos sobre ti</label>
            <input type="text" name="" id="" />
            <label htmlFor="">A que te dedicas?</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Ingresa tu email</label>
            <input type="email" name="" id="" />
            <label htmlFor="">Ingresa tu contraseña</label>
            <input type="password" name="" id="" />
            <button type="button">Registrate</button>
        </form>
    </section>
);

export default Register;