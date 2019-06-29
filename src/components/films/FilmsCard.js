import React from 'react';
import imageMapper from '../../helperFunctions/imageMapper';

const FilmsCard = ({films}) => {  
    const filmsArray = films.map((film, i) => {
        const image = imageMapper(film.title)

        return (
            <Card 
                key={i}
                title={film.title}
                episode={film.episode_id}
                director={film.director}
                releaseDate={film.release_date}
                image= {image}
            /> 
        );
    })

    return (
        <div>
            {filmsArray}
        </div>
    )
}


const Card = ({title, director, releaseDate, episode, image}) => {
    return (
        <div className="tc bg-light-grey br3 dib be3 pa3 ma2 grow bw2 ba bw1 b--gold shadow-5 b0-80" >
            <img className='br3 grow bw2 shadow-5' alt='' 
                src={require(`../../images/${image}`)} 
                style={{ maxWidth: '270px', maxHeight: '300px' }}    
            />
            <div>
                <dl className="silver lh-title pt3 ph1 mt0">
                    <dt className='f8 b'>{title}</dt>
                    <dt>episode: {episode}</dt>
                    <dt>director: {director}</dt>
                    <dt>release date: {releaseDate}</dt>
                </dl>
            </div>
        </div>
    )
}


export default FilmsCard;