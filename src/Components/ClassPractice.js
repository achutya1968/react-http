import React, { Component } from "react";

class ClassPractice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hungry: false,num:1
    };
  }

  clickHandler = () => {
    this.setState({
      hungry: !this.state.hungry
    });
  };

  componentDidMount(){
      console.log("Mounted")
  }

  componentDidUpdate(){
      console.log("updated")
  }

  render() {
    return (
      <div>
      <h1>{this.state.hungry}</h1>
        <h1
          style={{ color: "red", fontSize: "20px" }}
          onClick={this.clickHandler}
        >
          Hungry
        </h1>
        <p>Learn React when you are {this.state.hungry ? "really":"not"} hungry</p>
      </div>
    );
  }
}

export default ClassPractice;
