import React, { Component } from "react";
import BellA from "./BellA.png";
import BellC from "./BellC.jpeg"
export class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Subscribe to my channel!",
      sub: "Subscribe",
      imagURL: BellA,
    };
  }

  ClickHandler = () => {
    this.setState({
      message: "Hit the bell icon to never miss an update!",
      sub: "Subscribed",
    });
  };



  imageChange = ()=>{
      this.setState({
          imagURL:BellC,
          message:"Thank you!"
      })
  }



  render() {
    return (
      <div>
        <h1 style={{ color: "blue" }}>{this.state.message}</h1>
        <button
          style={{color:"red", fontSize:20}}
          onClick={this.ClickHandler}
        >
          {this.state.sub}
        </button>
        <br />
        <br />

        <img
          style={{ height: 40, width: 40 }}
          src={this.state.imagURL}
          onClick={this.imageChange} alt = ''
        />
      </div>
    );
  }
}

export default NewComp;
