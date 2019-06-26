import React, { Component } from 'react';
import { films, apiCall } from '../../api/apiCall'
import NavBar from '../NavBar';
import FilmsCard from './FilmsCard';


class FilmList extends Component {
    constructor() {
        super() 
        this.state = {
            searchParams : '',
            films: []
        }    
    }

    onSearchChange = (event) => {
        this.setState({
            searchParams: event.target.value
        })
      }
    
    componentDidMount() {
        apiCall(films).then(data=>this.setState({ films: data}))
    }

    render() {        
        const { films, searchParams } = this.state;
        const filteredFilms = films.filter(film => film.title.toLowerCase().includes(searchParams.toLowerCase()))
 
        return (!films.length?
            <>
                <div className="container center">
                    <NavBar onSearchChange={this.onSearchChange} />
                </div>
                <h1 className='tc'>Loading</h1>
            </> :
            <>
                <div className="container center">
                    <NavBar onSearchChange={this.onSearchChange} />
                </div>
                <div className='tc'>
                    <FilmsCard  films={filteredFilms} />
                </div>
            </>
        );        
    }   
}


export default FilmList;


