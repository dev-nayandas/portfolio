import React from "react";
import ParticalBackground from "../../Background/ParticalBackground";
import AboutMe from "../AboutMe/AboutMe";

import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
