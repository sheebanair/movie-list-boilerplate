import React from 'react';
import MovieListItems from './MovieList.jsx';
import SearchBar from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import axios from 'axios';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.addMovie = this.addMovie.bind(this);
    // this.getMovies = this.getMovies.bind(this);
  }

  // componentDidMount() {
  //   this.getMovies();
  // }

  // getMovies() {
  //   axios.get('/api/movies')
  //     .then(({data}) => this.setState({movies: data}));
  // }

  addMovie(movie) {
    var currentList = this.state.movies;
    console.log(currentList);
    var movieExists = false;
    for (var i = 0; i < currentList.length; i++) {
      if(currentList[i].title === movie) {
        movieExists = true;
      }
    }
    if(!movieExists) {
      currentList.push({title: movie});
    }

    this.setState({
      movies: currentList
    });
    // axios.post('/api/movies', movie)
    //   .then(() => this.getMovies());
  }

  handleSearch(searchMovie) {
    var match = [];
    for (var i = 0; i < movies.length; i++) {
      if ((this.state.movies[i].title).includes(searchMovie)) {
        match.push(this.state.movies[i])
      };
    }

    if(match.length === 0) {
      alert('Oops, we do not have this movie!');
    }

    this.setState({
      movies: match
    });

  }

  render() {

    return (
      <div>
        <h1>Movie List</h1>
        <br></br>
        <AddMovie addMovie={this.addMovie}/>
        <br></br>
       <SearchBar onSearch ={this.handleSearch}/>
        <br></br>
        <MovieListItems movies={this.state.movies} />
      </div>
    )
  }
}



export default App;


// inputVal={this.handleChange}