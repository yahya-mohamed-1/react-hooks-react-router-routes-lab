import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    {/*{code here}*/}
    <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, movieIndex) => (
              <li key={movieIndex}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>;
}

export default Actors;
