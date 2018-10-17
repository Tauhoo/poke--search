import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  width: 100vw;
  text-align: center;
  padding-bottom: 20px;
`;
const Text = styled.span`
  font-size: 36px;
  font-family: "Raleway";
`;

export default class extends Component {
  state = {
    name: ""
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.state.name) {
      this.setState({ name: nextProps.name });
    }
  }
  render = () => (
    <Container>
      <Text>{this.state.name}</Text>
    </Container>
  );
}
