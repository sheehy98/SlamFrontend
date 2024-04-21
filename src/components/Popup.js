import React, { Component } from "react";
import { layout } from "../Layout.js";

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
