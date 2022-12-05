import React, { Component } from "react";
import { layout } from "../Layout.js";
import Card from "./Card";

class Center extends Component {
  play(index) {
    if (this.props.current.selected !== null) {
      this.props.playHandler(index)
    }
  }

  render() {
    return (
      <div style={layout.center}>
        <Card 
          letter={this.props.current.word[0]} 
          small={false}
          selected={false}
          handler={() => { this.play(0) }}
        />
        <Card 
          letter={this.props.current.word[1]} 
          small={false}
          selected={false}
          handler={() => { this.play(1) }}
        />
        <Card 
          letter={this.props.current.word[2]} 
          small={false}
          selected={false}
          handler={() => { this.play(2) }}
        />
        <Card 
          letter={this.props.current.word[3]} 
          small={false}
          selected={false}
          handler={() => { this.play(3) }}
        />
      </div>
    );
  }
}

export default Center;
