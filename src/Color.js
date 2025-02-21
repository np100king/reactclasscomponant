import React from 'react'

class Color extends React.Component{
    constructor(props){
        super(props)
        this.color = "Blue"
        console.log(this.color)
    }
    render(){
        let students = this.props.students
        return(
            <div>
            <h2>Welcome to the World</h2>
            <p>{this.color}</p>
            <table><tbody><th>Name</th><th>Age</th>
            {
                students.map((student)=>(
                    <tr><td>{student.name}</td><td>{student.age}</td></tr>
                ))
            }
            </tbody>
            </table>
            </div>
        )
    }
}

export default Color