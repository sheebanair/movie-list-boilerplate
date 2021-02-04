import React from 'react';

var AddMovie = (props) =>
  <form>
    <input type="text" name="MovieAdd" value={props.movie} onChange={props.addMovie}></input>
    <button type="reset" onClick={props.handleSubmit}>Add</button>
  </form>;

export default AddMovie;