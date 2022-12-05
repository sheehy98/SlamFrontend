import React, { Component } from "react";
import { layout } from "../Layout.js";

class Card extends Component {
  render() {
    return (
      <div 
        style={
          this.props.small ? 
            this.props.selected ? 
              layout.selected
            :
              layout.smallCard
          :
            layout.card
        } 
        onClick={() => {
          this.props.handler()
        }}
      >
        {this.props.letter}
      </div>
    );
  }
}

export default Card;