import React, { Component } from "react";
import { layout } from "../Layout.js";
import Tab from "./Tab";

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[1].props.label,
    };
  }

  render() {
    return (
      <div>
        <ol style={layout.tabList}>
          {this.props.children.map((child) => {
            return (
              <Tab
                activeTab={this.state.activeTab}
                key={child.props.label}
                label={child.props.label}
                onClick={() => {
                  if (child.props.label.length > 1) {
                    this.setState({ activeTab: child.props.label });
                  }
                }}
              />
            );
          })}
        </ol>
        <div style={layout.tabContent}>
          {this.props.children.map((child) => {
            if (child.props.label !== this.state.activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
