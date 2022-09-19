import React, { useContext } from "react";
import { Result } from "../interfaces/Result";
import teams from "./teams.json";
import reduce from "lodash/reduce";
import { TableContext } from "./App";
import sortBy from "lodash/sortBy";

const teamSelector = (id: number) => {
  return teams.find((x) => x.id == id);
};


// Calculate table position based on results
const calculateTablePosition = (state: Result[]) => {

  return reduce(
    state,
    (r: any, v: Result) => {
      const points = (mygolas: number, theirgoals: number) => {
        if (mygolas === theirgoals) return 1;
        return mygolas > theirgoals ? 3 : 0;
      };

      const host = {
        id: v.host,
        goals: v.hostGoals,
        points: points(v.hostGoals, v.guestGoals),
      };
      const guest = {
        id: v.guest,
        goals: v.guestGoals,
        points: points(v.guestGoals, v.hostGoals),
      };

      if (r[host.id]) {
        r[host.id] = {
          id: host.id,
          points: Number(r[host.id].points) + Number(host.points),
          goals: Number(r[host.id].goals) + Number(host.goals),
        };
      } else {
        r[host.id] = {
          id: host.id,
          points: Number(host.points),
          goals: Number(host.goals),
        };
      }

      if (r[guest.id]) {
        r[guest.id] = {
          id: guest.id,
          points: Number(r[guest.id].points) + Number(guest.points),
          goals: Number(r[guest.id].goals) + Number(guest.goals),
        };
      } else {
        r[guest.id] = {
          id: guest.id,
          points: Number(guest.points),
          goals: Number(guest.goals),
        };
      }

      return { ...r };
    },
    {}
  );
};

type Props = {};

const Tables: React.FC<Props> = ({}): JSX.Element => {
  const context = useContext(TableContext);

  const results = calculateTablePosition(context.matches);

  console.log(results);

  return (
    <div className={"container"}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Team</th>
            <th scope="col">Goals</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          {/* It says sort results by points and goals */}
          {sortBy(Object.values(results), ["points", "goals"]).reverse().map(
            (x: any, i) => {
              return (
                <tr key={x.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{teamSelector(x.id)?.name}</td>
                  <td>{x.goals}</td>
                  <td>{x.points}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
