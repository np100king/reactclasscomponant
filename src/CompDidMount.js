import React from "react";
import axios from "axios";

class ApiAxio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount(){
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data)
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClick = () => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data)
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleDelete = (id) => {
    console.log('hghdgwewh');
    axios.delete("https://fakestoreapi.com/products/" + id)
      .then((delres) => {
        console.log(delres.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleUpdate = (row) => {
    this.state.data(row);
  }

  render() {
    return (
      <div>
        <input type="text" name="title"></input>
        <input type="text" name="price"></input>
        <input type="text" name="description"></input>
        <input type="text" name="image"></input>
        <input type="text" name="category"></input>
        <button>Add</button>

        <button onClick={this.handleClick}>Get Data</button>
        <div>
          {this.state.data && this.state.data.map((item) => (
            <div key={item.id} style={{display:'inline-block',maxWidth:'20%',border:'1px solid #ccc'}}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><strong>Category : </strong>{item.category}</p>
              <p><strong>Price:</strong> ${item.price}</p>
              <button onClick={()=>{this.handleDelete(item.id)}}>Delete</button>
              <button onClick={()=>{this.handleUpdate(item)}}>Update</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ApiAxio;
