import React, { Component } from 'react';
import { urls, apiCall } from '../../api/apiCall'
import NavBar from '../components/NavBar.js'; 
import {onSearchChange} from '../../handlermethods'


class FilmList extends Component {

    componentDidMount() {
        const [ films ] = urls;
        apiCall(films).then(data=>this.setState({ films: data}))
    }

    render() {
        const [ films, searchParams ] = this.state;
        const filteredFilms = films.filter(film => film.title.toLowerCase().includes(searchParams));
        return !filteredFilms.length?
             (<h1>Loading, this will take a few seconds..</h1>):
        (
            <>
          <div className="container center">
            <NavBar onSearchChange={onSearchChange} />
          </div>
                <h1>films</h1>
            </>
        )

    } 
}


export default FilmList;