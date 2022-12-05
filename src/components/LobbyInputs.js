import React, { Component } from "react";
import { layout } from "../Layout.js";

class LobbyInputs extends Component {
  render() {
    return (
      <div style={layout.lobbyInputs}>
        <div style={layout.inputPair}>
          <label style={layout.inputLabel} htmlFor="uname">
            <b>Username</b>
          </label>

          <input style={layout.inputInput} type="text" name="uname" />
        </div>

        <div style={layout.inputPair}>
          <label style={layout.inputLabel} htmlFor="lobby">
            <b>Lobby</b>
          </label>

          <input style={layout.inputInput} type="text" name="lobby" />
        </div>

        <button
          style={layout.joinButton}
          type="submit"
          disabled={this.props.current.lobby!==null}
          onClick={() => {
            if (
              document.getElementsByName("lobby")[0].value.length !== 0 &&
              document.getElementsByName("lobby")[0].value.match("^[A-Za-z0-9]+$")
            ) {
              this.props.joinHandler(
                document.getElementsByName("uname")[0].value,
                document.getElementsByName("lobby")[0].value
              );
            }
            else {
              this.props.leaveHandler(this.props.current.lobby)
            }
          }}
        >
          Join
        </button>
      </div>
    );
  }
}

export default LobbyInputs;
