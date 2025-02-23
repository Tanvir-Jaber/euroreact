import React, { Component } from "react";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
  MDBHamburgerToggler } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


class Mobile_menu_new extends Component {
  state = {
    collapse1: false,
    collapseID: ''
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
  

  render() {

    return (

      <Router>

        <MDBNavbar>
          <MDBHamburgerToggler id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
            <MDBCollapse isOpen={this.state.collapse1} navbar>
              <MDBNavbarNav left>
           
                <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>HOME</MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href={process.env.PUBLIC_URL + '/'}>Front Page</MDBDropdownItem>
                       </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem> 

                <MDBNavItem>
                  <MDBDropdown>
                      <MDBDropdownToggle nav caret>FIND A TALENT</MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href={process.env.PUBLIC_URL + '/Services'}>Services</MDBDropdownItem>
                        <MDBDropdownItem href={process.env.PUBLIC_URL + '/Error_405'}>Employers List</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>

                <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>FIND A JOB </MDBDropdownToggle>
                      <MDBDropdownMenu>
                          <MDBDropdownItem href={process.env.PUBLIC_URL + '/Error_405'}>Job List</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>

                <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>About</MDBDropdownToggle>
                      <MDBDropdownMenu>
                          <MDBDropdownItem href={process.env.PUBLIC_URL + '/About_us'}>About Us</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>

                <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>OUR THINKING</MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href={process.env.PUBLIC_URL + '/Error_405'}>Blog</MDBDropdownItem>
                        <MDBDropdownItem href={process.env.PUBLIC_URL + '/staffRequisition'}>Staff Requisition</MDBDropdownItem>
                    </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>

                <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>Contact</MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href={process.env.PUBLIC_URL + '/contact_01'}>Contact Us</MDBDropdownItem>
                    </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
               
              </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Mobile_menu_new;