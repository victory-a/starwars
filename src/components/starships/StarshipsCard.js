import React from 'react';
import imageMapper from '../../helperFunctions/imageMapper';

const StarshipsCard = ({starships}) => {
    const starshipsArray = starships.map((starship, i) => {
        const image = imageMapper(starship.name);

        return (
            <Card 
                key={i}
                name={starship.name}
                model={starship.model}
                consumables={starship.consumables}
                crew={starship.crew}
                image={image}
            />
        )
    })

    return (
        <div>
            {starshipsArray}
        </div>
    )

}

const Card = ({name, model, consumables, crew, image}) => {
    return (
        <div className="tc bg-light-grey br3 dib be3 pa3 ma2 grow bw2 ba bw1 b--gold shadow-5 b0-80">
            <img className='br3 grow bw2 shadow-5' alt='' 
                src={require(`../../images/${image}`)} 
                style={{ maxWidth: '270px', maxHeight: '300px' }}    
            />
            <div>
                <dl className="silver lh-title pt3 ph1 mt0">
                    <dt className='f8 b'>{name}</dt>
                    <dt>model: {model}</dt>
                    <dt>crew number: {crew}</dt>
                    <dt>consumables: {consumables}</dt>
                </dl>
            </div>
        </div>
    )
}


export default StarshipsCard;
    
