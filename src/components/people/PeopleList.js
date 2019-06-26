import React, { Component } from 'react';
import { people, apiCall } from '../../api/apiCall'
import NavBar from '../NavBar'; 
import PeopleCard from './PeopleCard';

class PeopleList extends Component {
    constructor() {
        super() 
        this.state = {
            searchParams : '',
            people: []
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
        const { people, searchParams } = this.state;
        const filteredpeople = people.filter(person => person.name.toLowerCase().includes(searchParams.toLowerCase()))
 
        return ( !people.length?
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
                    <PeopleCard people={filteredpeople} />
                </div>
            </>
        );
    } 
}


export default PeopleList;