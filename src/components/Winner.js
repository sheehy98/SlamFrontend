import React, { Component } from "react";
import { layout } from "../Layout.js";

class Winner extends Component {
  render() {
    return (
      <div style={layout.winner}>
        {
          this.props.winner != null &&
          this.props.winner.length > 0 &&
          this.props.solo && 
          <h1>Finished in {this.props.time}</h1>
        }
        {
          this.props.winner != null &&
          this.props.winner.length > 0 &&
          !this.props.solo && 
          <h1>Champion: {this.props.winner}</h1>
        }
      </div>
    );
  }
}

export default Winner;
