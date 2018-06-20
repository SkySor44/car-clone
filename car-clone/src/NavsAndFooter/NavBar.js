import React, { Component } from 'react';
import './NavBar.css';
import logo from '../assets/porsche_logo.74060e83.jpg'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div className = "navbar-contain">
                <div className = "nav-section-edge left">
                    <div className = "flex-column burger-contain">
                        <div className = "topBurger burger"></div>
                        <div className = "middleBurger burger"></div>
                        <div className = "bottomBurger burger"></div>
                    </div>
                    <div className = "flex-row">
                        <h2 className = "red-text" weight = "bold">Time to</h2>
                        <h2>get in.</h2>
                    </div>
                </div>
                <div>
                    <img src = {logo} alt = "logo" className = "logo"/>
                </div>
                <div className = "nav-section-edge right">
                    Area 3
                </div>
            </div>
         )
    }
}
 
export default NavBar;