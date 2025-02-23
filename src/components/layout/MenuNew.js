import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import DynamicMenu from './DynamicMenu';

export class MenuNew extends Component {
    state = {
            show: false,
    }
    render() {
        return (
            <Router>
                <nav className="main-menu">         
                    <ul className="menu">



                        <li className="mega-menu-item">
                        <a href={process.env.PUBLIC_URL + '/'} className="mega-menu-link">HOME</a>
                        </li>

                        <li className="mega-menu-item">
                            <a href={process.env.PUBLIC_URL + '/Services'} className="mega-menu-link">FIND A TALENT</a>
                            <ul className="mega-submenu">
                                <DynamicMenu/>
                            </ul>
                            
                            
                        </li>

                        <li className="mega-menu-item">
                            <a href={process.env.PUBLIC_URL + '/About_us'} className="mega-menu-link">ABOUT US</a>
                        </li>


                        <li className="mega-menu-item">
                            <a  href={process.env.PUBLIC_URL + '/'} className="mega-menu-link">OUR THINKING</a>
                            <ul className="mega-submenu">
                                <li><a href={process.env.PUBLIC_URL + '/Error_405'}>BLOG</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/staffRequisition'}>Staff Requisition</a></li>
                            </ul>
                        </li>

                        <li className="mega-menu-item">
                            <a href={process.env.PUBLIC_URL + '/Error_405'} className="mega-menu-link">FIND A JOB</a>
                            <ul className="mega-submenu">
                                <li><a href={process.env.PUBLIC_URL + '/Error_405'}>Job List</a></li>
                            </ul>
                        </li>

                        <li className="mega-menu-item">
                            <a href={process.env.PUBLIC_URL + '/contact_01'} className="mega-menu-link">CONTACT</a>
                           
                        </li>
       
                    </ul>
                </nav>
            </Router>
        )
        
    }
}

export default MenuNew;