import React from "react";
import styled from "styled-components";
import Header from "./components/header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <Center>
        <Header />
      </Center>
      <Main />
      <Center>
        <Footer />
      </Center>
    </AppContainer>
  );
}

export default App;
