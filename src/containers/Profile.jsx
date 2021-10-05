import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import '../assets/styles/components/Profile.scss';
import ghicon from '../assets/static/gh.png';
import twicon from '../assets/static/twbl.png';
require("babel-polyfill");

import igicon from '../assets/static/ig.png';
import lkicon from '../assets/static/li.png';
import Projects from '../components/Projects';

const Profile = () => {

    const initialLoggedUser = localStorage.getItem('myDevLoggedUserData') ? true : false
    const [isUserLogged, setIsUserLogged] = useState(initialLoggedUser)
    const [itHasResults, setItHasResults] = useState(initialSearchResults);
    const searchResults = JSON.parse(localStorage.getItem("searchUsersResults"));
    const userInfo = JSON.parse(localStorage.getItem('myDevLoggedUserData'))
    const [userData, setUserData] = useState(!itHasResults ? userInfo : searchResults);
    const initialSearchResults = localStorage.getItem("searchUsersResults")
    ? true
    : false;
    
    
    

    return  (
    <>
        <Header/>
        <div className="profile">
            {!isUserLogged ? <Redirect to='/login' /> : null}
            <div className="profile-info">
                <div className="info-user">
                    <h1>{userData.nombre}</h1>
                    <h3>{userData.profesion}</h3>
                    <p>{userData.biografia}</p>
                </div>
                <div className="info-profile">
                    <img src={userData.avatar} alt="" />
                    <p>@{userData.usuario}</p>
                    <div className="social-media">
                    </div>

                </div>
            </div>
            <div className="projects">
                <Projects/>
            </div>
        </div>
    </>
    );
};

export default Profile;