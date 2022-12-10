import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  <style></style>;
  return (
    // <motion.div animate={{ y: 50 }} transition={{ ease: "easeOut", duration: 2 }} >
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div style={{}} className="hero  text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/m67rFC2/pro.png" />
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="py-6">
              Hi there, this is Nayan Das a passionate MERN Developer. Building
              front-end structure and functionality with React JS,
              React-Router-Dom, react-query, firebase authenticity, etc, and
              giving it proper design with Tailwind, DaisyUI, or BOOTSTRAP give
              me pleasure and delights. Even making API and other Backend node
              js technology with coordination of Express JS, and MongoDB really
              commit a serious curiosity within me to make a web backend more
              efficient. I love to code and learn new technology so it enhances
              my knowledge and fills out my skill for working and adds some
              extra value to this Development sector.
            </p>

            <a
              className=" "
              target="_blank"
              href="https://drive.google.com/file/d/1-UEhaDmgaczUGGlmGNUu5Wmv635j8Ycz/view?usp=share_link"
            >
              <button className="btn ">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
