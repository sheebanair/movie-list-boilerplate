import React from 'react';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      watched: false,
      clicked: false,
      view: ''
    }

    this.setviewtounwatched = this.setViewToUnwatched.bind(this);
    this.setviewtowatched = this.setViewToWatched.bind(this);
    this.hasWatched = this.hasWatched.bind(this);
    this.hasClickedForInfo = this.hasClickedForInfo.bind(this);
  }

  hasClickedForInfo() {
    this.setState({
      clicked: !this.state.clicked
    })

  }
  hasWatched() {
    this.setState({
      watched: !this.state.watched
    })
  }

  setViewToWatched() {
    if(this.state.watched === true) {
      this.setState({
        view: 'watched'
      });
    }
  }

  setViewToUnwatched() {
    if(this.state.watched === false) {
      this.setState({
        view: 'to watch'
      });
    }
  }



  render() {
    return (
      <div onClick={this.hasWatched} className="video-list-entry">
          <span onClick ={this.hasClickedForInfo}> {this.state.clicked ? <div>Title: {this.props.movie.movie}</div>  : this.props.movie.movie} </span>
          <span  > {this.state.watched ? <button>Watched</button> : null}</span>
      </div>
    );
  }
}

export default MovieListEntry;