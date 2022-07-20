import React from "react";
import Data from "./Data";
import "../../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gridAnimation, cardAnimation, h3Animation } from "./Animations";
import Tilt from 'react-tilt';

const Cars = () => {
  return (
    <div className="carsContainer">
      <motion.h3 variants={h3Animation} animate="show" exit="hide">
        Program Pilihan Ganesha Operation
      </motion.h3>
      <motion.p variants={h3Animation} animate="show" exit="hide">
        berbagai macam pilihan program sesuai dengan kebutuhanmu
      </motion.p>
      <motion.div
        className="cars"
        variants={gridAnimation}
        animate="show"
        exit="hide"
      >
        {Data.map((item) => {
          return (
            <Link to={`/car/${item.id}`} key={item.id}>
              <motion.div className="card" variants={cardAnimation}>
              <Tilt className="Tilt" options={{ max: 20, scale: 1.01, speed: 200 }}>
                <img
                 whileHover={{ scale: 1.1 }}
                 transition={{ duration: 0.5 }}
                 src={`../images/products/${item.image}`} alt={item.car} />
              </Tilt>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Cars;
