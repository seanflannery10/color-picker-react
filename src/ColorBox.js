import React, { Component } from "react";

export default class ColorBox extends Component {
  render() {
    return (
      <div style={{ background: this.props.background }} className="ColorBox">
        <span>MORE</span>
      </div>
    );
  }
}
