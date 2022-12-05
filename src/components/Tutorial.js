import React, { Component } from "react";
import { layout } from "../Layout.js";

class Tutorial extends Component {
  render() {
    return (
      <img src={require('../assets/Tutorial.png')} style={layout.tutorial} alt="Tutorial"/>
    );
  }
}

export default Tutorial;
