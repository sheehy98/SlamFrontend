import React, { Component } from "react";
import { layout } from "../Layout.js";
import Card from "./Card";
import Flip from "./Flip";

class Hand extends Component {
  render() {
    return (
      <div>
        <div style={layout.hand}>
          {this.props.current.deck.map((card, index) => {
              if (card === "  "){
                return <div style={layout.placeHolder} key={index}/>
              }
              else {
                return (
                  <Card 
                      key={index} 
                      letter={card[this.props.current.front?0:1]} 
                      small={true}
                      selected={this.props.current.selected===index}
                      handler={() => {
                          this.props.selectHandler(index)
                      }}
                  />
                )
              }
            })
          }
        </div>

        {this.props.current.deck.length > 0 && 
          <Flip handler={this.props.flipHandler}/>
        }
      </div>
    );
  }
}

export default Hand;
