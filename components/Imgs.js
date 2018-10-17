import reeact, { Component } from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  display: flex;
  height: 25vw;
`;
const Detail = styled.div`
  flex: 1;
  background: black;
`;
const Img = styled.div``;
const Name = styled.span``;
export default class extends Component {
  state = { imgs: {} };
  componentWillReceiveProps(nextProps) {
    if (nextProps.imgs !== this.state.imgs) {
      this.setState({ imgs: nextProps.imgs });
    }
  }
  render = () => (
    <Container>
      <Detail>a</Detail>
      <Detail>b</Detail>
      <Detail>c</Detail>
      <Detail>d</Detail>
    </Container>
  );
}
