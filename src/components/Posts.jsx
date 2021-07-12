import React from 'react';
import profileExample from '../assets/static/wolf.jpg';
import imgPost from '../assets/static/postexample.png';
import replyIcon from '../assets/static/reply.png';

const Posts = () => {
    return(
        <>
            <h3>Publicaciones</h3>
            <div className="content-posts-column">
                <form>
                    <textarea type="text" placeholder="Escribe algo..." />
                    <button>Publicar</button>
                </form>
                <div className="post-example">
                    <div className="profile-mini">
                        <img src={profileExample} alt="" />
                        <p>Luciano Alzate</p>
                    </div>
                    <div className="post">
                        <p>React router and Redux aren't a game</p>
                        <img src={imgPost} alt="" />
                    </div>
                    <div className="reply-post">
                        <img src={replyIcon} alt="" />
                        <p>Responde a esta pulicación</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Posts;