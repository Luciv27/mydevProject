import React, { useState }  from "react";
import axios from 'axios';



const Projects = () => {
  
  const userInfo = JSON.parse(localStorage.getItem("myDevLoggedUserData"));
  const [userData, setUserData] = useState(userInfo);

  const [projectsData, setProjectData] = useState([]);

  const initialFormState = {
    idusuario: userData.idusuario,
    nombreproyecto: "",
    contenidopr: {},
    descripcion: "",
    linkdirecto: "",
  };
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChangeProjectName = (event) => {
    const { value } = event.target;
    setFormValues({ ...formValues, nombreproyecto: value });
  };

  const handleInputChangeImage = (event) => {
    const value = event.target.files[0];
    let obj = new FileReader();
    obj.readAsDataURL(value);
    obj.onloadend = function (e) {
      setFormValues({ ...formValues, contenidopr: obj.result });
    };
  };

  const handleInputChangeDesc = (event) => {
    const { value } = event.target;
    setFormValues({ ...formValues, descripcion: value });
  };

  const handleInputChangeDirectLink = (event) => {
    const { value } = event.target;
    setFormValues({ ...formValues, linkdirecto: value });
  };

  const projectCallApi =  () => {
    return axios
      .post("http://localhost:8000/api/project/" + userData.idusuario)
      .then(function (response) {
        setProjectData(response.data)
      })
      .catch(function (error) {
        console.log("ERROR");
        console.log(error);
      });
  };

  projectCallApi();

  const projectUploadApi = (request) => {
    return axios
      .post("http://localhost:8000/api/project", request)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log("ERROR");
        console.log(error);
      });
  };

  const uploadProject = (e) => {
    e.preventDefault();
    projectUploadApi(formValues);
  };

  return (
    <>
      <h1>Mis proyectos</h1>
      <ul className="create-project">
        <li className="project-cr">
          <h2>Sube tu proyecto</h2>
          <form onSubmit={uploadProject}>
            <div>
              <label>Nombre del proyecto</label>
              <input
                name="nombreproyecto"
                type="text"
                onChange={handleInputChangeProjectName}
                placeholder="Escribe un nombre"
              />
              <label>Link del proyecto</label>
              <input
                name="linkdirecto"
                type="text"
                onChange={handleInputChangeDirectLink}
                placeholder="Enlace directo a tu proyecto"
              />
              <label>Imagen del proyecto</label>
              <input
                className="file-field"
                name="contenidopr"
                type="file"
                onChange={handleInputChangeImage}
              />
            </div>
            <div className="desc-field">
              <label>Descripcion del proyecto</label>
              <textarea
                name="descripcion"
                placeholder="Descripcion del proyecto"
                onChange={handleInputChangeDesc}
                cols="30"
                rows="10"
              ></textarea>
              <button type="submit">Subir proyecto</button>
            </div>
          </form>
        </li>
      </ul>

      <ul className="project-list">
        <h2>Proyectos subidos</h2>
        {projectsData.length > 0 ?
          <div>
            {projectsData.map((item) => (
            <li className="project" key={item.idproyecto}>
              <div>
                <img src={item.contenidopr} alt="" />
                <div>
                  <h2>{item.nombreproyecto}</h2>
                  <p className="project-desc">{item.descripcion}</p>
                  <p className="project-link">{item.linkdirecto}</p>
                </div>
              </div>
            </li>
            ))}
          </div>
          : null
        }
      </ul>
    </>
  );
};

export default Projects;
