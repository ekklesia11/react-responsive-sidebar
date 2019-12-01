import React from "react";
import styled, { keyframes } from "styled-components";

const Menu = () => {
  return <Container>menu</Container>;
};

const slideIn = keyframes`
  100% { left: 0 }
`;

const Container = styled.div`
  height: 100vh;
  background-color: blue;
  opacity: 0.8;
  width: 100px;
  z-index: 200;
  position: absolute;
  top: 0;
  left: -100%;
  margin: 0;
  animation: ${slideIn} 1s forwards;
`;

export default Menu;
