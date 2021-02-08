import React from 'react';
import App from './App.jsx';

// var Search = ({handleSearch}, {handleSubmit}) => (
//   <form>
//     <input name="searchbar" type="text" onChange={(e) => handleSearch(e.target.value)}></input>
//     <button type="button"  onClick={(e) => handleSubmit(e.target.value)} >Go!</button>
//   </form>
// );

// export default Search;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    };


    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(input) {
    this.setState({
      searchValue: input
    });
  }

  handleSubmit(event) {
    var match = [];
    for (var i = 0; i < movies.length; i++) {
      if ((this.state.movies[i].title).includes(this.state.searchValue)) {
        match.push(this.state.movies[i])
      };
    }
    this.setState({
      movies: match
      // highlighted: true
    });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label> Search
        <input name="search" value={this.state.searchValue} onChange={(e) => this.handleSearch(e.target.searchValue)}/>
      </label>
      <button>Go</button>
    </form>
    );
  }

}


export default SearchBar;