import React from 'react';
import imageMapper from '../../helperFunctions/imageMapper';

const PeopleCard = ({people}) => {
    const peopleArray = people.map((person, i) => {
        const image = imageMapper(person.name)

        return (
            <Card 
                key={i}
                name={person.name}
                gender={person.gender}
                birthYear={person.birth_year}
                height={person.height}
                image = {image}
            />
        );
    })

    return (
        <div>
            {peopleArray}
        </div>
    )
}


const Card = ({name, gender, birthYear, height, image}) => {
    return (
        <div className="tc bg-light-grey br3 dib be3 pa3 ma2 grow bw2 ba bw1 b--gold shadow-5 b0-80">
            <img className='br3 grow bw2 shadow-5' alt='' 
                src={require(`../../images/${image}`)} 
                style={{ maxWidth: '270px', maxHeight: '300px' }}    
            />
            <div>
                <dl className="silver lh-title pt3 ph1 mt0">
                    <dt className='f8 b'>{name}</dt>
                    <dt>gender: {gender}</dt>
                    <dt>birth year: {birthYear}</dt>
                    <dt>height: {height}</dt>
                </dl>
            </div>
        </div>
    )
}


export default PeopleCard;


