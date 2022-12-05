import React, { Component } from "react";
import { layout } from "../Layout.js";
import Center from "./Center";
import Hand from "./Hand";
import Winner from "./Winner";
import Popup from "./Popup";

class Game extends Component {
  render() {
    return (
      <div style={layout.game}>
        <Winner winner={this.props.current.winner}/>
        <Center 
          current={this.props.current}
          playHandler={this.props.playHandler}
        />
        <Popup message={this.props.current.message}/>
        {this.props.current.isPlaying && this.props.current.deck !== undefined &&
          <Hand
            current={this.props.current}
            selectHandler={this.props.selectHandler}
            flipHandler={this.props.flipHandler}
          />
        }
      </div>
    );
  }
}

export default Game;
