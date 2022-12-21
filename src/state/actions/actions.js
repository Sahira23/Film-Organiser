import axios from "axios";
import { ADD_TO_LIST, FETCH_FILM_BY_SEARCH, FETCH_FILM_DATA, FETCH_FILM_ERROR, FETCH_FILM_PENDING, GET_LIST, REMOVE_FROM_LIST } from "../action-types/actionTypes";
const api_key = process.env.REACT_APP_API_KEY
export const fetch_film_loading = () => {
    return {
        type: FETCH_FILM_PENDING
    }
}
export const fetch_film_error = (error) => {
    return {
        type: FETCH_FILM_ERROR,
        payload: error
    }
}
export const fetch_film_data = (film_list) => {
    return {
        type: FETCH_FILM_DATA,
        payload: film_list
    }
}
export const fetch_film_by_search = (search_list) => {
    return {
        type: FETCH_FILM_BY_SEARCH,
        payload: search_list
    }
}

export const getfilms = () => {
    return function async(dispatch) {
        dispatch(fetch_film_loading())
        axios.get(`http://www.omdbapi.com/?apikey=${api_key}&s=alice`)
            .then(response => {
                const film_list = response.data.Search;
                dispatch(fetch_film_data(film_list));
                console.log(`http://www.omdbapi.com/?apikey=${api_key}`)
            })
            .catch(error => {
                dispatch(fetch_film_error(error.message))
            })

    }
}
export const getbysearch = (searchtext) => {
    return function async(dispatch) {
        dispatch(fetch_film_loading())
        axios.get(`http://www.omdbapi.com/?apikey=${api_key}&s=${searchtext}`)
            .then(response => {
                const search_list = response.data.Search;
                dispatch(fetch_film_by_search(search_list));
                console.log(search_list)
            })
            .catch(error => {
                dispatch(fetch_film_error(error.message))
            })

    }
}

export const addToList = (item) => {
    return (dispatch) => {
        return (
            dispatch({
                type: ADD_TO_LIST,
                payload:
                { id: item?.imdbID,
                  name: item?.Title,
                  year: item?.Year,
                  img:item?.Poster
                 }
            })
        )
    }
}
export const removeFromList = (id) => {
    return {
        type : REMOVE_FROM_LIST, payload: id
    };
};
export const getList = (name) => {
    return (dispatch) => {
        return (
            dispatch({
                type: GET_LIST,
                payload:name
            })
        )
    }
}