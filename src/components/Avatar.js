import React from "react";
import avatar from "../assets/avatar.webp";
import styled from "styled-components";

const AvatarContainer = styled.div`
  width: 40px;
  height: 40px;
  :hover {
    transform: scale(1.1);
  }
  transition: all ease 0.2s;
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

function Avatar() {
  return (
    <AvatarContainer>
      <AvatarImg src={avatar} />
    </AvatarContainer>
  );
}

export default Avatar;
