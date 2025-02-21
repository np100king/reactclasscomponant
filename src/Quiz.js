import React from "react";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score:0,
      answers:[],
      formSubmit: false,
      questions: [
        {
          que: "What is the capital city of France?",
          opt: ["London", "Paris", "Berlin", "Madrid"],
          ans: "Paris",
        },
        {
          que: "Which is the fastest bird in the world?",
          opt: ["Bald Eagle", "Peregrine Falcon", "Hummingbird", "Raven"],
          ans: "Peregrine Falcon",
        },
        {
          que: "What is the tallest waterfall in the world?",
          opt: [
            "Angel Falls, Venezuela",
            "Niagara Falls, New York",
            "Wailua Falls, Hawaii",
            "Sutherland Falls, New Zealand",
          ],
          ans: "Angel Falls, Venezuela",
        },
        {
          que: "Which element is known as the building block of life?",
          opt: ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"],
          ans: "Carbon",
        },
        {
          que: "What is the general name for a group of wolves?",
          opt: ["Pack", "School", "Flock", "Herd"],
          ans: "Pack",
        }
      ],
    };
  }
  handleChange = (e,idx) => {
    let ans = this.state.answers;
    ans[idx] =e.target.value;
    this.setState({answers:ans})
  }
  handleClick = (e) => {
    console.log(this.state.answers)
    let score = 0;
    this.state.questions.forEach((val,indx)=>{
      console.log(val.ans,"----",this.state.answers[indx])
      if(val.ans === this.state.answers[indx]){
        score += 1;
      }
    })
    this.setState({score,formSubmit:true});
    console.log(score);
  }
  render() {
    return (
      <div style={{ 
        textAlign: "center",
        backgroundImage: "url('https://cdn3.vectorstock.com/i/1000x1000/48/92/seamless-pattern-question-marks-quiz-background-vector-29564892.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign:"center"
      }}>
        <h2 style={{color:"#000"}}>Quiz App</h2>
        {this.state.questions.map((val, index) => (
          <div
            key={index}
            style={{
              textAlign: "left",
              margin: "10px auto",
              padding: "10px",
              border: "1px solid #ccc",
              width: "500px",
              backgroundColor: "#fff",
            }}
          >
            <div style={{ marginBottom: "10px" }}>{val.que}</div>
            {val.opt.map((op, idx) => (
              <>
                <input type="radio" value={op} name={`question-${index}`} onChange={(e)=>{this.handleChange(e,index)}}/>
                <b>
                {/* {this.state.answers[index]} */}
                {/* {op} */}
                {/* {val.ans} */}
                </b>
                <label
                  style={{
                    color: this.state.formSubmit
                      ? op === val.ans
                        ? "green"
                        : this.state.answers[index] === op
                        ? "red"
                        : "inherit"
                      : "inherit",
                    fontWeight: this.state.formSubmit && op === val.ans ? "bold" : "inherit",
                  }}
                >
                  {op}
                </label>
                {this.state.formSubmit && op === val.ans && (
                  <span style={{ color: "green", marginLeft: "5px",fontSize:"20px",fontWeight:'bold' }}>&#10003;</span>
                )}
                {this.state.formSubmit && this.state.answers[index] === op && op !== val.ans && (
                  <span style={{ color: "red", marginLeft: "5px",fontSize:"20px",fontWeight:'bold' }}>&#10007;</span>
                )}
              </>
            ))}
          </div>
        ))}
        <button
          style={{
            backgroundColor: "#148fb2",
            color: "#fff",
            fontSize: "15px",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "10px"
          }}
          onClick={(e)=>{this.handleClick(e)}}
        >
          Submit
        </button>
        <div style={{padding: "20px 0px",color:"#000", backgroundColor: "#fff"}}>
          <strong>Your Total Score is : </strong> {this.state.score} Points
        </div>
      </div>
    );
  }
}

export default Quiz;
