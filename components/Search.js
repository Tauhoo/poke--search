import react, { Component } from "react";
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

export default class extends Component {
  state = {
    input: ""
  };
  onType = e => {
    this.setState({ input: e.target.value });
  };
  onSubmit = e => {
    console.log(this.state.input);
    e.preventDefault();
  };
  render = () => (
    <Container>
      <form onSubmit={this.onSubmit}>
        <Input onChange={this.onType} placeholder="Put your Pokemon name." />
      </form>
    </Container>
  );
}
