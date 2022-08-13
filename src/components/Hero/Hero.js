import React, { useEffect, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { MdAddShoppingCart } from 'react-icons/md';
import {
  HeroSection,
  Heading,
  HeroText,
  ButtonContainer,
  HeroButton,
  ImageCharacter,
  HeroImage,
  HeroContent,
  ButtonWrapper,
  CharacterContainer,
  HeroButton2,
} from './HeroStyles';
import { useInView } from 'react-intersection-observer';
import Modal from '../Modal/Modal';
import Modal2 from '../Modal/Modal2';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };

  const toggleModal = () => {
    if (!showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    setShowModal(!showModal);
  };

  const toggleModal2 = () => {
    if (!showModal2) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    setShowModal2(!showModal2);
  };

  const variants = {
    hover: {
      y: 15,
      transition: {
        yoyo: Infinity,
        duration: 0.6,
      },
    },
  };
  const { ref, inView } = useInView({
    rootMargin: '-100px',
  });

  useEffect(() => {
    // console.log(inView);
  }, [inView]);

  return (
    <>
      <HeroSection id="hero">
        <HeroImage className="pattern" src="./images/union.png" />
        <HeroImage className="guy" src="./images/background6.png" />
        <CharacterContainer>
          <ImageCharacter
            dragConstraints={dragConstraints}
            className="one"
            src="./images/background1.png"
          />
          <ImageCharacter
            variants={variants}
            whileHover="hover"
            drag
            dragConstraints={dragConstraints}
            className="three"
            src="./images/background3.png"
          />
        </CharacterContainer>
        <HeroContent>
          <Heading>Ganesha Operation</Heading>
          <HeroText>
            Bimbingan Belajar Terbaik dan Terbesar Se-Indonesia
          </HeroText>
          <ButtonContainer ref={ref}>
            <ButtonWrapper>
              <HeroButton
                onClick={toggleModal}
                className={inView ? '' : 'corner'}
              >
                {inView ? (
                  <> Hubungi Kami</>
                ) : (
                  <FiMail color="white" size="2.3rem" />
                )}
              </HeroButton>
              <HeroButton2
                onClick={toggleModal2}
                className={inView ? '' : 'corner2'}
              >
                {inView ? (
                  <> Daftar Sekarang</>
                ) : (
                  <MdAddShoppingCart color="white" size="2.3rem" />
                )}
              </HeroButton2>
            </ButtonWrapper>
          </ButtonContainer>
        </HeroContent>
      </HeroSection>
      <Modal showModal={showModal} toggleModal={toggleModal} />
      <Modal2 showModal={showModal2} toggleModal={toggleModal2} />
    </>
  );
};

export default Hero;
