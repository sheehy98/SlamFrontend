import React, { Component } from "react";
import { layout } from "../Layout.js";

class LobbyPanel extends Component {
  render() {
    return (
      <div style={layout.lobbyPanel}>
        <div style={layout.panelLabel}>
          <label>Lobby: {this.props.current.lobby}</label>

          <button
            style={layout.panelButton}
            type="submit"
            disabled={this.props.current.lobby === null}
            onClick={() => {
              this.props.leaveHandler(this.props.current.lobby);
            }}
          >
            Leave
          </button>
        </div>

        <div style={layout.panelLabel}>
          <label>Ready: {
            this.props.current.lobby===null ? "" :
            this.props.current.players.filter(player => player[1]).length+"/"+this.props.current.players.length
          }</label>

          <button
            style={layout.panelButton}
            type="submit"
            disabled={this.props.current.lobby === null || this.props.current.isPlaying}
            onClick={() => {
              this.props.readyHandler();
            }}
          >
            {this.props.current.isReady ? "Not Ready!" : "I'm Ready!"}
          </button>
        </div>

        {this.props.current.players.map((player) => {
          return (
            <div key={player[0]} style={layout.panelLabel}>
              <div style={layout.td}>
                {
                  player[0]===this.props.current.username ?
                    player[0] + " *" :
                    player[0]
                }
              </div> 
              
              <div style={layout.td}>
                {player[1] ? "Ready" : "Unready"}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default LobbyPanel;
