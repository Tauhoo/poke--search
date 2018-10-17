import React, { Component } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Imgs from "../components/Imgs";
import Pokedex from "pokedex-promise-v2";
const options = {
  protocol: "https",
  hostName: "pokeapi.co",
  versionPath: "/api/v2/",
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
};
const P = new Pokedex(options);
export default class extends Component {
  state = {};
  onUpdate = async data => {
    const result = await P.getPokemonByName(data.input).then(res => res);
    this.setState(result);
    console.log("ooo");
    console.log(result);
    //this.setState(data);
  };
  render = () => (
    <>
      <Navbar onUpdate={this.onUpdate} />
      <Imgs imgs={this.state.sprites} />
    </>
  );
}
