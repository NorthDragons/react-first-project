const GET_MOVIES = "GET_MOVIES";
const SHOW_INFO = "SHOW_INFO";
const HIDE_INFO = "HIDE_INFO";
const ADD_MOVIE = "ADD_MOVIE";
const DELETE_MOVIE = "DELETE_MOVIE";
const UPDATE_MOVIE = "UPDATE_MOVIE";


let defaultState = {
    films: [],
    film: null
}

export const movieReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_MOVIE:
            state.films = state.films.filter(film => film.id !== action.film.id)
            return {...state, films: [...state.films, action.film]}
        case DELETE_MOVIE:
            return {...state, films: state.films.filter(film => film.id !== action.id)}
        case ADD_MOVIE:
            return {...state, films: [...state.films, action.film]}
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
export const addMovieAction = (film) => ({type: ADD_MOVIE, film})
export const deleteMovieAction = (id) => ({type: DELETE_MOVIE, id})
export const updateMovieAction = (film) => ({type: UPDATE_MOVIE, film})