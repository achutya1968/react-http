import React, { useState, useEffect } from "react";
//import { setEnvironmentData } from "worker_threads";
//import axios from "axios";

/*function Transfer() {
  const [posts, setPost] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(resp => {
    console.log(resp);  
    setPost(resp.data);
    });
  });

  return (
    <div>
      <h3>List</h3>
      {
           //<pre>JSON.stringify(posts,null,2)</pre>
        posts.length ?
        posts.map((post) =>  <div key={post.id}>{post.id
        } </div>) : null
      }
    </div>
  );
}*/

function Transfer() {
  const [posts, setPost] = useState('');

  function getApi(){
    try {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then(resp => resp.json())
        .then(data => setPost(data))
    } 
     catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <h3>List of Posts</h3>
      
{
    posts.length?
    posts.map(post => <div key={post.id}>{post.body}</div>):null
}
    </div>
  );
}

export default Transfer;
