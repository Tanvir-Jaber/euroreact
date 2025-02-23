import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import stye from '../../assets/css/custom.css'
const Menu = () => {
    const [data, setData] = useState([]);
    var services = [];
    useEffect(() => {
        const fetchData = async () => {
            let url = `${process.env.REACT_APP_API_URI}/serviceSection`;
            try {
                const response = await axios.get(url);
                setData(response.data)
            } catch (error) {
                console.log(error)
            }
        };
        fetchData()
    }, []);

    return (
        <Router>
            <nav className="main-menu">
                <ul className="menu">
                    <li className="mega-menu-item">
                        <a href={process.env.PUBLIC_URL + '/'} className="mega-menu-link2">Home</a>
                    </li>
                    <li className="mega-menu-item">
                        <a href="Javascript:void(0)" className="mega-menu-link">Services</a>
                        <ul className="mega-submenu">
                            {data.map((v) => {
                                return (<li><a href={process.env.PUBLIC_URL + '/services/' + v.id}>{v.title}</a></li>)
                            })
                            }

                        </ul>
                    </li>
                    <li className="mega-menu-item">
                        <a href={process.env.PUBLIC_URL + '/gallery'} className="mega-menu-link2">Gallery</a>
                    </li>
                    <li className="mega-menu-item">
                        <a href={process.env.PUBLIC_URL + '/about_us'} className='mega-menu-link2'>About Us</a>
                    </li>
                    <li className="mega-menu-item">
                        <a href={process.env.PUBLIC_URL + '/contact_01'} className='mega-menu-link2'>Contact us</a>
                    </li>
                </ul>
            </nav>
        </Router>
    )

};


export default Menu;