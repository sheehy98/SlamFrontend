import React, { Component } from "react";
import { layout } from "../Layout.js";

class Tab extends Component {
  render() {
    return (
      <li
        onClick={() => {
          this.props.onClick(this.props.label);
        }}
        style={
          this.props.activeTab === this.props.label
            ? layout.tabListActive
            : layout.tabListItem
        }
      >
        {this.props.label}
      </li>
    );
  }
}

export default Tab;
