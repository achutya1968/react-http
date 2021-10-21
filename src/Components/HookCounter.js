//import React, { useState } from "react";

/*function HookCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count} times</button>
    </div>
  );
}*/
import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Paul:</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Clicked {count} times !
      </button>
    </div>
  );
}

export default HookCounter;
