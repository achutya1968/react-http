import React, { Component } from "react";
import axios from "axios";

class Practice1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => {
        console.log(resp);
        this.setState({
          posts: resp.data,
        });
      })

      .catch((error) => {
        this.setState({
          message: "Error getting message",
        });
      });
  }

  render() {
    const { posts, message } = this.state;
    return (
      <div>
        <h2>Lists</h2>
        {posts.length
          ? posts.map(post => <div key={post.id}>{post.userId}</div>)
          : null }
        {message ? <div> {message} </div> : null}
      </div>
    );
  }
}

export default Practice1;
