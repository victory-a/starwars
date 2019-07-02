import React, { Component } from 'react';
import SearchBox from './SearchBox'
import logo from '../images/logo.png';
import './NavBar.css';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {
    constructor() {
        super() 
        this.state = {
            visible: false,
        }
    }

    togglevisible = () => {
        this.setState({
            visible:!this.state.visible
        })
    }

    render() {
              
        return (
            <>
                <nav className="menu">
                    <h1 style={{backgroundImage: `url(${logo})`}} className="menu__logo" >StarWars</h1>
                    <div className="menu__right">
                        <ul className="menu__list">
                            <li className='menu__list-item' ><NavLink exact to='/' className="menu__link" activeClassName='active'>films</NavLink></li>
                            <li className='menu__list-item' ><NavLink to='/people' className="menu__link" activeClassName='active'>people</NavLink></li>
                            <li className='menu__list-item' ><NavLink to='/planets'className="menu__link" activeClassName='active'>planets</NavLink></li>
                            <li className='menu__list-item' ><NavLink to='/starships' className="menu__link" activeClassName='active'>starships</NavLink></li>
                        </ul>
                        <button className="menu__search-button" onClick={this.togglevisible}></button>
                        <SearchBox visibility={this.state.visible} onSearchChange={this.props.onSearchChange}/>
                    </div>
                </nav> 
            </>
        )
    }
}

export default NavBar;


