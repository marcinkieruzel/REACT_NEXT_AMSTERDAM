import React, { useEffect, useState } from "react";

const capitals = [
  {
    country: "France",
    capital: "Paris",
  },
  {
    country: "Poland",
    capital: "Warsaw",
  },
  {
    country: "Italy",
    capital: "Rome",
  },
];

const UseState: React.FC = (): JSX.Element => {
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
      setCorrectAnswer(null)
      setInput("")
  }, [currentQuestion])


  return (
    <div>
      <h1>The capital of {capitals[currentQuestion].country} is ?</h1>
      <input value={input} onChange={(e) => setInput(e.currentTarget.value)} />
      <button
        onClick={() => {
          setCorrectAnswer(input === capitals[currentQuestion].capital);
        }}
      >
        Check the answer
      </button>
      <button onClick={() => setCurrentQuestion((prev) => (prev + 1) % 3)}>
        Next question
      </button>

      {correctAnswer === true && "Correct Answer"}
      {correctAnswer === false && "Wrong Answer"}
    </div>
  );
};

export default UseState;
