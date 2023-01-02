import filmsJson from "../../components/films.json";

const defaultState = {
    films: filmsJson,
}
export const movieReducer = (state, action) => {
    switch (action.type) {
        case "SHOW_INFO":
            return {...state, films: filmsJson, film: action.film}
        case "HIDE_INFO":
            return {...state, films: filmsJson, film: null}
        default:
            return defaultState
    }
}