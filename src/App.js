import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/vendor/flaticon.css';
import './css/vendor/fontawesome.min.css';
import './css/vendor/themify-icons.css';

import Home2 from './pages/Home2';
import Home3 from './pages/Home3';

import About_us from './pages/About_us';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Services_details from './pages/Services_details';
import Services_info from './pages/Services_info';
import Blog_classic from './pages/Blog_classic';
import Blog_grid from './pages/Blog_grid';
import Blog_details from './pages/Blog_details';
import Contact_01 from './pages/Contact_01';
import Contact_02 from './pages/Contact_02';
import Job_list from './pages/Job_list';
import Job_details from './pages/Job_details';
import Carrer_01 from './pages/Carrer_01';
import Error_404 from './pages/Error_404';
import Error_405 from './pages/Error_405';
import Employers_list from './pages/Employers_list';
import Employers_details from './pages/Employers_details';
import Candidate_list from './pages/Candidate_list';
import Candidate_details from './pages/Candidate_details';
import Login from './pages/Login';
import Register from './pages/Register';
import ScrollToTop from './components/layout/Gotop';

import Staff_Requisition from './pages/Staff_Requisition';
import CompanyCareer from "../src/components/layout/CompanyCareer"
// import * as express from "express";
// import express from 'express';
import axios from 'axios';
function App() {




  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "en",
  //       includedLanguages: "en,nl,pt,fr,de,es,uk",
  //       autoDisplay: false
  //     },
  //     "google_translate_element"
  //   );
  // };
  // useEffect(() => {
  //   var addScript = document.createElement("script");
  //   addScript.setAttribute(
  //     "src",
  //     "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //   );
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;

  // }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    async function contactLoad() {
      let url = `${process.env.REACT_APP_API_URI}/contactInfo`;
      const response = await axios.get(url);
      // if ((response.data).length > 0)
        setData(response?.data[0] ?? '');
    }
    contactLoad()

  }, []);



  return (
    <div>
      <div className="page" id='xxgoogle_translate_element'>
        <div className="sideIcon">

          <div className="sideIconWraper">

            <div className="sideIconBox">
              <a href="/career" className='tooltip-btn'  >
                <i className="fa fa-suitcase"></i>
                <span className="tooltip-text">Job Seeker</span>
              </a>
            </div>
            <div className="sideIconBox">
              <a href="/StaffRequisition" className='tooltip-btn' >
                <i className="fa fa-users"></i>
                <span className="tooltip-text">Staff Requisition</span>
              </a>
            </div>
            <div className="sideIconBox">
              <a href={"tel:"+data.phone} className='tooltip-btn' >
                <i style={{ 'transform': 'rotate(90deg)' }} className="fa fa-phone" aria-hidden="true"></i>

                <span className="tooltip-text">Phone</span>
              </a>
            </div>
            <div className="sideIconBox">
              <a href={"mailto:"+data.email} className='tooltip-btn' >
                <i className="fa fa-envelope"></i>
                <span className="tooltip-text">E-mail</span>
              </a>
            </div>

          </div>
        </div>
        <Router>

          <Route exact path={`${process.env.PUBLIC_URL + '/'}`} component={Home3} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Home2'}`} component={Home2} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Home3'}`} component={Home3} />
          <Route exact path={`${process.env.PUBLIC_URL + '/StaffRequisition'}`} component={Staff_Requisition} />
          <Route exact path={`${process.env.PUBLIC_URL + '/career'}`} component={CompanyCareer} />
          <Route exact path={`${process.env.PUBLIC_URL + '/About_us'}`} component={About_us} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Gallery'}`} component={Gallery} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Services'}`} component={Services} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Services/:id'}`} component={Services_info} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Services_details'}`} component={Services_details} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Blog_classic'}`} component={Blog_classic} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Blog_grid'}`} component={Blog_grid} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Blog_details'}`} component={Blog_details} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Contact_01'}`} component={Contact_01} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Contact_02'}`} component={Contact_02} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Job_list'}`} component={Job_list} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Job_details'}`} component={Job_details} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Carrer_01'}`} component={Carrer_01} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Error_404'}`} component={Error_404} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Error_405'}`} component={Error_405} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Employers_list'}`} component={Employers_list} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Employers_details'}`} component={Employers_details} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Candidate_list'}`} component={Candidate_list} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Candidate_details'}`} component={Candidate_details} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Login'}`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL + '/Register'}`} component={Register} />


          <ScrollToTop />
        </Router>
      </div>

    </div>
  );
}

export default App;


