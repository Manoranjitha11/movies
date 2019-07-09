import {setMoviesList,setMoviesFav, increaseVote} from '../src/actions/movieAction'

describe('A C T I O N --- Test movies operations',()=>{
    it('actionCreator setMovies', () => {
        const object = {id: '50', original_title: 'Spider Man'};
        const movies = setMoviesList(object)
        expect(movies).toEqual({type: "SET_MOVIES_LIST", payload: object})
    });

    it('actionCreator setMoviesFav', () => {
        const fav = setMoviesFav('50')
        expect(fav).toEqual({type: "SET_MOVIE_AS_FAV", payload: '50'})
    });

    it('actionCreator increaseVote', () => {
        const vote = increaseVote('50');
        expect(vote).toEqual({type:"INCREASE_VOTE",payload: '50'})
    });
});
