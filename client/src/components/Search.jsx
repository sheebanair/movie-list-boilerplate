import React from 'react';
import App from './App.jsx';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange(input) {
    this.setState({
      searchValue: input.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.searchValue);
    this.state.searchValue = '';
  }

  render() {
    return (
      <form >
        <button> Watched</button>
        <button> To Watch</button>
      <label>
        <input name="search" placeholder="Search.." value={this.state.searchValue} onChange={this.handleChange}/>
      </label>
      <button type="button" onClick={this.search}>Go</button>
    </form>
    );
  }

}


export default SearchBar;

// onClick={this.setState({watched: !this.state.watched})}