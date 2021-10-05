import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "../assets/styles/components/Register.scss";
import Header from "../components/Header";

const Register = () => {
  const initialFormState = {
    usuario: "",
    nombre: "",
    avatar: {},
    biografia: "",
    profesion: "",
    correo: "",
    pass: "",
  };
  const [formValues, setFormValues] = useState(initialFormState);
  const [isUserIsRegistered, setIsUserIsRegistered] = useState(false);

  const handleInputChangeUser = (event) => {
    const { value } = event.target;
    setFormValues({ ...formValues, usuario: value });
  };

  const handleInputChangeName = (event) => {
    const { value } = event.target;
    setFormValues({ ...formValues, nombre: value });
  };

  const handleInputChangeAvatar = (event) => {
    const value = event.target.files[0];
    let obj = new FileReader();
    obj.readAsDataURL(value);
    obj.onloadend = function (e) {
      setFormValues({ ...formValues, avatar: obj.result });
    };
  };

  const handleInputChangeBio = (event) => {
    const { value } = event.target;
    setFormValues({ ...formValues, biografia: value });
  };

  const handleInputChangeProfesion = (event) => {
    const { value } = event.target;
    setFormValues({ ...formValues, profesion: value });
  };

  const handleInputChangeEmail = (event) => {
    const { value } = event.target;
    setFormValues({ ...formValues, correo: value });
  };

  const handleInputChangePassword = (event) => {
    const { value } = event.target;
    setFormValues({ ...formValues, pass: value });
  };

  const signupCallApi = (request) => {
    return axios
      .post("http://localhost:8000/api/register", request)
      .then(function (response) {
        setIsUserIsRegistered(true);
      })
      .catch(function (error) {
        console.log("ERROR");
        console.log(error);
      });
  };

  const signupUser = (e) => {
    e.preventDefault();
    if (
      !formValues.usuario ||
      !formValues.nombre ||
      !formValues.avatar ||
      !formValues.biografia ||
      !formValues.profesion ||
      !formValues.correo ||
      !formValues.pass
    ){return;}
    signupCallApi(formValues);
  };

  return (
    <>
      <Header />
      <section className="register">
        {isUserIsRegistered ? <Redirect to="/login" /> : null}
        <h2>Registrate</h2>
        <form onSubmit={signupUser} className="register-form">
          <label htmlFor="">Ingresa el usuario</label>
          <input type="text" name="usuario" onChange={handleInputChangeUser} required />
          <label htmlFor="">Ingresa tu nombre</label>
          <input type="text" name="nombre" onChange={handleInputChangeName} required />
          <label htmlFor="">Sube una foto de perfil </label>
          <input
            type="file"
            accept="image/*"
            name="avatar"
            id="fileavatar"
            onChange={handleInputChangeAvatar}
          />
          <label htmlFor="">Cuentanos sobre ti</label>
          <input type="text" name="biografia" onChange={handleInputChangeBio}  required/>
          <label htmlFor="">¿Cuál es tu profesión?</label>
          <input
            type="text"
            name="profesion"
            onChange={handleInputChangeProfesion}
            required
          />
          <label htmlFor="">Ingresa tu email de contacto (Se mostrará para que los usuarios puedan contactarte)</label>
          <input type="email" name="correo" onChange={handleInputChangeEmail} required/>
          <label htmlFor="">Ingresa tu contraseña</label>
          <input
            type="password"
            name="pass"
            onChange={handleInputChangePassword}
            required
          />
          <button type="submit">Registrate</button>
        </form>
      </section>
    </>
  );
};

export default Register;
