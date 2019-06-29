import React from 'react';
import imageMapper from '../../helperFunctions/imageMapper';


const PlanetsCard =({planets}) => {
    const planetsArray = planets.map((planet, i) => {
        const image = imageMapper(planet.name)
        return (
            <Card 
                key={i}
                name={planet.name}
                diameter={planet.diameter}
                population={planet.population}
                climate={planet.climate}
                image = {image}
            />
        )
    })

    return (
        <div>
            {planetsArray}
        </div>
    )
}

const Card = ({name, diameter, population, climate, image}) => {
    return (
        <div className="tc bg-light-grey br3 dib be3 pa3 ma2 grow bw2 ba bw1 b--gold shadow-5 b0-80">
            <img className='br3 grow bw2 shadow-5' alt='' 
                src={require(`../../images/${image}`)} 
                style={{ maxWidth: '270px', maxHeight: '300px' }}    
            />
            <div>
                <dl className="silver lh-title pt3 ph1 mt0">
                    <dt className='f8 b'>{name}</dt>
                    <dt>diameter: {diameter}</dt>
                    <dt>climate: {climate}</dt>
                    <dt>population: {population}</dt>
                </dl>
            </div>
        </div>
    )
}


export default PlanetsCard;