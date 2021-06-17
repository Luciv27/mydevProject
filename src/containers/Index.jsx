import React from 'react';
import { Link } from 'react-router-dom';
import Posts from '../components/Posts';
import profileExample from '../assets/static/wolf.jpg';
import profExample from '../assets/static/astroex.jpg';
import '../assets/styles/components/Index.scss';

const Index = () => (
    <section className="homeindex">
        <div className="quick-access">
            <h3>Acceso rápido</h3>
            <ul className="shortcuts">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/profile">Perfil</Link></li>
                <li><a href="">Amigos</a></li>
            </ul>
        </div>
        <div className="posts-column">
            <Posts/>
        </div>
        <div className="new-users">
            <h3>Usuarios nuevos</h3>
            <div className="profile-mini">
                <img src={profileExample} alt="" />
                <p>Luciano Alzate</p>
            </div>
            <div className="profile-mini">
                <img src={profExample} alt="" />
                <p>Yazmin Alvarado</p>
            </div>
            <div className="profile-mini">
                <img src={profExample} alt="" />
                <p>Camila Henao</p>
            </div>
        </div>
    </section>
);

export default Index;