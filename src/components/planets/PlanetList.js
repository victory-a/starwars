import React, { Component } from 'react';
import { planets, apiCall } from '../../api/apiCall'
import NavBar from '../NavBar'; 
import PlanetsCard from './PlanetsCard';

class PlanetList extends Component {
    constructor() {
        super() 
        this.state = {
            searchParams : '',
            planets: []
        }    
    }

    onSearchChange = (event) => {
        this.setState({
            searchParams: event.target.value
        })
      }
    
    componentDidMount() {
        apiCall(planets).then(data=>this.setState({ planets: data}))
    }

    render() {
        const { planets, searchParams } = this.state;
        const filteredPlanets = planets.filter(planet => planet.name.toLowerCase().includes(searchParams.toLowerCase()))
 
        return ( !planets.length?
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
                    <PlanetsCard  planets={filteredPlanets} />
                </div>
            </>
        );
    }   
}




export default PlanetList;