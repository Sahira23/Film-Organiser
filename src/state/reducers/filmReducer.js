import { ADD_TO_LIST, FETCH_FILM_BY_SEARCH, FETCH_FILM_DATA, FETCH_FILM_ERROR, FETCH_FILM_PENDING, GET_LIST, REMOVE_FROM_LIST } from "../action-types/actionTypes"

const initialState = {
    filmdata: [],
    loading: true,
    error: "",
    searched: [],
    list: [],
    listcount: 0,
    listName: ""
}

export const fimlReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILM_PENDING:
            return {
                ...state, loading: true,
            }
        case FETCH_FILM_DATA:
            return {
                ...state, loading: false, error: "", filmdata: action.payload
            }
        case FETCH_FILM_ERROR:
            return {
                ...state, loading: false, error: action.payload, filmdata: []
            }
        case FETCH_FILM_BY_SEARCH:
            return {
                ...state, loading: false, error: "", searched: action.payload
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: [...state.list, {
                    id: action.payload.id,
                    name: action.payload.name,
                    year: action.payload.year,
                }],
                listcount: state.listcount + 1
            };
        case GET_LIST:
            return {
                ...state,
                listName: action.payload
            };
        case REMOVE_FROM_LIST:
            return {... state, list : state.list.filter((event) => event.id !== action.payload)}
        default: return state
    }
}