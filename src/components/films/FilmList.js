import React, { Component } from 'react';
import { films, apiCall } from '../../api/apiCall'
import NavBar from '../NavBar'; 


class FilmList extends Component {
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
        apiCall(films).then(data=>this.setState({ films: data}))
    }

    render() {        

        return(
            <>
                <div className="container center">
                    <NavBar onSearchChange={this.onSearchChange} />
                </div>
                <h1>films</h1>
            </>
        )
    }   
}


export default FilmList;


