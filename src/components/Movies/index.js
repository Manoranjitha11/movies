// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import NavBar from '../NavBar';
import Loader from '../Loader';
import MovieDetail from './MovieDetail';
import MovieList from './MovieList';

import {setMoviesList} from '../../actions/movieAction';
import config from '../../config';

const stateMap = store => ({
  movies: store.movie // fetch the movies store
});


class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Pop Movies', // page title
      isLoaded: false, // data is loaded or not
    };
  }

  fetchCall = async (props) => { // api call to fetch the movies from the movieorg API
      fetch({`https://api.themoviedb.org/3/movie/popular?api_key=${config.apiKey}`})
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState({
              isLoaded: true,
              showMovieList: true,
              title: 'Pop movies',
              movieDetail: {},
            });
            this.props.dispatch(setMoviesList(result.results));
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
  }

  componentWillMount() {
    if(!this.state.isLoaded) {
      this.fetchCall();
    }
   }

   movieDetail (movie) { // respective selected movie detail page
     this.setState({movieDetail : movie, showMovieList: false, title: 'Movie Detail'});
   }

   backPage() { // go back to the home page
     console.log('backpage', this.props.movies);
     if(this.state.showFav) {
       this.props.dispatch(setMoviesList(this.props.movies.allMoviesArr));
     }
     this.setState({showMovieList: true, title: 'Pop Movies', showFav: false});
   }

   favList() { // show the favourite list page
     let favMovies = this.props.movies.movieList.filter((movie) => movie.isFav === true);
     this.setState({showMovieList: true, title: 'My Favourites', showFav: true});
     this.props.dispatch(setMoviesList(favMovies));
   }

   componentWillReceiveProps(nextProps) { // when the store props changes update th movie detail page also (ie vote count, fav etc)
     if(this.state.movieDetail.hasOwnProperty('id')) {
       let id = this.state.movieDetail.id;
       let el = nextProps.movies.movieList;
       for(var i = 0; i < el.length; i++){
         console.log('vote count');
         if(el[i].id === id) {
           this.setState({movieDetail: el[i]}) // update the movie detail state with latest values
           return false;
         }
       }
     }
   }
  render() {
    return (
      this.state.isLoaded ?
            <div>
                <NavBar favList={(e) => this.favList(e)} backPage={(e) => this.backPage(e)} title={this.state.title} />
                {this.state.showMovieList ? <MovieList movieDetail={(movie) => this.movieDetail(movie)}/> : <MovieDetail movie={this.state.movieDetail} />}
            </div>
      : <Loader />
    );
  }
}

export default withRouter(connect(stateMap)(Movies))
