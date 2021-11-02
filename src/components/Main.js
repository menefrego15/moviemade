import React from "react";
import Card from "./Card";
import styled from "styled-components";

const MainContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Main() {
  return (
    <MainContainer>
      <Card />
    </MainContainer>
  );
}

export default Main;
