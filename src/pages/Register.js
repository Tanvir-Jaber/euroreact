import React, { Component } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export class Register extends Component {

    
    render() {
        return (

            <div className="site-main">
                <Header/>
            
                {/* PageHeader */} 
                <PageHeader
                    title="register"
                    breadcrumb="register"
                />
                {/* PageHeader end */}


                {/* register */}
                <div className="ttm-row register-section clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-50 p-lg-20">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                    <div className="layer-content">
                                        <div className="text-center mb-20">
                                            <h3>Create An Account</h3>
                                        </div>
                                        <div className="ttm-tabs ttm-tab-style-02">
                                            <Tabs>
                                                <TabList className="tabs">
                                                    <Tab className="tab">
                                                        <a>
                                                        <i className="flaticon flaticon-research"></i>
                                                            <span>Candidate</span><h5>Login as a Candidate</h5>
                                                        </a>
                                                    </Tab>
                                                    <Tab className="tab">
                                                        <a>
                                                        <i className="flaticon flaticon-job-search"></i>
                                                            <span>Employer</span><h5>Login as a Employer</h5>
                                                        </a>
                                                    </Tab>
                                                </TabList> 
                                                <div className="content-tab">                                
                                                    <TabPanel>
                                                        <form id="login_form" className="login_form wrap-form">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <label>
                                                                        <i className="ti ti-user"></i>
                                                                        <input type="text" id="txtname" placeholder="Username" />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label>
                                                                        <i className="ti ti-email"></i>
                                                                        <input type="email" id="txtemail" placeholder="Email Address" />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label>
                                                                        <i className="ti ti-lock"></i>
                                                                        <input type="password" id="password" placeholder="Password"/>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label>
                                                                        <i className="ti ti-lock"></i>
                                                                        <input type="password" id="cpassword" placeholder="Confirm Password *"/>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label>
                                                                        <i className="ti ti-mobile"></i>
                                                                        <input type="tel" id="txtphone" placeholder="Phone Number"/>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label className="mt-0">
                                                                        <div className="d-md-flex align-items-center justify-content-between">
                                                                            <div className="cookies-checkbox mt-15">
                                                                                <div className="d-flex flex-row justify-content-start">
                                                                                    <input className="w-auto mr-10 mt-5" id="cookies-consent" name="cookies-consent" type="checkbox" value="yes" />
                                                                                    <span>you accept our Terms and Conditions and Privacy Policy</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="mt-15">
                                                                                <p>Already registered?<a href={process.env.PUBLIC_URL + '/login'} className="text-theme-SkinColor"> Sign in here</a></p>
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label className="mb-0">
                                                                        <button className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" 
                                                                        type="submit">Sign up</button>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </TabPanel>
                                                    <TabPanel>
                                                        <form id="login_form" className="login_form wrap-form">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <label>
                                                                        <i className="ti ti-user"></i>
                                                                        <input type="text" id="txtname" placeholder="Username" />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label>
                                                                        <i className="ti ti-email"></i>
                                                                        <input type="email" id="txtemail" placeholder="Email Address" />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label>
                                                                        <i className="ti ti-lock"></i>
                                                                        <input type="password" id="password" placeholder="Password"/>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label>
                                                                        <i className="ti ti-lock"></i>
                                                                        <input type="password" id="cpassword" placeholder="Confirm Password *"/>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label>
                                                                        <i className="ti ti-mobile"></i>
                                                                        <input type="tel" id="txtphone" placeholder="Phone Number"/>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label className="mt-0">
                                                                        <div className="d-md-flex align-items-center justify-content-between">
                                                                            <div className="cookies-checkbox mt-15">
                                                                                <div className="d-flex flex-row justify-content-start">
                                                                                    <input className="w-auto mr-10 mt-5" id="cookies-consent" name="cookies-consent" type="checkbox" value="yes" />
                                                                                    <span>you accept our Terms and Conditions and Privacy Policy</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="mt-15">
                                                                                <p>Already have an account?</p>
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label className="mb-0">
                                                                        <button className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" 
                                                                        type="submit">Sign up</button>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </TabPanel>
                                                </div>       
                                            </Tabs>
                                        </div>
                                        <div className="login-social-buttons">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <button id="login-with-facebook" className="social-account-button w-100 facebook-button">
                                                        <i className="ti ti-facebook"></i><span>Login With facebook</span>
                                                    </button>
                                                </div>
                                                <div className="col-md-6">
                                                    <button id="login-with-google" className="social-account-button w-100 google-button">
                                                        <i className="ti ti-google"></i><span>Login With Google</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* login end */}

                
            <Footer/>
                        
            </div>
          )
      }
   }

export default Register;