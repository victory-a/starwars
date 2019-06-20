import React, { Component } from 'react';
import NavBar from '../components/NavBar.js'; 
import logo from '../images/logo.png';
import { urls, apiCall } from '../api/apiCall';
import FilmList from '../components/FilmList';


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

  // componentDidUpdate(prevProp, prevState) {
  //   const {films, planets, starshps, people, searchParams} = this.state;
  //   if(films !== prevState.films) {
  //       const filteredFilms = films.filter(film => {
  //         film.title.toLowerCase().includes(searchParams.toLowerCase());
  //         this.setState({filtered: filteredFilms})
  //       })
  //   }
  // }

  onSearchChange = (event) => {
    this.setState({
        searchParams: event.target.value
    })
  }

  onRouteChange = (event) => {
    const textContent = event.target.textContent;
    this.setState({
      route: textContent
    })
  }

  render() {
    const { films, planets, starshps, people, searchParams } = this.state;
    const filteredFilms = films.filter(film => {
              film.title.toLowerCase().includes(searchParams.toLowerCase());
              this.setState({filtered: filteredFilms})
            })

    return (
      <>
        <div className="container center">
          <NavBar logo={logo}  onSearchChange={this.onSearchChange} routeChange={this.onRouteChange}/>
        </div>
        <FilmList films= {this.state.filtered} />
      </>
        
    ); 
  }
}

export default App;
