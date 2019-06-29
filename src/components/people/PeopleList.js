import React, { Component } from 'react';
import { people, apiCall } from '../../helperFunctions/apiCall'
import NavBar from '../NavBar'; 
import PeopleCard from './PeopleCard';
import Scroll from '../Scroll';


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
                <h1 className='tc yellow'>Loading</h1>
            </> :
            <>
                <div className="container center">
                    <NavBar onSearchChange={this.onSearchChange} />
                </div>
                <Scroll>
                    <div className='tc'>
                        <PeopleCard people={filteredpeople} />
                    </div>
                </Scroll>
            </>
        );
    } 
}


export default PeopleList;