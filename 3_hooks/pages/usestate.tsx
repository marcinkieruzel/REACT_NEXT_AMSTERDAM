import React, { useState } from "react";

//const randomColor = Math.floor(Math.random()*16777215).toString(16);

const UseState: React.FC = (): JSX.Element => {
  const [color, setColor] = useState("pink");

  return (
    <button
      style={{ padding: "30px", fontSize: "26px", background: color }}
      onClick={() => {
        console.log("I've cliked");
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setColor(`#${randomColor}`);
      }}
    >
      Change color
    </button>
  );
};

export default UseState;
