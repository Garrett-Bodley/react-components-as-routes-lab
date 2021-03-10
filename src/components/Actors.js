import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const loadActors = () => {
    return actors.map((act, index) => {
      return(
        <div key={index}>
          <h2>Name: {act.name}</h2>
          <p>Movies:</p>
          <ul>
            {act.movies.map((mov, index) => <li key={act.name + index}>{mov}</li>)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {loadActors()}
    </div>
  );
};

export default Actors;
