import axios from "axios";
import React, { Component } from "react";

class Fetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((resp) => {
      console.log(resp);
      this.setState({
        posts: resp.data,
      });
    });
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <h2>List of Characters</h2>
        {
          
          posts.map((post) => <div key={post.id}>{post.name}</div>)
          
        }
      </div>
    );
  }
}

export default Fetch;
