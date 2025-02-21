import React, { Component } from "react";
import Box from "@mui/material/Box";
import {
  TextField,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  Typography,
  Radio,
  RadioGroup,
  InputLabel,
  MenuItem,
  Select,
  Divider,
  Chip,
  Button,
} from "@mui/material";

export class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      hobby: [],
      education: "",
    };
 
  }
  handleChange(e) {
    if(e.target.type == "checkbox"){
      let hobbyar = this.state.hobby;
      console.log(hobbyar)
      if(hobbyar.includes(e.target.value)){
        hobbyar.splice(hobbyar.indexOf(e.target.value),1)
      }else{
        hobbyar.push(e.target.value)
      } 
      this.setState({...this.state,hobby: hobbyar})
    }
    else{
    this.setState({ ...this.state, [e.target.name]: e.target.value });
    }
    //console.log(this.state);
  }
  handleClick() {
    console.log(this.state);
    const datastring = JSON.stringify(this.state)
    localStorage.setItem("data",datastring)
  }

  

  handleGet(){
    console.log(JSON.parse(localStorage.getItem("data")))
  }
  render() {
    let obj = {
      name : "Linda",
      displayName : function(x,y){
        return <>{this.name} { x }</>
      }
    }
    let obj2 = {
      name : "Oberoy"
    }
    return (
      <div>
        {obj.displayName.call(obj2)}
        {obj.displayName.bind(obj2,'dwdwd')}
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h4" gutterBottom>
            Student Form
          </Typography>
          <FormGroup sx={{border:'1px solid rgba(144, 147, 151, 0.58)', padding:'10px 30px'}}>
            <FormLabel id="demo-radio-buttons-group-label">Name</FormLabel>
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this)}
            />
            <Divider sx={{ margin: "10px 0px" }}></Divider>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="gender"
                onChange={this.handleChange.bind(this)}
                value={this.state.gender}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
            <Divider sx={{ margin: "10px 0px" }}></Divider>
            <FormLabel id="demo-radio-buttons-group-label">Hobby</FormLabel>
            <FormControlLabel
              control={<Checkbox />}
              label="Reading"
              value="reading"
              onChange={this.handleChange.bind(this)}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Writing"
              value="writing"
              onChange={this.handleChange.bind(this)}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Playing"
              value="playing"
              onChange={this.handleChange.bind(this)}
            />
            <Divider sx={{ margin: "10px 0px" }}></Divider>
            <FormControl fullWidth>
              <FormLabel id="demo-radio-buttons-group-label">
                Education
              </FormLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="education"
                name="education"
                onChange={this.handleChange.bind(this)}
                value={this.state.education}
              >
                <MenuItem value="bca">BCA</MenuItem>
                <MenuItem value="ba">BA</MenuItem>
                <MenuItem value="bcom">Bcom</MenuItem>
              </Select>
            </FormControl>
            <Divider sx={{ margin: "10px 0px" }}></Divider>
            <Button variant="contained" onClick={this.handleClick.bind(this)}>
              Submit
            </Button>
            <Button variant="contained" onClick={this.handleGet.bind(this)}>
              Get Data
            </Button>
          </FormGroup>
        </Box>
      </div>
    );
  }
}

export default CustomForm;
