import React, { Component } from "react";
import styled from "styled-components";
const Container = styled.img`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: ${props => (props.isOn ? "0px" : "-100vh")};
  left: 0px;
  transition: 0.6s;
  z-index: 999;
`;
export default class extends Component {
  state = { isOn: true };
  componentWillReceiveProps(nextProps) {
    if (nextProps.isOn !== this.state.isOn) {
      this.setState({ isOn: nextProps.isOn });
    }
  }
  render = () => (
    <Container isOn={this.state.isOn} src="/static/background.png" />
  );
}
