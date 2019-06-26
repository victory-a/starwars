import React from 'react';

const StarshipsCard = ({starships}) => {
    const starshipsArray = starships.map((starship, i) => {
        return (
            <Card 
                key={starships[i]}
                name={starship.name}
                model={starship.model}
                manufacturer={starship.manufacturer}
                crew={starship.crew}
            />
        )
    })

    return (
        <div>
            {starshipsArray}
        </div>
    )

}

const Card = ({name, model, manufacturer, crew}) => {
    return (
        <div className="tc bg-light-green dib be3 pa3 ma2 grow bw2 shadow-5">
            <img alt='' src='#'/>
            <div>
                <h2>{name}</h2>
                <p>model: {model}</p>
                <p>crew number: {crew}</p>
                <p>manufacturer: {manufacturer}</p>
            </div>
        </div>
    )
}

export default StarshipsCard;
    
