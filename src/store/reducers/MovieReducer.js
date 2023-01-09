const GET_MOVIES = "GET_MOVIES";
const SHOW_INFO = "SHOW_INFO";
const HIDE_INFO = "HIDE_INFO";
const ADD_MOVIE = "ADD_MOVIE";
const DELETE_MOVIE = "DELETE_MOVIE";
const UPDATE_MOVIE = "UPDATE_MOVIE";
const SET_FILTER = "SET_FILTER";
const SORT_MOVIES = "SORT_MOVIES";

let defaultState = {
    films: [],
    film: null,
    sort: 'title',
    filter: ["all"]
}

export const movieReducer = (state, action) => {
    let films = []
    switch (action.type) {
        case SET_FILTER:
            return {...state, filter: action.genre}
        case SORT_MOVIES:
            films = [...state.films.sort(sortByField(action.sortValue))]
            return {...state, films: films, sort: action.sortValue}
        case UPDATE_MOVIE:
            films = [...state.films.filter(film => film.id !== action.film.id)]
            films.push(action.film)
            films.sort(sortByField(state.sort))
            return {...state, films: films}
        case DELETE_MOVIE:
            return {...state, films: state.films.filter(film => film.id !== action.id)}
        case ADD_MOVIE:
            films = [...state.films, action.film]
            films.sort(sortByField(state.sort))
            return {...state, films: films}
        case GET_MOVIES:
            console.log("get moovv")
            films = [...action.films]
            films.sort(sortByField(state.sort))
            return {...state, films: films}
        case SHOW_INFO:
            return {...state, film: action.film}
        case HIDE_INFO:
            return {...state, film: null}
        default:
            return defaultState
        //
    }
}

function sortByField(field) {
    if (field === 'releaseDate') {
        return (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate);
    } else {
        return (a, b) => a[field].toLowerCase() > b[field].toLowerCase() ? 1 : -1;
    }
}

export const showInfoAction = (film) => ({type: SHOW_INFO, film})
export const getMoviesAction = (films) => ({type: GET_MOVIES, films})
export const hideInfoAction = () => ({type: HIDE_INFO})
export const addMovieAction = (film) => ({type: ADD_MOVIE, film})
export const deleteMovieAction = (id) => ({type: DELETE_MOVIE, id})
export const updateMovieAction = (film) => ({type: UPDATE_MOVIE, film})
export const sortMoviesAction = (sortValue) => ({type: SORT_MOVIES, sortValue})

export const setFilterAction = (genre) => ({type: SET_FILTER, genre}
)