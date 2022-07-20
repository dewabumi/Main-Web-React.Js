import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { CgArrowLongRight } from "react-icons/cg";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  position: relative;
  height: 70vh;
  background: #fff;

  @media screen and (max-width: 600px) {
    height:40vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const style = { color: "#F5BB34", fontSize: "1.5em", position: 'relative', top: "6px"}

const Tautan = styled.div`
  color:#F5BB34;
  justify-content:right;
  margin-bottom:2rem;

  a{
    font-size: 1rem;
    font-weight: bold;
    margin-left: 2rem;
    text-decoration:none;
  }
`;

const Wrap = styled.div`
  background: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 2rem;
    font-size: 1.5rem;
  }

  span {
    margin-right: 1.5rem;
  }
  
`;

const Dropdown = styled.div`
  background: #fff;
  color: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  border-bottom: 1px solid #F5BB34;
  border-top: 1px solid #F5BB34;

  p {
    font-size: 1rem;
    margin-left: 2rem;
  }

  @media screen and (max-width: 1300px) {
    max-height:1000px;
    height:100%;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#F5BB34', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <AiFillMinusCircle /> : <AiFillPlusCircle />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        <Tautan>
            <a href="https://ganeshaoperation.com/faq.html">Lihat Semua Pertanyaan <CgArrowLongRight style={style} /></a>
        </Tautan>
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
