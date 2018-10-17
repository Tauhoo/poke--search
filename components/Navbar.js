import react from "react";
import styled from "styled-components";
const Container = styled.div`
  position: fixed;
  width: 100vw;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 20px;
`;
const Logo = styled.span`
  font-size: 36px;
  color: white;
  @media (max-width: 650px) {
    font-size: 72px;
  }
`;
export default () => (
  <Container>
    <Logo>ICEe</Logo>
  </Container>
);
