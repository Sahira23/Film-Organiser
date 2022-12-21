import React, { useState } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { addToList } from '../../state/actions/actions';


const MainPage = () => {
    const data = useSelector(state => state.filmData.searched)
    const list = useSelector(state => state.filmData.list);
    console.log(list)
    function filmExists(id) {
        return list.some(function (el) {
            return el.id === id;
        });
    }

console.log(list)
    console.log(data);
    const dispatch = useDispatch()
    const add = (item,e) => {
        if (filmExists(item.imdbID)) {
            e.target.textContent="added"
        }
        else {
            dispatch(addToList(item));
            e.target.textContent="added"
        }

    }

    return (
        <div className="main-page">
            <Header />
            <Carousel />
            <div className="searched-area mt-4">
                <h2 className='d-flex justify-content-center search-head'>Search Results</h2>
                <div className="search-container d-flex">
                    {data?.map(item => {
                        return (
                            <div className="search-card">
                                <div className="search-card-img">
                                    <img src={item.Poster} alt="" />
                                </div>
                                <p>{item.Title}</p>
                                <button className='btn btn-danger mt-2' type='button' onClick={(e)=>{add(item,e)}}>add to list</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default MainPage;