import React, { Component } from 'react';
import Movie from './movie';

class ImdbList extends Component {
  render() {
    const movies = this.props.data.map(movie => {
      return (
        <Movie name={movie.name} key={movie.id}>{movie.url}</Movie>
      )
    })
    return (
      <div className="imdb-list">
        {movies}
      </div>
    )

  }
}

export default ImdbList;
