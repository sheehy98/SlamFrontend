import React, { Component } from "react";
import { layout } from "../Layout.js";

class Flip extends Component {
  render() {
    return (
        <button style={layout.flip} onClick={this.props.handler}>
          Flip Cards
        </button>
    );
  }
}

export default Flip;
