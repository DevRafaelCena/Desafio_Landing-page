import styled from "styled-components";
import px2vw from "../../styles/px2vw";


export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxIMG = styled.img`  
    width: 50%;
    height:5%;
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const Input = styled.input` 
  font-size: 1.5rem;
  height: 40px;
  border-radius:5px;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const Btn = styled.button` 
margin: auto;
margin-top: 10px;
 align:center;
  font-size: 1.5rem;  
  border-radius:10px;
  background-color: #CDBE70;
  color: red;
  width: content;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;


export const ImgBeer = styled.img`
  border-radius: 180px
`;