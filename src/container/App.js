import React from 'react';
import FilmList from '../components/films/FilmList'
import PeopleList from '../components/people/PeopleList'
import PlanetList from '../components/planets/PlanetList'
import StarshipList from '../components/starships/StarshipList'
import { BrowserRouter as Router, Route } from 'react-router-dom';


const NestedRoute = ({component: Component, ...rest}) =>(
  <Route {...rest} render={(props) => (
      <Component {...props} />
  )} />
)

const App = () => {

  return (
        <>
          <Router>
            <Route exact path='/' component={FilmList} />
            <NestedRoute path='/people' component={PeopleList} />
            <NestedRoute path='/planets' component={PlanetList} />
            <NestedRoute path='/starships' component={StarshipList} />
          </Router>
        </>
      ) 
}
export default App;
