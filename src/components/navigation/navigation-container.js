import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



export default class NavigationComponent extends Component{
    constructor(){
        super();
    }


    
    render(){
        return(
            <div className ="nav-wrapper">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/info">
                            Info
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/about" >
                            About
                        </NavLink>
                    </div>
                
            </div>
        )
    }
}        