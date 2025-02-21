import React from "react";
import axios from "axios";

class ApiAxio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], postdata: {},isupdate:false };
  }

  handleClick = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleDelete = (id) => {
    axios
      .delete("https://fakestoreapi.com/products/" + id)
      .then((delres) => {
        console.log(delres.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  postData = () => {
    if (this.state.postdata) {
      console.log(this.state.postdata.id);
    }
    if (this.state.postdata && this.state.postdata.id) {
      let updateurl =
        "https://fakestoreapi.com/products/" + this.state.postdata.id;
      console.log(updateurl);
      axios
        .put(updateurl, this.state.postdata)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("https://fakestoreapi.com/products", this.state.postdata)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  handleChange = (e) => {
    this.setState({
      postdata: { ...this.state.postdata, [e.target.name]: e.target.value },
    });
  };

  handleUpdate = (row) => {
    this.setState({isupdate:true})
    console.log(row);
    this.setState({ postdata: row });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.postdata.title || null}
          onChange={(e) => {
            this.handleChange(e);
          }}
        ></input>
        <input
          type="text"
          name="price"
          placeholder="price"
          value={this.state.postdata.price || null}
          onChange={(e) => {
            this.handleChange(e);
          }}
        ></input>
        <input
          type="text"
          name="description"
          placeholder="description"
          value={this.state.postdata.description || null}
          onChange={(e) => {
            this.handleChange(e);
          }}
        ></input>
        <input
          type="text"
          name="image"
          placeholder="image"
          value={this.state.postdata.image || null}
          onChange={(e) => {
            this.handleChange(e);
          }}
        ></input>
        <input
          type="text"
          name="category"
          placeholder="category"
          value={this.state.postdata.category || null}
          onChange={(e) => {
            this.handleChange(e);
          }}
        ></input>
        <button onClick={this.postData}>{ !this.state.isupdate ? "Add" : "Update"}</button>

        <button onClick={this.handleClick}>Get Data</button>
        <div>
          {this.state.data &&
            this.state.data.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "inline-block",
                  maxWidth: "20%",
                  border: "1px solid #ccc",
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>
                  <strong>Category : </strong>
                  {item.category}
                </p>
                <p>
                  <strong>Price:</strong> ${item.price}
                </p>
                <button
                  onClick={() => {
                    this.handleDelete(item.id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    this.handleUpdate(item);
                  }}
                >
                  Update
                </button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default ApiAxio;
