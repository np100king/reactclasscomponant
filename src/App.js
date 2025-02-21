import logo from './logo.svg';
import './App.css';
import React from 'react'
import { render } from '@testing-library/react';
import Color from './Color'
import Events from './Events'
import Login from './Login';
import Register from './Register';
import CustomForm from './CustomForm';
import Quiz from './Quiz'
import ApiAxio from './ApiAxio';
import Info from './Info';
import Skills from './Skills';
import Edu from './Edu';
import Achieve from './Achieve';
import CompDidMount from './CompDidMount'
import LifeCycle from './LifeCycle'
import { Button } from '@mui/material';
import Showhide from './Showhide';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      page : 0,
      islogin : true,
      isShow : false
    }
  }
  checkLogin = () => {
    this.setState({islogin : !this.state.islogin,name:"hello"})
  }
  handleShowhide = () => {
    this.setState({isShow : !this.state.isShow})
    
  }
  render(){
    const students = [
      {name: 'KL',age: 23},
      {name: 'LS',age: 12},
      {name: 'GJ',age: 45},
    ]
    console.log(this.state.islogin)
    const handleClick = (e) => {
      let btnval = e.target.value;
      let page = 0;
      if(btnval == "info"){
        page = 1;
      }else if(btnval == "skills"){
        page = 2;
      }else if(btnval == "education"){
        page = 3;
      }else{
        page = 4;
      }
      console.log(page);
      this.setState({page})
    }
    return(
      <div>
        
        {/* {this.state.islogin ? <Login checkLogin = {this.checkLogin}/> : <Register checkLogin = {this.checkLogin}/> } */}
      {/* <CompDidMount/> */}
        {/* <button value="info" onClick={(e)=>{handleClick(e)}}>Info</button>
        <button value="skills" onClick={(e)=>{handleClick(e)}}>Skills</button>
        <button value="education" onClick={(e)=>{handleClick(e)}}>Education</button>
        <button value="achivement" onClick={(e)=>{handleClick(e)}}>Achivement</button>
        {this.state.page == 1 ? <Info/> : null}
        {this.state.page == 2 ? <Skills/> : null}
        {this.state.page == 3 ? <Edu/> : null}
        {this.state.page == 4 ? <Achieve/> : null} */}
        {/* <Color students = {students}/>
        <Events/>
        <Login/> */}
        {/* <CustomForm/> */}
        {/* <Quiz/> */}
        {/* <ApiAxio/> */}

        {/* <input type="text" onChange={(e)=>{this.setState({name : e.target.value})}}/> */}
        {/* <LifeCycle name = "World"/> */}
        {/* <LifeCycle name = {this.state.name}/> */}
        <Button onClick={this.handleShowhide}>Show Hide</Button>
        {this.state.isShow ? <Showhide/> : null}
      </div>
    )
  }
}
export default App;
