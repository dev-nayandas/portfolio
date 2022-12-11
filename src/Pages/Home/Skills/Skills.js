import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3.5 }}
      className="bg-[#5C4C8A] p-10"
      id="skills"
    >
      <div className="">
        <h1 className="text-6xl text-[#FA7D13] font-bold ">My Skills</h1>
      </div>
      <div className="mt-20 tex-white ">
        <button className="btn btn-outline btn-info mr-5">Html5</button>
        <button className="btn btn-outline btn-info mr-5">Css3</button>
        <button className="btn btn-outline btn-info mr-5">Javascript</button>
        <button className="btn btn-outline btn-info mr-5">ES6</button>
        <button className="btn btn-outline btn-info mr-5">React</button> <br />
        <div className="mt-5">
          <button className="btn btn-outline btn-info mr-5">
            React Router
          </button>
          <button className="btn btn-outline btn-info mr-5">Firebase</button>
          <button className="btn btn-outline btn-info mr-5">Express Js</button>
          <button className="btn btn-outline btn-info mr-5">Node Js</button>
          <button className="btn btn-outline btn-info mr-5">MongoDB</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
