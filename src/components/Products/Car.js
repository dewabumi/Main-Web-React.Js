import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Data from "./Data";
import { MdKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { carAnimation } from "./Animations";
import Modal2 from "../Modal/Modal2";
import reactStringReplace from 'react-string-replace';

const Car = () => {
  const { id } = useParams();
  const history = useHistory();
  const singlecar = Data.find((item) => item.id === parseInt(id));
  const [showModal2, setShowModal2]= useState(false);

  const toggleModal2 = () => {
		if (!showModal2) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}

		setShowModal2(!showModal2);
	};

  return (
    <div className="carcontainer">
      <motion.div
        className="car"
        variants={carAnimation}
        animate="show"
        exit="hide"
      >
        <div className="navigateBack" onClick={() => history.goBack()}>
          <MdKeyboardBackspace />
        </div>
        <div className="imageAndText">
          <img src={`../images/products/${singlecar.image2}`} alt={singlecar.car} />
          <div className="carText">
            <h3>{reactStringReplace(singlecar.car, 'Gap Year', (match, i) => (
              <span key={i} style={{ fontStyle: 'italic' }}>{match}</span>
            ))}</h3>
            <p>{reactStringReplace(singlecar.description, 'gap year', (match, i) => (
              <span key={i} style={{ fontStyle: 'italic' }}>{match}</span>
            ))}</p>
            <h4>Program ini tersedia untuk tingkat kelas :</h4>
            <div className="detail-kelas">
            {singlecar.kelas.map(child => (
                  <div className="detail-child">{child}</div>
              ))}
            </div>
            <div className="ButtonDaftar" onClick={toggleModal2}>
              Daftar Sekarang
            </div>
          </div>
        </div>
      </motion.div>
      <Modal2 showModal={showModal2} toggleModal={toggleModal2} />
    </div>
  );
};

export default Car;
