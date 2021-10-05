import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import profileExample from "../assets/static/wolf.jpg";

const Posts = () => {
  const initialLoggedUser = localStorage.getItem("myDevLoggedUserData")
    ? true
    : false;
  const [isUserLogged, setIsUserLogged] = useState(initialLoggedUser);
  const userInfo = JSON.parse(localStorage.getItem("myDevLoggedUserData"));
  const [userData, setUserData] = useState(userInfo);

  const initialFormState = {
    idusuario: userData.idusuario,
    nombreusuario: userData.nombre,
    fotoperfil: userData.avatar,
    descripcionpub: "",
    contenidopub: {},
  };
  const [formValues, setFormValues] = useState(initialFormState);

  const [postData, setPostData] = useState([]);

  const handleInputChangePostDesc = (event) => {
    const { value } = event.target;
    setFormValues({ ...formValues, descripcionpub: value });
  };

  const handleInputChangePostImage = (event) => {
    const value = event.target.files[0];
    let obj = new FileReader();
    obj.readAsDataURL(value);
    obj.onloadend = function (e) {
      setFormValues({ ...formValues, contenidopub: obj.result });
    };
  };

  const postUploadApi = (request) => {
    console.log(request)
    return axios
      .post("http://localhost:8000/api/uplpost", request)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log("ERROR");
        console.log(error);
      });
  };

  const uploadPost = (e) => {
    e.preventDefault();
    //if (!formValues.usuario  || !formValues.nombre || !formValues.avatar || !formValues.biografia || !formValues.profesion || !formValues.correo || !formValues.pass) return
    postUploadApi(formValues);
  };

  const postsCallApi = async () => {
    return await axios
      .post("http://localhost:8000/api/posts")
      .then(function (response) {
        setPostData(response.data)
      })
      .catch(function (error) {
        console.log("ERROR");
        console.log(error);
      });
  };
  postsCallApi();

  return (
    <>
      {!isUserLogged ? <Redirect to="/login" /> : null}
      <h3>Publicaciones</h3>
      <div className="content-posts-column">
        <form onSubmit={uploadPost}>
          <textarea
            type="text"
            name="descripcionpub"
            placeholder="Escribe algo..."
            onChange={handleInputChangePostDesc}
          />
          <input type="file" name="contenidopub" onChange={handleInputChangePostImage} />
          <button>Publicar</button>
        </form>

        <ul>
        {postData.length > 0 ?
          <div>
            {postData.map((item) => (
                <li className="post-example" key={item.idpublicacion}>
                    <div className="profile-mini">
                        <img src={item.fotoperfil} alt="" />
                        <p>{item.nombreusuario}</p>
                    </div>
                    <div className="post" key={item.descripcionpub}>
                        <p>{item.descripcionpub}</p>
                        <img src={item.contenidopub} alt="" />
                    </div>
                </li>
            ))}
          </div>
          :null
        }
        
        
        </ul>
        
      </div>
    </>
  );
};

export default Posts;
