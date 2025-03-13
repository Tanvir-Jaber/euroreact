import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import stye from '../../assets/css/custom.css'
import { useLocation } from "react-router-dom";
import GoogleTranslateWidget from './GoogleTranslateWidget1';

const Menu = () => {
    const location = useLocation();
    const [path, setPath] = useState(location.pathname);
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
        // console.log(path);
        
        fetchData()
    }, []);

    return (
        <Router>
            <nav className="main-menu">
                <ul className="menu">
                    <li className="mega-menu-item">
                        <a href={process.env.PUBLIC_URL + '/'} className={`mega-menu-link2 ${path == '/'?'active':''}`}>Home</a>
                    </li>
                    <li className="mega-menu-item">
                        <a href="Javascript:void(0)" className="mega-menu-link">Services</a>
                        <ul className="mega-submenu">
                            {data.map((v) => {
                                return (<li key={v.id}><a href={process.env.PUBLIC_URL + '/services/' + v.id}>{v.title}</a></li>)
                            })
                            }

                        </ul>
                    </li>
                    <li className="mega-menu-item">
                        <a href={process.env.PUBLIC_URL + '/gallery'} className={`mega-menu-link2 ${path == '/gallery'?'active':''}`}>Gallery</a>
                    </li>
                    <li className="mega-menu-item">
                        <a href={process.env.PUBLIC_URL + '/about_us'} className={`mega-menu-link2 ${path == '/about_us'?'active':''}`}>About Us</a>
                    </li>
                    <li className="mega-menu-item">
                        <a href={process.env.PUBLIC_URL + '/contact_01'} className={`mega-menu-link2 ${path == '/contact_01'?'active':''}`}>Contact us</a>
                    </li>
                </ul>
            </nav>
            {/* <GoogleTranslateWidget /> */}
        </Router>
    )

};


export default Menu;