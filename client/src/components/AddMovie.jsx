import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(input) {
    this.setState({
      movie: input.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addMovie(this.state.movie);
    this.state.movie = '';
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Add movie title here" name="movieAdd" value={this.state.movie} onChange={this.handleChange}></input>
        <button type="reset" onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}
export default AddMovie;