import React from 'react';
import { Link } from 'react-router-dom';
import Posts from '../components/Posts';
import '../assets/styles/components/Index.scss';

const Index = () => (
    <section className="homeindex">
        
        <div className="posts-column">
            <Posts/>
        </div>
    </section>
);

export default Index;