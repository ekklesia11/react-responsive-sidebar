import React from "react";
import styled from "styled-components";

import MenuToggleBtn from "./sidebar/menuToggleBtn";
import Menu from "./sidebar/menu";

function App() {
  return (
    <Container>
      <MenuToggleBtn />
      <Menu />
    </Container>
  );
}

const Container = styled.div``;

export default App;
