import React, { Component } from "react";
import { layout } from "../Layout.js";
import Center from "./Center";
import Hand from "./Hand";
import Winner from "./Winner";

class Popup extends Component {
  render() {
    return (
      <div style={this.props.message.length ? layout.popup : layout.noPopup}>
        {this.props.message}
      </div>
    );
  }
}

export default Popup;
