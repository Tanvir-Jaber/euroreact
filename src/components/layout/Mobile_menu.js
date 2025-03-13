import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
  MDBHamburgerToggler
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";
import GoogleTranslateWidget from './GoogleTranslateWidget1';

class Mobile_menu extends Component {
  state = {
    collapse1: false,
    collapseID: '',
    service:[]
  }
  async serviceLoad() {
    let url = `${process.env.REACT_APP_API_URI}/serviceSection`;
    axios.get(url)
      .then(response => {
        this.setState({service:response.data}); // Set data from API response
      })
      .catch(err => {
        console.log(err)
      });
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  }

  componentDidMount(){
    this.serviceLoad()
  }

  render() {
    var {service} = this.state
    return (

      <Router>

        <MDBNavbar>
          <MDBHamburgerToggler id="hamburger1" onClick={() => this.toggleSingleCollapse('collapse1')} />
          <MDBCollapse isOpen={this.state.collapse1} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav onClick={() => window.location.href = '/'}>Home</MDBDropdownToggle>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>Services</MDBDropdownToggle>
                  <MDBDropdownMenu>
                    {
                      service.map((item) => {
                        return(
                          <MDBDropdownItem key={item.id} href={process.env.PUBLIC_URL + '/services/'+item.id}>{item.title}</MDBDropdownItem>
                        )
                      })
                    }
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav onClick={() => window.location.href = '/gallery'}>Gallery</MDBDropdownToggle>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                <MDBDropdownToggle nav onClick={()=> window.location.href='/about_us'}>About Us</MDBDropdownToggle>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                <MDBDropdownToggle nav onClick={()=> window.location.href='/contact_01'}>Contact Us</MDBDropdownToggle>
                </MDBDropdown>
              </MDBNavItem>
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        {/* <GoogleTranslateWidget /> */}
      </Router>
    );
  }
}

export default Mobile_menu;