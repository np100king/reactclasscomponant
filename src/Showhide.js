import React, { Component } from "react";

export default class Showhide extends Component {
  componentWillUnmount() {
    console.log("Showhide Component Distroyed...");
  }
  render() {
    return <div>Showhide Component</div>;
  }
}
