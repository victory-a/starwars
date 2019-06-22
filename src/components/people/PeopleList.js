import React, { Component } from 'react';
import { urls, apiCall } from '.../apiCall'
import NavBar from '../components/NavBar.js'; 
import {onSearchChange} from '../../handlermethods'


class PeopleList extends Component {

    componentDidMount() {
        const [ people ] = urls;
        apiCall(people).then(data=>this.setState({ people: data}))
    }

    render() {
        const [ people, searchParams ] = this.state;
        const filteredPeople = people.filter(people => people.title.toLowerCase().includes(searchParams));
        return !filteredPeople.length?
             (<h1>Loading, this will take a few seconds..</h1>):
        (
            <>
                <div className="container center">
                    <NavBar onSearchChange={onSearchChange} />
                </div>           
                <h1>people</h1>
            </>
        )

    } 
}


export default PeopleList;