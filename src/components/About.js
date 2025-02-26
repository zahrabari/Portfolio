import React from "react";
import "./Abour.css"; // Fixed typo in the filename

import backgroundVideo from "./titi.mp4";
import logo from "./withbt.png"; // Ensure you have the logo imported

export default function Before() { // Fixed function name
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
     <a className="nav-link menu" href="/projects">
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
    <i className="bi bi-download txt-white"></i>
  </a>
</li>
   </ul>
    </div>
    
     </div>
      </nav>
 </header>
 <div className="normal text-center  p-5">
  <p className="lead mb-4 animate__animated animate__fadeIn">
    I am a full-stack web developer interested in creating innovative and functional user experiences
  </p>
  <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-1s">
    With my proficiency in both front-end and back-end technologies
  </p>
  <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-2s">
    I design high-performance and convenient applications
  </p>
  <p className="lead mb-4 animate__animated animate__fadeIn animate__delay-3s">
    I am curious and constantly evolving, always looking for new challenges to hone my skills and deliver high-quality digital solutions. 🚀💻
  </p>
</div>
    {/* Social Media Links */}
    <div className="norsin justify-content-center gap-3 mt-4 ">
              <a href="https://github.com/zahrabari" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="icons">
                <i className="bi bi-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/votreprofil" 
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
         

        );
   }
   
