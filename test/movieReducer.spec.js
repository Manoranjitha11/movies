import React from 'react'
// import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'

import movieReducer from '../src/reducers/movieReducer'

describe('>>>R E D U C E R --- Test moviesReducer',()=>{
    it('+++ reducer for SET_MOVIES_LIST', () => {
        let state = {movieList:[]}
        state = movieReducer(state,{type:"SET_MOVIES_LIST",payload:[]})
        expect(state).toEqual({movieList:[]})
    });
    it('+++ reducer for SET_MOVIE_AS_FAV', () => {
        let state = {movieList:[], allMoviesArr: []};
        state = movieReducer(state,{type:"SET_MOVIE_AS_FAV", payload: '50'});
        expect(state).toEqual({movieList:[], allMoviesArr: []});
    });
    it('+++ reducer for INCREASE_VOTE', () => {
        let state = {movieList:[], allMoviesArr: []};
        state = movieReducer(state,{type:"INCREASE_VOTE", payload: '50'});
        expect(state).toEqual({movieList:[], allMoviesArr: []});
    });

});
