import React from 'react';


const PeopleCard = ({people}) => {
    const peopleArray = people.map((person, i) => {
        return (
            <Card 
                key={people[i]}
                name={person.name}
                gender={person.gender}
                birthYear={person.birth_year}
                height={person.height}
            />
        );
    })

    return (
        <div>
            {peopleArray}
        </div>
    )
}


const Card = ({name, gender, birthYear, height}) => {
    return (
        <div className="tc bg-light-green dib be3 pa3 ma2 grow bw2 shadow-5">
            <img alt='' src='#' />
            <div>
                <h2>{name}</h2>
                <p>gender: {gender}</p>
                <p>birth year: {birthYear}</p>
                <p>height: {height}</p>
            </div>
        </div>
    )
}


export default PeopleCard;


