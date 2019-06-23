import React, { Component } from 'react';
import { starships, apiCall } from '../../api/apiCall'
import NavBar from '../NavBar'; 


class StarshipList extends Component {
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
        apiCall(starships).then(data=>this.setState({ starships: data}))
    } 

    render() {        

        return(
            <>
                <div className="container center">
                    <NavBar onSearchChange={this.onSearchChange} />
                </div>
                <h1>starships</h1>
            </>
        )
    }   
}


export default StarshipList;