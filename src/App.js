import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PixelTrail from "./components/PixelTrail";
import Home from "./components/Home";
import About from "./components/About";
import Skills from"./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />


         
          {/* Add more routes as needed */}
        </Routes>
        
        {/* Only render PixelTrail when not on the About page */}
        <Routes>
          <Route path="/" element={
            <div style={{ height: "500px", position: "relative", overflow: "hidden" }}>
              <PixelTrail
                gridSize={50}
                trailSize={0.1}
                maxAge={250}
                interpolate={5}
                color="#FF1493"
                gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
              />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
