// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setMoviesFav, increaseVote} from '../../actions/movieAction';
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import config from '../../config';

import './movies.css';

const stateMap = store => ({
});


class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 openModal() { // open the iframe (Youtube video) as a overlay
   console.log('hih');
   this.setState({isOpen: true})
 }

 markAsFav(id) { // mark the selected movie as Favourite and update the store (movies reducer) value
  console.log('markAsFav');
  this.props.dispatch(setMoviesFav(id));
 }

 thumbsUp(id) { //to increase in the voute count
   this.props.dispatch(increaseVote(id));
 }

  shouldComponentUpdate(nextProps, nextState) { // render the component only when props values is changed - performance optimisation
    if(this.props.movie !== nextProps.movie || nextState.isOpen) {
      return true;
    }
    return false;
  }

  render() {
    const {movie} = this.props; // ES6 Object destructuring
    return (
      <div className="movieDetail">
          <div className="movieName">{movie.original_title}</div>
             <div className="d-flex container-fluid">
              <div className="d-flex thumbnailImg">
                <div className="imgContanier">
                  <img src={config.baseURLLarge + movie.backdrop_path} alt="Movie_image" />
                  <p className="voteCount"><i onClick={() => this.thumbsUp(movie.id)} className="fa fa-thumbs-up thumbsIcon"></i> {movie.vote_count}</p>
                </div>
                <div className="movieDetails">
                  <p className="yearValue">{new Date(movie.release_date).getFullYear()}</p>
                  <p className="movieLength"><i>120 min</i></p>
                  <p className="movieAvg">{movie.vote_average} / 10 </p>
                  <p onClick={() => this.markAsFav(movie.id)} className="favBtn"> {movie.isFav ? 'Remove From Fav' : 'Mark as Favourite'} </p>
                </div>
              </div>
            </div>
            <div className="movieOverview">
              {movie.overview}
            </div>
            <div className="trailer text-left">
                <h6>Trailers</h6>
                <p><i onClick={(e) => this.openModal(e)} className="fa fa-play playIcon"></i>  Trailer 1</p>
                <p><i onClick={(e) => this.openModal(e)} className="fa fa-play playIcon"></i>  Trailer 2</p>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='Nt9L1jCKGnE' onClose={() => this.setState({isOpen: false})} />
            </div>
        </div>
     );
  }
}

export default connect(stateMap)(MovieDetail);
