import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaLaravel, FaReact, FaDatabase, FaJs, FaGit, FaGithub, FaPhp, FaPython } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import backgroundVideo from "./titi.mp4";
import logo from "./withbt.png"; // Ensure you have the logo imported
import "./skills.css"; // Import the CSS file

export default function Home() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 style={{ color: 'orange' }} className="fs-1" /> },
    { name: 'CSS', icon: <FaCss3Alt style={{ color: 'blue' }} className="fs-1" /> },
    { name: 'Bootstrap', icon: <FaBootstrap style={{ color: 'purple' }} className="fs-1" /> },
    { name: 'Laravel', icon: <FaLaravel style={{ color: 'red' }} className="fs-1" /> },
    { name: 'React', icon: <FaReact style={{ color: '#61DBFB' }} className="fs-1" /> },
    { name: 'MongoDB', icon: <SiMongodb style={{ color: 'green' }} className="fs-1" /> },
    { name: 'Database', icon: <FaDatabase style={{ color: 'gray' }} className="fs-1" /> },
    { name: 'JavaScript', icon: <FaJs style={{ color: 'yellow' }} className="fs-1" /> },
    { name: 'Git', icon: <FaGit style={{ color: 'orange' }} className="fs-1" /> },
    { name: 'GitHub', icon: <FaGithub style={{ color: 'black' }} className="fs-1" /> },
    { name: 'PHP', icon: <FaPhp style={{ color: 'indigo' }} className="fs-1" /> },
    { name: 'Python', icon: <FaPython style={{ color: 'gold' }} className="fs-1" /> }
  ];

  return (
    <div className="home-container position-relative vh-100">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="position-relative h-100 overlay">
        {/* Header Section */}
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img src={logo} alt="Logo" className="logo pr-4" />
                <span className="text-light"> Developer Web Full Stack</span>
              </a>
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
  <a className="nav-link menu" href="/">
  <i class="bi bi-house-door"></i>  </a>
</li>
                  <li className="nav-item"><a className="nav-link menu" href="/about"><i className="bi bi-person-circle me-2"></i> </a></li>
                  <li className="nav-item"><a className="nav-link menu" href="/projects"><i className="bi bi-file-earmark-code-fill"></i> </a></li>
                  <li className="nav-item"><a className="nav-link menu" href="/skills"><i className="bi bi-code-slash"></i> </a></li>
                  <li className="nav-item">
  <a className="nav-link menu" href="/cv zahra bari.pdf" download>
    <i className="bi bi-download txt-white"></i>
  </a>
</li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        
        {/* Skills Section */}
       {/* Skills Section */}
<section id="skills" className="container py-1">
  <h2 className="skills-title text-center">My Skills</h2>
  <p className="skills-subtitle text-center">Technologies I work with</p>
  <div className=" p-4 rounded shadow">
    <div className="row justify-content-center">
      {skills.map((skill, index) => (
        <div key={index} className="col-6 col-md-4 col-lg-2 text-center  p-3">
          <div className="p-3 rounded shadow-sm skill-box ">
            <div>{skill.icon}</div>
            <p className="mt-2 fw-bold">{skill.name}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      </div>
    </div>
  );
}
