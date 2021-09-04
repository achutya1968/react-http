import React, { useState } from "react";

function RandomColor() {
  const [hex, setHex] = useState("#ffffff");

  const randomHex = () => {
    const randomcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomcolor);
  };

  return (
    <body>
      <div
        style={{
          backgroundColor: `${hex}`,
          zoom: 2,
          overflow: "hidden",
          minHeight: "45vh",
        }}
      >
        <h1>{hex}</h1>
        <button style={{ margin: "5px" }} onClick={randomHex}>
          Randomize
        </button>
        <button
          style={{ margin: "5px" }}
          onClick={() => navigator.clipboard.writeText(hex)}
        >
          Copy code
        </button>
      </div>
    </body>
  );
}

export default RandomColor;
