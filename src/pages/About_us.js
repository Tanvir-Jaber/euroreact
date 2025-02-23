import React, { Component } from 'react';
import Slider from 'react-slick';
import ProgressBar from 'react-animated-progress-bar';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CountUp from 'react-countup';
import Video from '../components/layout/Video';
import AboutTeam from './AboutTeam';


export class About_us extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
    render() {
    
        
        return (       
          <div className="site-main">

            <Header/>
            
            {/* PageHeader */} 
            <PageHeader
                title="about us"
                breadcrumb="about"
            />
            {/* PageHeader end */} 

            
            {/* about-section */}
            <section className="ttm-row about-section clearfix">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-6">
                            {/* section title */}
                            <div className="section-title">
                                <div className="title-header">
                                    <h3>Great <span className="text-theme-SkinColor">Search! </span></h3>
                                    <h2 className="title">Help Organizations To Match Talent to Opportunity</h2>
                                </div>
                                <div className="title-desc">
                                    <p>We give job searchers and IT experts the chance to track down ideal a profession that guarantees long term development and learning.</p>
                                </div>
                            </div>{/* section title end */}
                            <div className="ttm-tabs ttm-tab-style-01">
                                <Tabs>
                                    <TabList className="tabs">
                                        <Tab className="tab"><a className="tab-1" tabIndex="0">Our Mision</a></Tab>
                                        <Tab className="tab"><a className="tab-2" tabIndex="0">Our Vision</a></Tab>
                                        <Tab className="tab"><a className="tab-3" tabIndex="0">Core Values</a></Tab>
                                    </TabList> 
                                    <div className="content-tab">                                
                                        <TabPanel>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-3 col-sm-4">
                                                <img className="img-fluid alignleft" height="200" width="200" src="assets/images/blog/blog-6.png" alt="image" />
                                            </div>
                                            <div className="col-lg-8 col-md-9 col-sm-8">
                                                <div className="pt-15">
                                                    <p>We adapt to the our clients changing needs as well changes into the market to make sure growth of
                                                     the business, success and happiness</p>
                                                    <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                                        <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">An ability to attract and retain great talent</div></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        </TabPanel>
                                        <TabPanel>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-3 col-sm-4">
                                                <img className="img-fluid alignleft" height="200" width="200" src="assets/images/blog/blog-5.png" alt="image" />
                                            </div>
                                            <div className="col-lg-8 col-md-9 col-sm-8">
                                                <div className="pt-15">
                                                    <p>We adapt to the our clients changing needs as well changes into the market to make sure growth of
                                                     the business, success and happiness</p>
                                                    <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                                        <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">An ability to attract and retain great talent</div></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        </TabPanel>
                                        <TabPanel>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-3 col-sm-4">
                                                <img className="img-fluid alignleft" height="200" width="200" src="assets/images/blog/blog-4.png" alt="image" />
                                            </div>
                                            <div className="col-lg-8 col-md-9 col-sm-8">
                                                <div className="pt-15">
                                                    <p>We adapt to the our clients changing needs as well changes into the market to make sure growth of
                                                     the business, success and happiness</p>
                                                    <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                                        <li><i className="far fa-check-circle"></i><div className="ttm-list-li-content">An ability to attract and retain great talent</div></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        </TabPanel>
                                    </div>       
                                </Tabs>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mr-30 mt-30 mt-lg-60 mb-lg-30">
                                <div className="d-flex">
                                    <img src="assets/images/blog/blog-2.png" className="img-fluid" alt="single_05" />
                                    <div className="flex-basis-auto ml_180 mr_30 mt_30 z-index_1">
                                        <img src="images/dot-pattern.png" className="img-fluid" alt="dot-pattern" />
                                    </div>
                                    <div className="d-flex justify-content-end flex-column ml_180 mr_30 mb_35 z-index_1">
                                        <img src="images/dot-pattern.png" className="img-fluid" alt="dot-pattern" />
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>{/* row end */}
                </div>
            </section>
            {/* about-section end */}


            {/* team-section */}
            <AboutTeam/>
            {/* team-section end */}


            {/* action-section */}
            <section className="ttm-row action-section bg-theme-DarkColor text-theme-WhiteColor clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-md-flex align-items-center justify-content-between">
                                {/* featured-icon-box */}
                                <div className="featured-icon-box icon-align-before-content style2">
                                    <div className="featured-icon">
                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-white ttm-icon_element-size-xl">
                                            <i className="flaticon flaticon-recruitment-5"></i>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h3>Incredible Recruitment & Staffing Agency</h3>
                                        </div>
                                        <div className="featured-desc">
                                            <p>We have over 30 years experience oft Business porro qusquam dol ipsum quia dolor sit amet.</p>
                                        </div>
                                    </div>
                                </div>{/* featured-icon-box end */}
                                <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white" 
                                href={process.env.PUBLIC_URL + '/'}>Hiring Now!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* action-section end */}


            <Footer/>
                        
         </div>
       )
   }
}


export default About_us;