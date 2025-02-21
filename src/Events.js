import React from "react";

class Events extends React.Component{
    constructor(){
        super()
        this.state = {
            fname : '',
            email : '',
            mobile : ''
        }
    }
    handleClick = () => {
        alert("button clicked....")
        console.log(this)
    }
    handleChange = (e) => {
        this.setState({...this.state,[e.target.name] : e.target.value})
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <input name="fname" value={this.state.fname} type="text" onChange={this.handleChange.bind(this)}/>
                <input name="email" value={this.state.email} type="email" onChange={this.handleChange}/>
                <input name="mobile" value={this.state.mobile} type="number" onChange={this.handleChange}/>
                {/* <button onClick={this.handleClick.bind(this)}>Go</button> */}
                <button onClick={this.handleClick}>Go</button>
                Hello - {this.state.fname} - {this.state.email} - {this.state.mobile}
            </div>
        )
    }
}

export default Events