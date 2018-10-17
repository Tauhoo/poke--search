import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
`;
const Topic = styled.div`
  font-size: 36px;
  width: 100%;
  font-family: "Raleway";
  padding: 30px 0px;
  text-align: center;
`;

export default class extends Component {
  render = () => (
    <Container>
      <Topic>State</Topic>
    </Container>
  );
}
