import React, { Component } from 'react';
import { starships, apiCall } from '../../api/apiCall'
import NavBar from '../NavBar';
import StarshipsCard from './StarshipsCard'; 


class StarshipList extends Component {
    constructor() {
        super() 
        this.state = {
            searchParams : '',
            starships: []
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
        const { starships, searchParams } = this.state;
        const filteredstarships = starships.filter(srarship => srarship.name.toLowerCase().includes(searchParams.toLowerCase()))
 
        return ( !starships.length?
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
                    <StarshipsCard starships={filteredstarships}/>
                </div>
            </>
        );
    }   
}


export default StarshipList;