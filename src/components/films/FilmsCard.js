import React from 'react';

const FilmsCard = ({films}) => {
    const filmsArray = films.map((film, i) => {
        return (
            <Card 
                key={films[i]}
                title={film.title}
                director={film.director}
                releaseDate={film.release_date}
            /> 
        );
    })

    return (
        <div>
            {filmsArray}
        </div>
    )
}


const Card = ({title, director, releaseDate}) => {
    return (
        <div className="tc bg-light-green dib be3 pa3 ma2 grow bw2 shadow-5">
            <img  alt=''src='#' />
            <div>
                <h2>{title}</h2>
                <p>director: {director}</p>
                <p>release date: {releaseDate}</p>
            </div>
        </div>
    )
}

export default FilmsCard;