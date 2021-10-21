import React, { useState, useEffect } from "react";

function HookUseEff() {
  const [growth, setGrowth] = useState(0);
 

  useEffect(() => {
    console.log("Here I am");
   
  });



  const growHandler = () => {
    setGrowth((growth) => growth + 1);
  };



  return (
    <div>
      <ol>
        <h2>UseEffect</h2>
        <h2>Grow:{growth}</h2>
        <button onClick={growHandler}>Click</button>
      </ol>
    </div>
  );
}

export default HookUseEff;
