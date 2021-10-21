import React, { useState } from "react";

function Message() {
  const [message, setMessage] = useState("Hello visitor!");
  const [notice, setNotice] = useState(" ");

  //function changeMessage() {
  //setMessage("Thank you!")
  //}

  function changeNotice() {
    setNotice("Please hit the like button!");
  }

  return (
    <div>
      <h1>{message}</h1>
      <h2>{notice}</h2>
      <button style={{ color: "red" }} onClick={() => setMessage("Thank you !!")}>
        Subscribe
      </button>
      <button style={{ color: "green" }} onClick={changeNotice}>
        Request
      </button>
    </div>
  );
}

export default Message;
