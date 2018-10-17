import reeact, { Component } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  display: flex;
  height: 30vw;
`;
const Detail = styled.div`
  flex: 1;
  background: black;
  display: flex;
  flex-direction: column;
`;
const Text = styled.span`
  flex: 5;
  background: #ecf0f1;
  font-family: "Raleway";
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.div`
  background: url("${props => props.url}");
  background-size: cover;
  background-position: center;
  flex: 25;
`;
export default class extends Component {
  state = {
    imgs: {
      front_default: ""
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.imgs !== this.state.imgs) {
      this.setState({ imgs: nextProps.imgs });
      console.log(nextProps);
      console.log(this.state);
    }
  }
  onClick = () => {
    this.setState({
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    });
  };
  render = () => (
    <Container>
      <Detail>
        <Img url={this.state.imgs.front_default} />
        <Text>Front Default</Text>
      </Detail>
      <Detail>
        <Img url={this.state.imgs.back_default} />
        <Text>Back Default</Text>
      </Detail>
      <Detail>
        <Img url={this.state.imgs.front_shiny} />
        <Text>Front Shiny</Text>
      </Detail>
      <Detail>
        <Img url={this.state.imgs.back_shiny} />
        <Text>Back Shiny</Text>
      </Detail>
    </Container>
  );
}
