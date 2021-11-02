import React from "react";
import styled from "styled-components";
import Icon from "../assets/icon.svg";
import Avatar from "./Avatar";

const Header = styled.div`
  width: 100%;
  max-width: 700px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function header() {
  return (
    <Header>
      <img src={Icon} alt="nav icon" />
      <Avatar />
    </Header>
  );
}

export default header;
