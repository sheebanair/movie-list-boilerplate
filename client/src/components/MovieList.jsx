import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

const MovieListItems = (props) => (
  <div>
   <button onClick={props.setviewtowatched}> Watched</button>
   <button onClick={props.setviewtounwatched}> To Watch</button>
  <div className="movie-list">
   {props.movies.map((movie, index) => {
      return <MovieListEntry movie={movie} key={index}/>;
   })}
  </div>
  </div>
);




export default MovieListItems;

