import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      comments: "",
    };
  }

  handlenameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handlepasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleemailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlecommentsChange = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };

  formHandler = (e) => {
    alert(
      `${this.state.username} ${this.state.password} ${this.state.email} ${this.state.comments}`
    );
  };

  render() {
    const { username, password, email, comments } = this.state;
    return (
      <form onSubmit={this.formHandler}>
        <h2>React Form</h2>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={this.handlenameChange}
          />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={this.handlepasswordChange}
          />
        </div>
        <br />
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={this.handleemailChange} />
        </div>
        <br />
        <div>
          <label>Comments</label>
          <br />
          <textarea
            value={comments}
            onChange={this.handlecommentsChange}
          ></textarea>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
