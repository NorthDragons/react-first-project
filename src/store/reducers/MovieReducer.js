const GET_MOVIES = "GET_MOVIES";
const SHOW_INFO = "SHOW_INFO";
const HIDE_INFO = "HIDE_INFO";

let defaultState = {
    films: [],
    film: null
}

export const movieReducer = (state, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, films: action.films}
        case SHOW_INFO:
            return {...state, film: action.film}
        case HIDE_INFO:
            return {...state, film: null}
        default:
            return defaultState
    }
}

export const showInfoAction = (film) => ({type: SHOW_INFO, film})
export const getMoviesAction = (films) => ({type: GET_MOVIES, films})
export const hideInfoAction = () => ({type: HIDE_INFO})
