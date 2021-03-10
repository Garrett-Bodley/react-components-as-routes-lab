import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const loadDirectors = () => {
    return directors.map((dir, index) => {
      return (
        <div key={index}>
          <h2>Name: {dir.name}</h2>
          <p>Movies:</p>
          <ul>
            {dir.movies.map((mov, index) => <li key={dir.name + index}>{mov}</li>)}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {loadDirectors()}
    </div>
  );
}

export default Directors
