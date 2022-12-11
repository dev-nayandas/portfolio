import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {

  return (
    // <motion.div animate={{ y: 50 }} transition={{ ease: "easeOut", duration: 2 }} >
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      
      style={{
        
        backgroundImage: `url("https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-electronic-technology-website-texture-background-banner-image_156039.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      opacity={{ opacity: 1.0 }}
    >
      <div style={{}} className="hero bg-[#381C59] text-white ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            style={{ marginBottom: "-17px" }}
            src="https://i.ibb.co/m67rFC2/pro.png"
          />
          <div className="w-1/2 ">
            <h1 className="text-6xl text-[#F5EBE0] mb-20">Hi, I'm <span className="text-[#FF7F11]">Nayan Das</span> MERN Stack <span className="text-[#EC34FE]">Developer</span></h1>

            <a
              className=" "
              target="_blank"
              href="https://drive.google.com/file/d/1-UEhaDmgaczUGGlmGNUu5Wmv635j8Ycz/view?usp=share_link"
            >
              <button className="btn bg-gradient-to-r from-indigo-500">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
