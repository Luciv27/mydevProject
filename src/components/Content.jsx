import React from 'react';
import imgEx from '../assets/static/indexej.jpg';
import portEx from '../assets/static/port.png';
import iconEx from '../assets/static/bl.png';
import '../assets/styles/components/Content.scss';

const Container = () => (
    <section className="content">        
        <div className="intro">
            <img className="portEx" src={portEx} alt="mydev logo" />
            <img className="groupIcon" src={iconEx} alt="mydev expl" />
            
        </div>
        <div className="intro">
            <p className="firstPhrase">¡Tus amigos y tu portafolio en un mismo lugar!</p>   
        </div>
        
        
        
        <div className="info">
            <div className="container-info-1">
                 <p className="secondPhrase">Mydev es una plataforma online en donde podrás contribuir, charlar  y mostrar tu talento como desarrollador al mundo. Todo lo que necesitas en un mismo lugar!</p>
                 <button className="button-content">Registrate</button>
            </div>
            
            <div className="container-info-2">
                <img className="imgEx" src={imgEx} alt="mydev1"/>   
            </div>
            
           
        </div>
    </section>

);

export default Container;