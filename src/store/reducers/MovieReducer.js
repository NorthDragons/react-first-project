import filmsJson from "../../components/films.json";

const GET_MOVIES = "GET_MOVIES";
const SHOW_INFO = "SHOW_INFO";
const HIDE_INFO = "HIDE_INFO";
let defaultState = {
    films: filmsJson
}
export const movieReducer = (state, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, films: action.payload}
        case SHOW_INFO:
            return {...state, films: filmsJson, film: action.payload}
        case HIDE_INFO:
            return {...state, films: filmsJson, film: null}
        default:
            return defaultState
    }
}

export const showInfoAction = (payload) => ({type: SHOW_INFO, payload})
export const getMoviesAction = (payload) => ({type: GET_MOVIES, payload})
export const hideInfoAction = () => ({type: HIDE_INFO})
