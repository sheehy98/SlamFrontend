import React, { Component } from "react";
import { layout } from "../Layout.js";
import LobbyInputs from "./LobbyInputs";
import LobbyPanel from "./LobbyPanel";
import Game from "./Game";

class Slam extends Component {
  render() {
    return (
      <div style={layout.slam}>
        <LobbyInputs
          current={this.props.current}
          joinHandler={this.props.joinHandler}
          leaveHandler={this.props.leaveHandler}
        />
        <LobbyPanel
          current={this.props.current}
          leaveHandler={this.props.leaveHandler}
          readyHandler={this.props.readyHandler}
        />
        <Game
          current={this.props.current}
          selectHandler={this.props.selectHandler}
          playHandler={this.props.playHandler}
          flipHandler={this.props.flipHandler}
        />
      </div>
    );
  }
}

export default Slam;
