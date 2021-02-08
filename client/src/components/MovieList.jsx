import React from 'react';

var MovieListItems = (props) => (
  <div className="movie-list">
    {props.movies.map((movie, index) =>
      <div key={index}> {movie.title} </div>
    )}
  </div>
);


export default MovieListItems;

