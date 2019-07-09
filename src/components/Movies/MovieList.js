// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './movies.css';
import config from '../../config';

const stateMap = store => ({
  movies: store.movie, // fetch the movies store
});


class MovieList extends Component {

 shouldComponentUpdate(nextProps, nextState) { // render the component only when props values is changed - performance optimisation
    if(this.props.movies.movieList.length !== nextProps.movies.movieList.length ) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="container-fluid mw-85 mauto mt-7" >
        {this.props.movies.movieList.length === 0 ? <div className="movieAvg empty"> No movies are present or Invalid API KEY</div> :
            <div className="row">
                {
                  this.props.movies.movieList.map((movie) =>
                  <div key={movie.id} onClick={() => this.props.movieDetail(movie)} className="col-xs-6 col-sm-3 col-lg-2 cardOuterBox">
                    <div className="card cardBox">
                     <img className="card-img-top" src={config.baseURL + movie.backdrop_path} alt="movie_pictures" />
                          <div className="card-block text-center">
                             <h4 className="card-title">{movie.original_title}</h4>
                             <p className="card-text"><small className="text-muted"> Last updated 3 mins ago</small></p>
                         </div>
                     </div>
                   </div>
                )}
              </div>
            }
          </div>
      );
   }
}

export default connect(stateMap)(MovieList);
