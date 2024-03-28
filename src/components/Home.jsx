import React from "react";
import "../styles/Home.css";
import Home_image from "../assets/home-pic.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="home">
    
      <motion.div
        className="content--left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>
          Best Shiping <br />
          <span className="span">Partner</span>
        </h2>
        <p>
          Amet, temps egestar facllisis volutpat viverra molestie lovirtus
          posuere maecenas. molestie lovirtusposure maecenas. Eget sapine,
          dravida nequi.
        </p>
        <button>DISCOVER MORE</button>
      </motion.div>

      <motion.div className="content--right"
      initial={{ opacity:0, scale:0.5}}
      whileInView={{opacity:1, scale:1}}
      transition={{duration:1}}
      >
        <img src={Home_image} className="home--image" />
      </motion.div>
    </section>
  );
};

export default Home;
