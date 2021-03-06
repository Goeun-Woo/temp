import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import NewSkills from "./components/skills_new";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <NewSkills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
