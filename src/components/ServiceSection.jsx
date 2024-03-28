import React from "react";
import "../styles/ServiceSection.css";
import { HiArrowCircleRight } from "react-icons/hi";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    heading: "Air Freight Services",
    descr:
      "At our Auto service garage, we are fully appreciate how diffcult occur it is for people to find.",
    Image_name:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMdd1QT0QTmTliFnVD_mYSsxXR1m0h0O3BCIKybxPOA&s",
  },
  {
    id: 2,
    heading: "Drone Services",
    descr:
      "At our Auto service garage, we are fully appreciate how diffcult occur it is for people to find.",
    Image_name:
      "https://bafcointl.com/wp-content/uploads/2023/12/seamless-logistics-scaled.jpg",
  },
];

const ServiceSection = () => {
  return (
    <section id="service">
      <motion.div className="head"
      initial={{ opacity:0, scale:0.5}}
      whileInView={{opacity:1, scale:1}}
      transition={{duration:1}}
      >
        <h2>Real Solution, Real Fast!</h2>
        <h1>Best Global Logistics Solutions.</h1>

        <div className="content--box">
          {data.map((item, index) => (
            <div key={index} className="content">
              <img src={item.Image_name} alt="ship" />
              <div className="content--right">
                <h3>{item.heading}</h3>
                <p>{item.descr}</p>
                <div className="read-me">
                  <HiArrowCircleRight />
                  <h5> Read More</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
