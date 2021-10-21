import React, { useState } from "react";

/*function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      count:{count} <br /> <br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick = {() =>setCount(prevCount => prevCount + 1)}>Increase</button>
      <button onClick = {() =>setCount(prevCount => prevCount - 1)}>Decrease</button>
    </div>
  );
}*/

/*function HookCounterTwo(){
  const initialCount = 0
  const [count,setCount] = useState(initialCount)
  return(
    <div>
    count :{count}
    <button onClick = {() =>setCount(initialCount)}>Reset</button><br />
    <button onClick = {()=>setCount(prevCount =>prevCount + 1)}>Increase</button><br />
    <button onClick = {()=>setCount(prevCount =>prevCount - 1)}>Decrease</button>
    </div>
  )
}

export default HookCounterTwo*/

function HookCounterTwo() {
  const InitialCount = 0;
  const [count, setCount] = useState(InitialCount);
  
  function decreaseHandler(){
    
      count > 0 ? setCount(prevCount =>prevCount-1):setCount(InitialCount)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <br /> <br />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(InitialCount)}>Reset</button>
      <button onClick={decreaseHandler}>
        decrease
      </button>
    </div>
  );
}

export default HookCounterTwo;
