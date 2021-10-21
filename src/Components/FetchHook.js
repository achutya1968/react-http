import React, { useState, useEffect } from "react";

function FetchHook() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => setPosts(data))
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div style={{ color:"red" }}>
      <h1 style={{ textAlign:"center", color: "green" }}>The Posts</h1>
      {posts.map((post) => (
        <div>
          <li style={{ textAlign:"center" }} key={post.id}>
            {post.title}
          </li>
        </div>
      ))}
    </div>
  );
}

export default FetchHook;
