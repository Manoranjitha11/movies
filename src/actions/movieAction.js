export function setMoviesList(payload) { // set the list of movies
    return {
            type: 'SET_MOVIES_LIST',
            payload
        }
}

export function setMoviesFav(payload) { // set the slected movie as favourite
    return {
            type: 'SET_MOVIE_AS_FAV',
            payload
        }
    }


export function increaseVote(payload) { // increase the vote of the selected movie by 1
    return {
            type: 'INCREASE_VOTE',
            payload
        }
    }
