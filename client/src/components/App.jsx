import React from 'react';
import MovieListItems from './MovieList.jsx';
import SearchBar from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import axios from 'axios';

var movies = [
  {title: 'Mean Girls',
   Year: 1995,
   Runtime: '107 min',
   MetaScore: 46},
  {title: 'Hackers',
  Year: 1996,
  Runtime: '108 min',
  MetaScore: 47},
  {title: 'The Grey',
  Year: 1992,
  Runtime: '107 min',
  MetaScore: 41},
  {title: 'Sunshine',
  Year: 1991,
  Runtime: '102 min',
  MetaScore: 42},
  {title: 'Ex Machina',
  Year: 1995,
  Runtime: '107 min',
  MetaScore: 46}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();

  }

  getMovies() {
    axios.get('/api/movies')
      .then(({data}) => this.setState({movies: data}))
      .catch((err) => console.log(err));
  }

  addMovie(movie) {
    var currentList = this.state.movies;
    var movieExists = false;
    for (var i = 0; i < currentList.length; i++) {
      if(currentList[i].movie === movie) {
        movieExists = true;
      }
    }
    if(!movieExists) {
      currentList.push({movie: movie});
    }

    this.setState({
      movies: currentList
    });

    // axios.post('/api/movies', movie)
    //   .then(() => this.getMovies());
      // .catch((err) => console.log(err));
  }

  handleSearch(searchMovie) {
    var match = [];
    for (var i = 0; i < movies.length; i++) {
      if ((this.state.movies[i].movie).includes(searchMovie)) {
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