import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getbysearch } from '../../state/actions/actions';
import './SearchBox.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.filmData);
    const [state, setState] = useState({
        searchLine: '',
    })

    const searchLineChangeHandler = (e) => {
        setState({ ...state,searchLine: e.target.value });
    }
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(getbysearch(state.searchLine));
        state.searchLine=""
    }
    return (
        <div className="search-box">
            <form className="search-box__form d-flex align-items-center" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    <input
                        value={state.searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!state.searchLine}
                >
                    Искать
                </button>
            </form>
        </div>
    );
}

export default SearchBox
