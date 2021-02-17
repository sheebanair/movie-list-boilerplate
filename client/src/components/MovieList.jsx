import React from 'react';


class MovieListItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: false
    }

    this.hasWatched = this.hasWatched.bind(this);
  }

  hasWatched() {
    this.setState({
      watched: !this.state.watched
    })
  }

  render() {
    return (
      <div onClick={this.hasWatched} className="movie-list">
      {this.props.movies.map((movie, index) =>
        <div key={index} movie={movie}>
          <span>{movie.title}</span>
          <span> {this.state.watched ? <button >Watched</button> : null}</span>
        </div>
      )}
    </div>
    );
  }
}


export default MovieListItems;

