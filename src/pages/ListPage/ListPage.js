import React from 'react';
import { useSelector } from 'react-redux';
import './ListPage.css';

const ListPage = () => {
    const data = useSelector(state => state.filmData.listName);
    const films = useSelector(state => state.filmData.list)
    console.log(films)
    return (
        <div className="list-page">
            <h1 className="list-page__title">{data}</h1>
            <div className="film-container">
               {films?.map(item=>{
                return <p>{item.name}</p>
               })}
            </div>
        </div>
    );
}

export default ListPage;