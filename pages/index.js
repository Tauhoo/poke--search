import React, { Component } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Imgs from "../components/Imgs";
import Topic from "../components/Topic";
import State from "../components/State";
import Screen from "../components/Screen";
import Pokedex from "pokedex-promise-v2";
const options = {
  protocol: "https",
  hostName: "pokeapi.netlify.com",
  versionPath: "/api/v2/",
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
};
const P = new Pokedex(options);
export default class extends Component {
  state = { screen: true };
  onUpdate = async data => {
    const result = await P.getPokemonByName(data.input).then(res => res);
    this.setState({ ...result, screen: false });
  };
  render = () => (
    <>
      <Navbar onUpdate={this.onUpdate} />
      <Screen isOn={this.state.screen} />
      <Topic name={this.state.name} />
      <Imgs imgs={this.state.sprites} />
      <State state={this.state.stats} />
    </>
  );
}
