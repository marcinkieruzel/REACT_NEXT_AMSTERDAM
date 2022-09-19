import React, { useMemo, useState } from "react";



const css = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "600px",
  height: "600px",
};

function factorialOf(n) {
  console.log("factorialOf(n) called! Was it really nessesary???");
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

const usememo: React.FC = (): JSX.Element => {
  const [input, setInput] = useState("0");
  const [color, setColor] = useState("pink");

  const factorial = useMemo(() => factorialOf(Number(input)), [input]);

  return (
    <>
      <label>
        <input
          type={"number"}
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        Change me to count the factorial of the input value
      </label>
      <div
        onClick={() => {
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          setColor(`#${randomColor}`);
        }}
        style={{ ...css, backgroundColor: color }}
      >
        <h1>{factorial}</h1>
      </div>
    </>
  );
};

export default usememo;
