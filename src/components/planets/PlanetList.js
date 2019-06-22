import React, { Component } from 'react';
import { urls, apiCall } from '.../apiCall'
import NavBar from '../components/NavBar.js'; 
import {onSearchChange} from '../../handlermethods'


class PlanetList extends Component {

    componentDidMount() {
        const [ planets ] = urls;
        apiCall(planets).then(data=>this.setState({ planets: data}))
    }

    render() {
        const [ planets ] = this.state;
        const filteredPlanets = planets.filter(planet => planet.title.toLowerCase().includes(searchParams));        
        return !filteredPlanets.length?
             (<h1>Loading, this will take a few seconds..</h1>):
        (
            <>
                <div className="container center">
                    <NavBar onSearchChange={onSearchChange} />
                </div>     
                <h1>planets</h1>
            </>
        )

    } 
}


export default PlanetList;