import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "india",
      color: "yellow",
    };
    console.log("constructor called");
  }
  static getDerivedStateFromProps(oldProps) {
    console.log("getDerivedStateFromProps");
    return {
      name: oldProps.name,
    };
  }
  shouldComponentUpdate(nextprop, nextstate) {
    console.log("shouldComponentUpdate");
    console.log("Next-state*****************", nextprop, nextstate);
    if (nextprop.name.includes("hello")) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(oldprop, oldstate) {
    console.log("getSnapshotBeforeUpdate");
    console.log("old-state......", oldprop, oldstate);
    return { oldprop, oldstate };
  }

  componentDidUpdate(oldprop, oldstate, snapshot) {
    console.log("componentDidUpdate");
    console.log(
      "did-update-old-state......",
      oldprop,
      " -- old state --",
      oldstate,
      "snapshor--",
      snapshot
    );
  }
  componentDidMount() {
    console.log("component did mount");
  }
  render() {
    return (
      <div>
        {this.state.color}
        <div>LifeCycle - {this.props.name} </div>
        <button onClick={() => this.setState({ color: "red" })}>Change</button>
      </div>
    );
  }
}
