import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
import "./components/Experiences/Experiences";
import Experiences from "./components/Experiences/Experiences";
import "./components/Education/Education";
import Education from "./components/Education/Education";
import Testimonials from "./components/Testimonials/Testimonials";


function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ScrollProgress />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Education/>
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
