import React, { Component } from 'react';
import NavBar from '../components/NavBar.js'; 
import logo from '../images/logo.png';
import { urls, apiCall } from '../api/apiCall';
import CardList from '../components/CardList';


class App extends Component {
  constructor() {
    super()
    this.state = {
      searchParams: '',
      route: 'home'
    } 
  }

  componentDidMount() {
    const [ films, planets, starships, people ] = urls;
    if(!this.state.films) {
      apiCall(films).then(data=>this.setState({ films: data}))
      apiCall(planets).then(data=>this.setState({ planets: data}))
      apiCall(starships).then(data=>this.setState({ starships: data}))
      apiCall(people).then(data=>this.setState({ people: data}))
    }
  }
  componentDidUpdate(prevProp, prevState) {
    if(this.state.films !== prevState.films) {
      console.log(this.state.films[3].title)
    }
  }

  onSearchChange = (event) => {
    this.setState({
        searchParams: event.target.value
    })
  }

  onRouteChange = (event) => {
    this.setState({
      route: event.target.route
    })
  }

  render() {
    // const [ films, planets, starships, people ] = this.state;
    // const filteredFilms = this.state.films.filter(film => {
    //   return film.title
    // })
    // console.log(this.state.films.title)
    return (
      <>
        <div className="container center">
          <NavBar logo={logo}  onSearchChange={this.onSearchChange} routeChange={this.onRouteChange}/>
        </div>
        {/* <CardList filmsProp= {this.state.films} /> */}
      </>
        
    ); 
  }
}

export default App;
