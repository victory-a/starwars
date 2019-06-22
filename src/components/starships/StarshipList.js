import React, { Component } from 'react';
import { urls, apiCall } from '.../apiCall'
import NavBar from '../components/NavBar.js'; 
import {onSearchChange} from '../../handlermethods'


class StarshipList extends Component {

    componentDidMount() {
        const [ starships ] = urls;
        apiCall(starships).then(data=>this.setState({ starships: data}))
    }

    render() {
        const [ starships ] = this.state;
        const filteredStarshps = starships.filter(starship => starship.title.toLowerCase().includes(searchParams));
        return !filteredStarshps.length?
             (<h1>Loading, this will take a few seconds..</h1>):
        (
            <>
                <div className="container center">
                    <NavBar onSearchChange={onSearchChange}/>
                </div>     
                <h1>starships</h1>
            </>
        )

    } 
}


export default StarshipList;