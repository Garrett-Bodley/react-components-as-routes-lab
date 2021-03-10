import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const loadMovies = () => {
    return movies.map((mov, index) => {
      return(
        <div key={index}>
          <h2>Name: {mov.title}</h2>
          <p>Time: {mov.time}</p>
          <p>Genres:</p>
          <ul>
            {mov.genres.map((genre, index) => <li key={mov.title + index}>{genre}</li> )}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {loadMovies()}
    </div>
  );
};

export default Movies;
