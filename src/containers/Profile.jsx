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
        <div className="languages">
            <div className="language-items">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    </div>
);

export default Profile;