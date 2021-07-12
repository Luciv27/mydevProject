import React from 'react';
import '../assets/styles/components/Profile.scss';
import profilePic from '../assets/static/wolf.jpg';
import ghicon from '../assets/static/gh.png';
import twicon from '../assets/static/twbl.png';
import igicon from '../assets/static/ig.png';
import lkicon from '../assets/static/li.png';

const Profile = () => (
    <div className="profile">
        <div className="profile-info">
            <div className="info-user">
                <h1>Luciano Alzate Restrepo</h1>
                <h3>Desarrollador de software</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc odio, 
                    elementum eu ipsum ac, condimentum placerat libero. Aliquam ac posuere dolor, 
                    nec tincidunt massa. In quis congue eros, et aliquam velit. Suspendisse vitae 
                    odio in nibh venenatis tincidunt. In egestas laoreet velit sed placerat. Aenean 
                    pharetra ac velit eget fermentum. Proin congue elementum nisl, vulputate consequat 
                    felis accumsan porttitor. Fusce sed nulla pretium, tincidunt ex at, lacinia mauris. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales ornare tristique. 
                    In metus ligula, iaculis et aliquet ac, euismod sed sapien. Pellentesque eu diam justo.
                     Morbi in tincidunt tortor, a mollis nibh.
                    </p>
            </div>
            <div className="info-profile">
                <img src={profilePic} alt="" />
                <p>@luciano2792</p>
                <div className="social-media">
                    <img src={ghicon} alt="" />
                    <img src={twicon} alt="" />
                    <img src={igicon} alt="" />
                    <img src={lkicon} alt="" />
                </div>

            </div>
        </div>
        <div className="projects">
            <h1>Mis proyectos</h1>
            <ul className="create-project">
                <li className="project-cr">
                    <h2>Sube tu proyecto</h2>
                    <form>
                        <div>
                            <label>Nombre del proyecto</label>
                            <input name="project-name" type="text" placeholder="Escribe un nombre" />
                            <label>Link del proyecto</label>
                            <input name="project-link" type="text" placeholder="Enlace directo a tu proyecto"/>
                            <label>Imagen del proyecto</label>
                            <input className="file-field" name="project-img" type="file" placeholder="Enlace directo a tu proyecto"/>
                        </div>
                        <div className="desc-field">
                            <label>Descripcion del proyecto</label>
                            <textarea name="project-description" placeholder="Descripcion del proyecto" cols="30" rows="10"></textarea>
                            <button>Subir proyecto</button>
                        </div>
                        
                    </form>
                </li>
            </ul>
            
            <ul className="project-list">
                <h2>Proyectos subidos</h2>
                <li className="project">
                    <div>
                        <img src={profilePic} alt="" />
                        <div>
                            <h2>Nombre nombre</h2>
                            <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc odio, 
                            elementum eu ipsum ac, condimentum placerat libero. Aliquam ac posuere dolor, 
                            nec tincidunt massa. In quis congue eros, et aliquam velit. Suspendisse vitae 
                            odio in nibh venenatis tincidunt. In egestas laoreet velit sed placerat. Aenean 
                            pharetra ac velit eget fermentum. Proin congue elementum nisl, vulputate consequat 
                            felis accumsan porttitor. Fusce sed nulla pretium, tincidunt ex at, lacinia mauris. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales ornare tristique. 
                            In metus ligula, iaculis et aliquet ac, euismod sed sapien. Pellentesque eu diam justo.
                            Morbi in tincidunt tortor, a mollis nibh.</p>
                            <p className="project-link">Link del proyecto</p>
                        </div>
                        
                    </div>
                </li>
            </ul>
        </div>
    </div>
);

export default Profile;