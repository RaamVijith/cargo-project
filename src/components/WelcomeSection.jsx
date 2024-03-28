import React from "react";
import "../styles/WelcomeSection.css";
import Welcome1 from "../assets/welcome1.png";
import Welcome2 from "../assets/welcome2.jpg";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <section id="welcomePage" className="welcomeSection">
      <motion.div
        className="welcome--left"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img className="welcomepic-1" src={Welcome1} alt="welcome pic" />
        <img className="welcomepic-2" src={Welcome2} alt="welcome pic" />
      </motion.div>

      <motion.div className="welcome--right"
      initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <h1>
          TransMax Logistics Around <span>the World</span>
        </h1>
        <p>
          Transmax is the world's driving worldwide coordination supplier -- we
          uphold industry and exchange the worldwide trade of merchandise
          through land transport.
          <br />
          <br /> Our worth added administration grantee the progression of
          products proceed consistently and supply chain stay learn and
          streamilined for process.
        </p>
        <button> MORE ABOUT US</button>
      </motion.div>
    </section>
  );
};

export default WelcomeSection;
