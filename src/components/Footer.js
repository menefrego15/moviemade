import React from "react";
import styled from "styled-components";
import heart from "../assets/heart.svg";
import cross from "../assets/cross.svg";
import check from "../assets/check.svg";

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  height: 90px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 100px;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  justify-content: space-around;
  align-items: center;
`;

const ButtonCancel = styled.div`
  width: 64px;
  height: 64px;
  background: #ff5454;
  box-shadow: 0px 0px 9px 3px rgba(255, 0, 0, 0.3);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonCheck = styled.div`
  width: 64px;
  height: 64px;
  background: #6eff6b;
  box-shadow: 0px 0px 9px 3px rgba(5, 255, 0, 0.3);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonHeart = styled.div`
  width: 30px;
  height: 30px;
`;
function Footer() {
  return (
    <Container>
      <ButtonContainer>
        <ButtonCancel>
          <img src={cross} alt="cross" />
        </ButtonCancel>
        <ButtonHeart>
          <img src={heart} alt="heart" />
        </ButtonHeart>
        <ButtonCheck>
          <img src={check} alt="check" />
        </ButtonCheck>
      </ButtonContainer>
    </Container>
  );
}

export default Footer;
