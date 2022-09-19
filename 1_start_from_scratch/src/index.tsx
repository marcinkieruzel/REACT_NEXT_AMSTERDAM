import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <h1>Hello world!!!</h1>;
};

ReactDOM.render(<App />, document.querySelector("#root"));

export default {};

//React 18 version

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);
