import React, { Component } from 'react';

import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import ServiceSection from './ServiceSection';


export class Services extends Component {
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
                title="services"
                breadcrumb="services"
            />
            {/* PageHeader end */}  

            
            {/* services-section */}

            <ServiceSection/>
           
            {/* services-section end */}

                        
            {/* cta-section */}
            <section className="ttm-row cta-section bg-img7 bg-theme-DarkColor ttm-bg ttm-bgimage-yes text-theme-WhiteColor clearfix" style={{ backgroundImage: 'url("assets/images/banner/P/12.png")' }}>
                <div className="ttm-row-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor"></div>
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-8 m-auto row-title">
                            {/* section-title */}
                            <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    <h3><span className="text-theme-SkinColor">More than 50,000 happy client</span></h3>
                                    <h2 className="title">Get In Touch With Recruitment Staffing<span className="text-theme-SkinColor"> Agency!</span></h2>
                                </div>
                            </div>{/* section-title end */}
                            <div className="text-center pt-10">
                                <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white" 
                                href={process.env.PUBLIC_URL + '/contact_01'}>contact us</a>
                            </div>
                        </div>
                    </div>{/* row end */}
                </div>
            </section>
            {/* cta-section end */}

         
            {/* blog-section */}
            {/* <section className="ttm-row blog-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    <h3>Extend <span className="text-theme-SkinColor">Knowledge</span></h3>
                                    <h2 className="title">Latest News & Articles</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Slider className="row slick_slider mb_10" {...slick_slider} slidesToShow={3} arrows={false} autoplay={false}>
                        <div className="col-md-12">
                            <div className="featured-imagebox featured-imagebox-post style1">
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600x430?text=600x430+blog-01-600x430.jpg" alt="blog-image" />
                                    <div className="ttm-box-post-date">
                                        <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2021-03-18T04:16:25+00:00">18
                                            <span className="entry-month entry-year">Mar</span></time>
                                        </span>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="post-meta">
                                        <span className="ttm-meta-line byline">Admin</span>
                                        <span className="ttm-meta-line category-link">business</span>
                                    </div>
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/blog_details'}>Are  meetings falling to flat? Try these 10 tips</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Whatever you do in planning, facilitating. Goal should revolve support </p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/blog_details'}>read more!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="featured-imagebox featured-imagebox-post style1">
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600x430?text=600x430+blog-02-600x430.jpg" alt="blog-image" />
                                    <div className="ttm-box-post-date">
                                        <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2021-03-18T04:16:25+00:00">18
                                            <span className="entry-month entry-year">Mar</span></time>
                                        </span>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="post-meta">
                                        <span className="ttm-meta-line byline">Admin</span>
                                        <span className="ttm-meta-line category-link">business</span>
                                    </div>
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/blog_details'}>Are You Moving Businesses To Another State?</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>A business leader must consider issues beyond choosing a moving!</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/blog_details'}>read more!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="featured-imagebox featured-imagebox-post style1">
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600x430?text=600x430+blog-03-600x430.jpg" alt="blog-image" />
                                    <div className="ttm-box-post-date">
                                        <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2021-03-18T04:16:25+00:00">18
                                            <span className="entry-month entry-year">Mar</span></time>
                                        </span>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="post-meta">
                                        <span className="ttm-meta-line byline">Admin</span>
                                        <span className="ttm-meta-line category-link">business</span>
                                    </div>
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/blog_details'}>Shame: Does It Fine to Fit In The Workplace?</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>This can be innate or external and results can be surprising performance</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/blog_details'}>read more!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="featured-imagebox featured-imagebox-post style1">
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="https://via.placeholder.com/600x430?text=600x430+blog-04-600x430.jpg" alt="blog-image" />
                                    <div className="ttm-box-post-date">
                                        <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2021-03-18T04:16:25+00:00">18
                                            <span className="entry-month entry-year">Mar</span></time>
                                        </span>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="post-meta">
                                        <span className="ttm-meta-line byline">Admin</span>
                                        <span className="ttm-meta-line category-link">business</span>
                                    </div>
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/blog_details'}>How to Handle Negativity in Former People?</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Whatever you do in planning, facilitating. Goal should revolve support</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/blog_details'}>read more!</a>
                                </div>
                            </div>
                        </div>
                    </Slider>
                   
                </div>
            </section>
        */} 
            {/* blog-section end */}



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
                                <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white" href='/contact-us'>Hiring Now!</a>
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


export default Services;