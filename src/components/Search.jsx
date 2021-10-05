import React, { useState } from "react";
import "../assets/styles/components/Search.scss";
import Header from "../components/Header";
import axios from "axios";

const Search = () => {
  const [resultsData, setResultsData] = useState(null);

  const initialFormState = {
    username: "",
  };
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChangeNameField = (event) => {
    const { value } = event.target;
    setFormValues({ ...formValues, username: value });
  };

  const searchApi = (request) => {
    return axios
      .post("http://localhost:8000/api/search", request)
      .then(function (response) {
        setResultsData(response.data);
      })
      .catch(function (error) {
        console.log("ERROR");
        console.log(error);
      });
  };

  const searchUser = (e) => {
    e.preventDefault();
    document.getElementsByClassName("results-search")[0].style.display =
      "block";
    if (!formValues.username) return;
    searchApi(formValues);
  };

  return (
    <>
      <Header />
      <section className="search">
        <h1>Busqueda de usuarios</h1>
        <form onSubmit={searchUser}>
          <input
            type="text"
            name="username"
            onChange={handleInputChangeNameField}
            placeholder="Buscar..."
          />
          <button type="submit">Buscar</button>
        </form>
        {!resultsData ? (
          <ul className="results-search">
            <li className="result-none">
              <div>
                <h2>No se han encontrado resultados para tu busqueda</h2>
              </div>
            </li>
          </ul>
        ) : (
          <ul className="results-search">
            <li className="result">
              <div>
                <img src={resultsData.avatar} alt="" />
              </div>
              <div>
                <h2>{resultsData.nombre}</h2>
                <p>{resultsData.profesion}</p>
                <p>{resultsData.biografia}</p>
                <p>{resultsData.correo}</p>
              </div>
            </li>
          </ul>
        )}
      </section>
    </>
  );
};

export default Search;
