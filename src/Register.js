import React, { Component } from 'react'

export default class Register extends Component {
  constructor(props){
    super(props)
    console.log(props.checkLogin)
  }
  render() {
    return (
      <button onClick={this.props.checkLogin}>Login</button>
    )
  }
}
