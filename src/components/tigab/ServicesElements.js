import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 1800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background: #F5BB34;

    @media screen and (max-width: 1025px) {
        height: 3500px;
    }

    media screen and (max-width: 480px) {
        height: 3500px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
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

export const ServicesIcons = styled.img`
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH1 =  styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 64px;

    @media screen and (max-width = 480px) {
        font-size: 2 rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

export const TigaButton = styled.button`
    width: 250px;
    margin: auto;
    padding: 20px 20px;
    font-weight: 700;
    font-size: 0.688rem;
    line-height: 18px;
    letter-spacing: 1.54px;
    text-transform: uppercase;
    border-radius: 25px;
    border: none;
    background-color: white;
    color: #EC2B39;
    cursor: pointer;
    transition: all 0.4s ease-in;
    text-align: center;
    margin-top:30px;
`;