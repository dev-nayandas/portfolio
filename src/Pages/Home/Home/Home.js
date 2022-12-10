import React from 'react';
import ParticalBackground from '../../Background/ParticalBackground';

import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Hero from './Hero';


const Home = () => {
    return (
     
      <div>
            <Hero></Hero>
          <Skills></Skills>
          <Projects></Projects>
      
          <Contact></Contact>
      </div>
       
    );
};

export default Home;