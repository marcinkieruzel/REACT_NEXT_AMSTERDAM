import React, { createContext, useContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { reduceEachLeadingCommentRange } from "typescript";
import "./App.css";
import Home from "./Home";
import Tables from "./Tables";
import reduce from "lodash";
import { Result } from "../interfaces/Result";

export const TableContext = createContext<{
  matches: Array<any>;
  setMatches: React.Dispatch<any>;
}>({
  matches: [],
  setMatches: () => null,
});



function App() {
  const [matches, setMatches] = useReducer((state: any, action: any) => {
    console.log("ACTION", action);

    switch (action.type) {
      case "ADD_MATCH":
        return [...state, action.payload];
    }

    return state;
  }, []);

  return (
    <TableContext.Provider value={{ matches, setMatches }}>
      <Router>
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tables">
                Tables
              </Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tables" element={<Tables />}></Route>
        </Routes>
      </Router>
    </TableContext.Provider>
  );
}

export default App;
