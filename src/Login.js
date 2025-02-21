import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props)
    console.log("login constructor called")
  }
  static getDerivedStateFromProps(){
    console.log("getDerivedStateFromProps - login")
  }
  componentDidMount(){
    console.log("component did mount")
  }
  render() {
    return (
      <>
      <button onClick={this.props.checkLogin}>Register</button>
      </>
    )
  }
}
