import React, { Component } from 'react';
import Header from '../components/layout/Header2';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import ContactForm from './ContactForm';

export class Contact_01 extends Component {
           
   
    render() {

 
        return (
            <div className="site-main">
                <Header />

                {/* PageHeader */} 
                <PageHeader           
                    title="Contact us" 
                    breadcrumb="Contact 01" 
                />
                {/* PageHeader end */}


                {/* grid-section */} 
               
                {/* grid-section end */} 


                {/* map-section */} 
                <section className="ttm-row map-section bg-theme-GreyColor clearfix">
                    <div className="container">
                        {/* row */}
                        
                        <div className="row">
       
                        <div className="col-lg-12">
                            {/* section title */}
                            <div className="section-title title-style-center_text pb-15">
                                <div className="title-header">
                                    <h3>get in <span className="text-theme-SkinColor">touch</span></h3>
                                    <h2 className="title">Feel Free To Contact</h2>
                                </div>
                            </div>{/* section title end */} 
                        </div>
                        
                        <div className="col-lg-6">
                            <iframe height="530" width="100%"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.0511041377367!2d-9.139282924071846!3d38.716635671763115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933864fbefb29%3A0x9513490699f49b70!2sCentro%20Comercial%20Martim%20Moniz!5e0!3m2!1sen!2sbd!4v1729388157744!5m2!1sen!2sbd"
                            />
                        </div>

                        <ContactForm/>


                    </div>


                        {/* row end */}
                    </div>
                </section>
                {/* map-section end */} 

                {/* action-section */}
                {/* bg-theme-SkinColor  */}
                <section className="ttm-row action-section  bg-theme-DarkColor text-theme-WhiteColor clearfix">
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
                                    href={process.env.PUBLIC_URL + '/contact_01'}>Hiring Now!</a>
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


export default Contact_01;