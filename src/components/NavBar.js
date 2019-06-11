import React, { Component, Fragment } from 'react';
import SearchBox from './SearchBox'
import './NavBar.css'


class NavBar extends Component {
    constructor() {
        super() 
        this.state = {
            visible:false
        }

    }

    togglevisible = () => {
        this.setState({
            visible:!this.state.visible
        })
    }

    // onClick = e => {
    //     const { target: { value, name}, } = e;    
    //     this.setState({ [name] : value })
    // }

    render() {
        const { logo } = this.props;
               
        return (
            <Fragment>
                <nav className="menu">
                    <h1 style={{backgroundImage: 'url('+ logo +')'}}
                    className="menu__logo" >StarWars</h1>
                    <div className="menu__right">
                    <ul className="menu__list">
                        <li className='menu__list-item'><a className="menu__link active" href='#home'>Home</a></li>
                        <li className='menu__list-item'><a className="menu__link " href='#planers'>Planets</a></li>
                        <li className='menu__list-item'><a className="menu__link" href='#Starships'>Starships</a></li>
                        <li className='menu__list-item'><a className="menu__link" href='#People'>People</a></li>
                    </ul>
                    <button className="menu__search-button" onClick={this.togglevisible}></button>
                    <SearchBox visibility={this.state.visible} />
                    </div>
                </nav>
            </Fragment>
 
        )
    }
}

export default NavBar;


