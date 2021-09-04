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
  return (
    <div>
      count: {count}
      <br /> <br />
      <button onClick={() => setCount(InitialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        decrease
      </button>
    </div>
  );
}

export default HookCounterTwo;
