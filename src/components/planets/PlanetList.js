import React, { Component } from 'react';
import { urls, apiCall } from '../../api/apiCall'
import NavBar from '../NavBar'; 


class PlanetList extends Component {
    constructor() {
        super() 
        this.state = {
            searchParams : ''
        }    
    }

    onSearchChange = (event) => {
        this.setState({
            searchParams: event.target.value
        })
      }
    
    componentDidMount() {
        const [ planets ] = urls;
        apiCall(planets).then(data=>this.setState({ planets: data}))
    } 

    render() {        

        return(
            <>
                <div className="container center">
                    <NavBar onSearchChange={this.onSearchChange} />
                </div>
                <h1>planets</h1>
            </>
        )
    }   
}


export default PlanetList;