import React from 'react';

const PlanetsCard =({planets}) => {
    const planetsArray = planets.map((planet, i) => {

        return (
            <Card 
                key={planets[i]}
                name={planet.name}
                diameter={planet.diameter}
                population={planet.population}
                climate={planet.climate}
            />
        )
    })

    return (
        <div>
            {planetsArray}
        </div>
    )
}

const Card = ({name, diameter, population, climate}) => {
    return (
        <div className="tc bg-light-green dib be3 pa3 ma2 grow bw2 shadow-5">
            <img alt='' src='#' />
            <div>
                <h2>{name}</h2>
                <p>diameter: {diameter}</p>
                <p>climate: {climate}</p>
                <p>population: {population}</p>
            </div>
        </div>
    )
}


export default PlanetsCard;