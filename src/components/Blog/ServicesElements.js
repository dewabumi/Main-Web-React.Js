import styled from "styled-components";
import img from "../../icons/bgimage.svg";

export const ServicesContainer = styled.div`
    height: 900px;
    padding:5rem;
    justify-content: center;
    align-items:center;
    background-image: url(${img});

    @media screen and (max-width: 1300px) {
        height: 1300px;
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media screen and (max-width: 1000px) {
        height: 1800px;
    }

    @media screen and (max-width: 480px) {
        padding:2px;
        max-height: 10000px;
        margin-top:200px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    padding: 0 50px;

    @media screen and (max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr);
        padding:0px;
    }

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        padding:0px;
        width:100%;
    }

    @media screen and (max-width: 450px) {
        padding:0px;
        display:flex;
        flex-direction:column;
    }

`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 640px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const style = { color: "red", fontSize: "1.5em", position: 'relative', top: "6px"}

export const TautanBlog = styled.div`
  color:#F5BB34;
  margin-bottom:20px;
  display: flex; 
  justify-content: flex-end;
  max-width:1520px;
  
  
  a{
    font-size: .9rem;
    font-weight: bold;
    padding:0px 5px 3px 5px;
    text-decoration:none;
    color:red;
    background:white;
    border: 2px solid white;
    border-radius:10px;
  }
`;

export const ServicesIcons = styled.img`
    width: 260px;
    margin-bottom: 10px;

    @media screen and (max-width: 450px) {
        width:120px;
    }
`;

export const ServicesH1 =  styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 64px;

    @media screen and (max-width : 480px) {
        font-size: 1 rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: left;
`;