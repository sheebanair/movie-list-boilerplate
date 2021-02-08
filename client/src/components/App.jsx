import React from 'react';
import MovieListItems from './MovieList.jsx';
import SearchBar from './Search.jsx';
import AddMovie from './AddMovie.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      highlighted: false,
    };

  }


  addMovie(event) {
    this.state.movies.push({title: this.state.value});
    this.setState({
      movies: this.state.movies
    });
  }

  // handleSearch(input) {
  //   this.setState({
  //     value: input
  //   });
  // }

  // handleSubmit(event) {
  //   var match = [];
  //   for (var i = 0; i < movies.length; i++) {
  //     if ((this.state.movies[i].title).includes(this.state.value)) {
  //       match.push(this.state.movies[i])
  //     };
  //   }
  //   this.setState({
  //     movies: match
  //   });

  // }

  render() {

    return (
      <div>
        <h1>Movie List</h1>
        <br></br>
        {/* <AddMovie add={this.addMovie.bind(this)} movies={this.state.movies}/> */}
        {/* <br></br> */}
        <SearchBar />
        <br></br>
        <MovieListItems movies={this.state.movies} />
      </div>
    )
  }
}



export default App;


// inputVal={this.handleChange}