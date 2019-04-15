import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div className="movie">
      <ul>
      <li>{this.props.name}</li>
      </ul>
      </div>
    )
  }
}

export default Movie;
