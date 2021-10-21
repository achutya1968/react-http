import React, { useState, useEffect } from "react";

function FetchApi() {
  const [data, setData] = useState([]);

  const GetApi = () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((resp) => resp.json())
        .then(data=>setData(data))
  };

  useEffect(() => {
    GetApi();
  }, []);

  return (
    <div>
      <h1 style ={{color:"red", marginLeft:15}}>My Api data</h1>
      {
      //<pre>{JSON.stringify(data,null,3)}</pre>
       data.map(data=> <li key={data.id}>His/Her id is:{data.id}</li>)

      }
    </div>

  );
}

export default FetchApi;
