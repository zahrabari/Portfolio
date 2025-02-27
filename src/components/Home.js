import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import profileImage from "./me.jpeg";
import './Home.css';


 // Custom CSS file
import backgroundVideo from "./titi.mp4";
import logo from "./withbt.png"; // Ensure you have the logo imported

export default function Home() {
  return (
    <div className="home-container position-relative vh-100">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      
      {/* Rest of the content with a dark overlay */}
      <div className="position-relative h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        {/* Header Section */}
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              {/* Logo */}
              <a className="navbar-brand" href="/">
                <img src={logo} alt="Logo" className="logo" />
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
                aria-label="Toggle navigation">
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
  <a className="nav-link menu" href="projects">
    <i className="bi bi-file-earmark-code-fill"></i> 
  </a>
</li>
<li className="nav-item">
  <a className="nav-link menu" href="/skills">
    <i className="bi bi-code-slash"></i>
  </a>
</li>
<li className="nav-item">
  <a className="nav-link menu" href="/cv zahra bari.pdf" download>
    <i className="bi bi-download "></i>
  </a>
</li>

</ul>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <div className="container text-center mt-5 cont">
          <p className="text-xl">Hey 👋 I'm</p>
          <div className="profile">
            <img src={profileImage} alt="Profile" className=" profile-img" />
          </div>

          <div className="vl-text">
            <h2 className="text-5xl font-bold mt-2">ZAHRA BARI</h2>
            <p className="text-lg mt-2">Web Developer.</p>

            {/* Social Media Links */}
            <div className="d-flex justify-content-center gap-3 mt-4 ">
              <a href="https://github.com/zahrabari" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="icons">
                <i className="bi bi-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/zahra-bari-166987351" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="icons">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="https://wa.me/0639848052" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="icons">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
