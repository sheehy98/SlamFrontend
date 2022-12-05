import React, { Component } from "react";
import { layout } from "../Layout.js";

class LobbyInputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true
    }
  }

  check() {
    this.setState({ disabled: 
      this.props.current.lobby!==null || 
      document.getElementsByName("uname").length === 0 ||
      document.getElementsByName("lobby").length === 0 ||
      document.getElementsByName("uname")[0].value.length === 0 ||
      !document.getElementsByName("lobby")[0].value.match("^[A-Za-z0-9]+$") 
    })
  }

  render() {
    return (
      <div style={layout.lobbyInputs}>
        <div style={layout.inputPair}>
          <label style={layout.inputLabel} htmlFor="uname">
            Username:
          </label>

          <input style={layout.inputInput} type="text" name="uname" onChange={() => this.check()}/>
        </div>

        <div style={layout.inputPair}>
          <label style={layout.inputLabel} htmlFor="lobby">
            Lobby:
          </label>

          <input style={layout.inputInput} type="text" name="lobby" onChange={() => this.check()}/>
        </div>

        <button
          style={layout.joinButton}
          type="submit"
          disabled={this.props.current.lobby!==null || this.state.disabled}
          onClick={() => {
            this.props.joinHandler(
              document.getElementsByName("uname")[0].value,
              document.getElementsByName("lobby")[0].value
            );
          }}
        >
          Join
        </button>
      </div>
    );
  }
}

export default LobbyInputs;
