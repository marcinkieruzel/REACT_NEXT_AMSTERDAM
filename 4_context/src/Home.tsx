import { format } from "path";
import React, { FormEvent, useContext, useState } from "react";
import { TableContext } from "./App";
import teams from "./teams.json";
import { Result } from "../interfaces/Result";

const teamSelector = (id: number) => {
  return teams.find((x) => x.id == id);
};

type Props = {};

const Home: React.FC<Props> = ({}): JSX.Element => {
  const context = useContext(TableContext);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    round: 0,
    host: 0,
    hostGoals: 0,
    guest: 0,
    guestGoals: 0,
  });

  const handleChange = (e: FormEvent<any>) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("")


    if(form.guest === form.host) {
      setError("Two teams can't play together")
      return;
    }


    const duplicate = context.matches.find(x => {
      return x.host === form.host && x.guest === form.guest
    })

    if(duplicate) {
      setError("The match already took place")
      return;
    }

    context.setMatches({ type: "ADD_MATCH", payload: form });
  };

  console.log("Matches", context.matches);

  return (
    <div className={"container"}>
      <h1>Add result</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="round">Round</label>
          <input
            onChange={handleChange}
            value={form.round}
            type="number"
            name="round"
            className="form-control"
            id="round"
          />
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="host">Host</label>
          <select
            onChange={handleChange}
            value={form.host}
            className="form-control"
            id="host"
            name="host"
          >
            {teams.map((x) => {
              return (
                <option key={x.id} value={x.id}>
                  {x.name}
                </option>
              );
            })}
          </select>
          <label htmlFor="hostGoals">Goals</label>
          <input
            name="hostGoals"
            onChange={handleChange}
            value={form.hostGoals}
            type="number"
            className="form-control"
            id="hostGoals"
          />
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="guest">Guest</label>
          <select
            name="guest"
            onChange={handleChange}
            value={form.guest}
            className="form-control"
            id="guest"
          >
            {teams.map((x) => {
              return (
                <option key={x.id} value={x.id}>
                  {x.name}
                </option>
              );
            })}
          </select>
          <label htmlFor="hostGoals">Goals</label>
          <input
            name={"guestGoals"}
            onChange={handleChange}
            value={form.guestGoals}
            type="number"
            className="form-control"
            id="guestGoals"
          />
        </div>
        <hr />
        <button type="submit" className="btn btn-primary">
          Add result
        </button>
        {error && <p style={{ color: "red", padding: "10px 0" }}>{error}</p>}
      </form>

      <ul>
        {context.matches.map((x: Result, i) => {
          return (
            <li key={i}>
              {teamSelector(x.host)?.name} - {teamSelector(x.guest)?.name}{" "}
              {x.hostGoals}:{x.guestGoals}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
