import react, { Component } from "react";
import styled from "styled-components";
import Search from "./Search";
const Container = styled.div`
  top: 0px;
  left: 0px;
  position: fixed;
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 20px;
  z-index: 1000;
`;
const Logo = styled.span`
  flex: 1;
  font-size: 36px;
  font-family: "Raleway";
  color: white;
  @media (max-width: 650px) {
    font-size: 72px;
    color: white;
  }
`;
export default class extends Component {
  render = () => (
    <Container>
      <Logo>PokeSearch</Logo>
      <Search onUpdate={this.props.onUpdate} />
    </Container>
  );
}
