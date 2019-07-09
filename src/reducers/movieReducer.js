
const initialState = {
  movieList : [], // props used in listing the movies according to the selection
  allMoviesArr: [], // original array is stored here
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // SET THE MOVIES LIST IN THE STORE VARIABLE 'movieList'
    case 'SET_MOVIES_LIST': {
      console.log('SET_MOVIES_LIS id reducer', action);
      // var moviesArr = action.payload;
      var resultMoviesArr = action.payload.map(function(el) {
        var result = Object.assign({}, el);
        if(!el.hasOwnProperty('isFav')) {
          result.isFav = false;
        }
        return result;
      })
      console.log('SET_MOVIES_LIS id reducer', resultMoviesArr);
      return {...state, movieList: resultMoviesArr};
    }

   // USED TO MARK THE MOVIE AS FAV AND VICE VERSA
    case 'SET_MOVIE_AS_FAV': {
      let movieId = action.payload;
      // let allMoviesArr = state.movieList;
      var favMoviesArr= state.movieList.map(function(el) {
        var result = Object.assign({}, el);
        if(el.id === movieId) {
            console.log('same Id', el.isFav);
            result.isFav = !el.isFav
        }
        return result;
      })
      console.log(favMoviesArr);
      return {...state, movieList: favMoviesArr, allMoviesArr: favMoviesArr};
    }

   // INCREASE THE NUMBER OF VOTES WHEN CLICKED ON THUMBS ICON
    case 'INCREASE_VOTE': {
      let movieId = action.payload;
      var voteMoviesArr= state.movieList.map(function(el) {
        var result = Object.assign({}, el);
        if(el.id === movieId) {
            console.log('same Id', el.vote_count);
            result.vote_count = el.vote_count + 1;
        }
        return result;
      })
      console.log(voteMoviesArr);
      return {...state, movieList: voteMoviesArr, allMoviesArr: voteMoviesArr};
    }

    default:
  }
  return state;
}
