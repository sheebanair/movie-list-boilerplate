import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieListItems = (props) => (
  <div className="movie-list">
    {props.movies.map((movie, index) => {
      return <MovieListEntry movie={movie} key={index}/>;
    })}
  </div>
);


export default MovieListItems;

