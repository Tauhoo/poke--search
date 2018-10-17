import React, { Component } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

export default class extends Component {
  state = {
    img: ""
  };
  render = () => (
    <>
      <Navbar />
    </>
  );
}
