import React from 'react';
import '../assets/styles/components/Search.scss';
import wolfImg from '../assets/static/wolf.jpg';

const Search = () => (
    <section className="search">
        <ul className="results-search">
            <li className="result">
                <div>
                    <img src={wolfImg} alt="" />
                
                    <h2>Nombre nombre</h2>
                    <p>Profesión de la persona</p>
                </div>
            </li>
        </ul>
        <ul className="results-search">
            <li className="result-none">
                <div>
                    <h2>No se han enctrado resultados para tu busqueda</h2>
                </div>
            </li>
        </ul>
    </section>

);

export default Search;