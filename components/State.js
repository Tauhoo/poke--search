import React, { Component } from "react";
import styled from "styled-components";
const Background = styled.div`
  width: 100%;
  justify-content: center;
  padding-bottom: 40px;
`;
const Container = styled.div`
  width: 100vw;
  background: #bdc3c7;
`;
const Topic = styled.div`
  font-size: 36px;
  width: 100%;
  font-family: "Raleway";
  padding: 30px 0px;
  text-align: center;
  box-sizing: border-box;
`;

const StateContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StateLine = styled.div`
  flex: 1;
  display: flex;
  border: #2c3e50;
  padding: 0px 5vw;
  box-sizing: border-box;
`;

const Name = styled.span`
  flex: 1;
  font-family: "Raleway";
  text-align: center;
`;
const Bar = styled.div`
  flex: 4;
  background-color: #2c3e50;
`;

const Progress = styled.div`
  width: ${props => props.width}%;
  background-color: ${props => props.color};
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  font-family: "Raleway";
`;

const getState = (title, value, color) => (
  <StateLine>
    <Name>{title}</Name>
    <Bar>
      <Progress width={value} color={color}>
        {value}
      </Progress>
    </Bar>
  </StateLine>
);

export default class extends Component {
  state = { data: [] };

  componentWillReceiveProps(nextProps) {
    if (nextProps.state !== this.state.state) {
      let color = [
        "#e74c3c",
        "#8e44ad",
        "#f1c40f",
        "#16a085",
        "#27ae60",
        "#2980b9"
      ];
      let data = nextProps.state.map((e, i) => ({
        title: e.stat.name,
        value: e.base_stat,
        color: color[i]
      }));
      this.setState({ data });
    }
  }
  render = () => (
    <Container>
      <Topic>State</Topic>
      <Background>
        <StateContainer>
          {this.state.data.map(e => getState(e.title, e.value, e.color))}
        </StateContainer>
      </Background>
    </Container>
  );
}
