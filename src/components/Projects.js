import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import backgroundVideo from "./titi.mp4";
import logo from "./withbt.png";
import image1 from "./sweetring.jpg";
import image2 from"./mik.jpg"; // Ensure you have the logo imported
import image3 from "./ssm.jpg";
// Ensure you have the logo imported
// Ensure you have the logo imported
 // Fichier CSS personnalisé


const projectsData = [
  {
    id: 1,
    title: "Donuts",
    description: "Un site de vente en ligne avec React et Node.js.",
    image: image1,
    link: "https://zahrabari.github.io/site-web-donuts",
  },
  {
    id: 2,
    title: "Site E-commerce",
    description: "Une application de gestion des tâches avec MongoDB.",
    image: image3,
    link: "https://github.com/zahrabari/Furni.git",
  },
  {
    id: 3,
    title: "sitweb-de-se-maquillero",
    description: "Mon propre portfolio développé avec React.",
    image: image2,
    link: "https://github.com/zahrabari/sitweb-de-se-maquiller.git",
  },
];

export default function Projects() {
  return (
    
    <div className="projects-container position-relative vh-100">
      {/* Header Section */}
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            {/* Logo */}
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Logo" className="logo pr-4" />
              <span className="text-light"> Developer Web Full Stack</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navigation Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
              <li className="nav-item">
  <a className="nav-link menu" href="/">
  <i class="bi bi-house-door"></i>  </a>
</li>
                <li className="nav-item">
                  <a className="nav-link menu" href="/about">
                    <i className="bi bi-person-circle me-2"></i> 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link menu" href="/projects">
                    <i className="bi bi-file-earmark-code-fill"></i> 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link menu" href="/skills">
                    <i className="bi bi-code-slash"></i>
                  </a>
                </li>
                <a className="nav-link menu" href="/cv zahra bari.pdf" download>
    <i className="bi bi-download txt-white"></i>
  </a>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Projects Section */}
      <div className="container">
         <h2 className="text-center  tit">Mes Projets</h2> 
        <div className="row ">
          {projectsData.map((project) => (
            <div key={project.id} className="col-md-4">
              <div className="card project-card">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
   
  );
}