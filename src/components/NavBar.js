import React, { Component } from 'react';
import SearchBox from './SearchBox'
// import logo from '../images/logo.png';
import logo from '../images/logo.png';
import './NavBar.css'


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
                <nav className="menu">
                    <h1 style={{backgroundImage: 'url('+ logo +')'}}
                    className="menu__logo" >StarWars</h1>
                    <div className="menu__right">
                    <ul className="menu__list">
                        <li className='menu__list-item' ><button className="menu__link">films</button></li>
                        <li className='menu__list-item' ><button className="menu__link">planets</button></li>
                        <li className='menu__list-item' ><button className="menu__link">starships</button></li>
                        <li className='menu__list-item' ><button className="menu__link">people</button></li>
                    </ul>
                    <button className="menu__search-button" onClick={this.togglevisible}></button>
                    <SearchBox visibility={this.state.visible} onSearchChange={this.props.onSearchChange}/>
                    </div>
                </nav>
 
        )
    }
}

export default NavBar;


