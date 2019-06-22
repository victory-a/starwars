import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchParams: '',
      route: 'home'
    } 
  }

  // componentDidUpdate(prevProp, prevState) {
  //   const { films, planets, starshps, people, searchParams } = this.state;
  //   if(films !==  prevState.films) {
  //     const filteredFilms = films.filter(film => film.title.toLowerCase().includes(searchParams));
  //     this.setState({filteredFilms: filteredFilms})
  //   }
    // if(people !==  prevState.people) {
    //   
    //   this.setState({filteredPeople: filteredPeople})
    //   }
  // }



  render() {

      return (
        <>
          <h1>hello world</h1>
        </>
          
      )
     
  }

}
export default App;
