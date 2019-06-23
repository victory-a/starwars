import React, { Component } from 'react';
import { people, apiCall } from '../../api/apiCall'
import NavBar from '../NavBar'; 


class PeopleList extends Component {
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
        apiCall(people).then(data=>this.setState({ people: data}))
    } 

    render() {
         
        return(
            <>
                <div className="container center">
                    <NavBar onSearchChange={this.onSearchChange} />
                </div>           
                <h1>people</h1>
            </>
        )
    } 
}


export default PeopleList;