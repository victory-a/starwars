import React, { Component } from 'react';
import FilmList from '../components/films/FilmList'
import PeopleList from '../components/people/PeopleList'
import PlanetList from '../components/planets/PlanetList'
import StarshipList from '../components/starships/StarshipList'

class App extends Component {
  constructor() {
    super()
    this.state = {
    } 
  }


  render() {

      return (
        <>
          {/* <h1>hello world</h1> */}
          <StarshipList />
        </>
      )
     
  }

}
export default App;
