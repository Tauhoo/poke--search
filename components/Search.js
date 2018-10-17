import react from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 10;
  align-items: center;
  flex-direction: column;
`;
const Input = styled.input`
  width: 50vw;
  height: 40px;
  padding: 5px 5px 5px 10px;
  font-family: "Raleway";
  box-sizing: border-box;
  @media only screen and (max-width: 600px) {
    height: 60px;
  }
`;
const Button = styled.button`
  font-family: "Raleway";
  height: 40px;
  width: 30vw;
  border: 0px;
  @media only screen and (max-width: 600px) {
    height: 60px;
  }
`;

export default () => (
  <Container>
    <Input placeholder="Put your Pokemon name." />
  </Container>
);
