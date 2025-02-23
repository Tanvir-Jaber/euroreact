import React, { Component } from 'react';
import Slider from 'react-slick';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';


export class Job_details extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
          photoIndex: 0,
          isOpen: false,
        };
    }
    render() {
        var slick_slider = {
            dots: false,
            arrow: false,
            autoplay: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            rows: 1,

            responsive: [{
        
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        };

        return (

            <div className="site-main">
                <Header/>
            
                {/* PageHeader */} 
                <PageHeader
                    title="job details"
                    breadcrumb="job"
                />
                {/* PageHeader end */}


                <div className="ttm-row sidebar job-sidebar clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
                                <div className="job_list-widget">
                                    <aside className="widget job-widget">
                                        <h3 className="widget-title"><i className="ti ti-files"></i>Job Informations</h3>
                                        <ul>
                                            <li className="d-flex"><b className="mr-5">Job Type:</b>Part Time</li>
                                            <li className="d-flex"><b className="mr-5">Location:</b>California</li>
                                            <li className="d-flex"><b className="mr-5">Offered Salary:</b>$22k - $34k</li>
                                            <li className="d-flex"><b className="mr-5">Posted:</b>1 Week Ago</li>
                                            <li className="d-flex"><b className="mr-5">Experience:</b>3 Years</li>
                                            <li className="d-flex"><b className="mr-5">Industry:</b>Design</li>
                                            <li className="d-flex"><b className="mr-5">Qualification:</b>Associate Degree</li>
                                            <li className="d-flex"><b className="mr-5">position:</b>2</li>
                                        </ul>
                                    </aside>
                                    <aside className="widget form-widget">
                                        <h3 className="widget-title"><i className="ti ti-email"></i>Send Us Message</h3>
                                        <form className="wrap-form">
                                            <label>
                                                <input name="name" type="text" placeholder="Your Name" required="required" />
                                            </label>
                                            <label>
                                                <input name="email" type="text" placeholder="Your Email" required="required" />
                                            </label>
                                            <label>
                                                <textarea name="message" rows="3" placeholder="Message" required="required"></textarea>
                                            </label>
                                            <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100" type="submit">send a message!</button>
                                        </form>
                                    </aside>
                                    <aside className="widget location-widget p-0">
                                        <iframe width="100%" height="350" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26361414.263400003!2d-113.75849480805297!3d36.24080384347216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1578680778274!5m2!1sen!2sin">
                                        </iframe>
                                        <div className="p-20">
                                            <div>
                                                <span className="text-theme-SkinColor">
                                                    <i className="fa fa-map-marker-alt mr-10"></i></span>24 Fifth st, Los Angeles, USA
                                            </div>
                                            <div>
                                                <a href="mailto:info@example.com"><i className="fa fa-envelope mr-10"></i>info@example.com</a>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                            <div className="col-lg-8 content-area">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor m-0">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/210x204?text=210x204+job-01.png" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Vacancy For the Charted Account</a></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published 2Days Ago.</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>California</span>
                                                        <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="green">full time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="overview-box">
                                            <div className="title">
                                                <h5>Job Description :</h5>
                                            </div>
                                            <div className="desc">
                                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                     labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra 
                                                     maecenas accumsan lacus vel facilisis. ”</p>
                                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                     labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra 
                                                     maecenas accumsan lacus vel facilisis. ”</p>
                                            </div>
                                        </div>
                                        <div className="overview-box">
                                            <div className="title">
                                                <h5>Required Knowledge, Skills, and Abilities :</h5>
                                            </div>
                                            <div className="desc">
                                                <ul className="ttm-list ttm-list-style-icon ttm-textcolor-darkgrey">
                                                    <li>
                                                        <i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">You have at least 3 years’ experience working as a Product Designer.</div>
                                                    </li>
                                                    <li><i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">You have experience using Sketch and InVision or Framer X</div>
                                                    </li>
                                                    <li><i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">You are familiar using Jira and Confluence in your workflow</div>
                                                    </li>
                                                    <li><i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">You have some previous experience working in an agile environment </div>
                                                    </li>
                                                    <li><i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">You are familiar using Jira and Confluence in your workflow</div>
                                                    </li>
                                                    <li>
                                                        <i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">You have at least 3 years’ experience working as a Product Designer.</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="overview-box">
                                            <div className="title">
                                                <h5>Skills Required</h5>
                                            </div>
                                            <div className="desc">
                                                <ul className="ttm-list ttm-list-style-icon ttm-textcolor-darkgrey">
                                                    <li>
                                                        <i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">HTML, CSS & Scss</div>
                                                    </li>
                                                    <li><i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">Javascript</div>
                                                    </li>
                                                    <li><i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">PHP</div>
                                                    </li>
                                                    <li><i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">Photoshop</div>
                                                    </li>
                                                    <li><i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">Illustrator</div>
                                                    </li>
                                                    <li>
                                                        <i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">Wordpress & elementor</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="overview-box mb-60">
                                            <div className="title">
                                                <div className="d-sm-flex justify-content-between mb_10">
                                                    <h5 className="mb-10">Share Job :</h5>
                                                    <div className="social-icons circle mb-10">
                                                        <ul className="list-inline">
                                                            <li><a href="#facebook" rel="noopener" aria-label="facebook"><i className="ti ti-facebook"></i></a></li>
                                                            <li><a href="#twitter" rel="noopener" aria-label="twitter"><i className="ti ti-twitter-alt"></i></a></li>
                                                            <li><a href="#instagram" rel="noopener" aria-label="instagram"><i className="ti ti-instagram"></i></a></li>
                                                            <li><a href="#pinterest" rel="noopener" aria-label="pinterest"><i className="ti ti-pinterest"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h5>Related Jobs :</h5>
                                    </div>
                                </div>
                                <Slider className="row slick_slider slick-arrows-style2 mb_15" {...slick_slider} vertical={true} slidesToShow={1} rows={2} arrows={true}>
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/210x204?text=210x204+job-06.png" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Vacancy For the Human Resource</a></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published 2Days Ago.</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>California</span>
                                                        <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="blue">part time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/210x204?text=210x204+job-02.png" />
                                                <div className="required-tag">Urgent</div>
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Vacancy For the Business Analyst</a></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published 2Days Ago.</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>California</span>
                                                        <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="danger-color">part time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/210x204?text=210x204+job-03.png" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><a href={process.env.PUBLIC_URL + '/Job_details'}><a href={process.env.PUBLIC_URL + '/Job_details'}>Opening For Social Media Manager</a></a></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published 2Days Ago.</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>California</span>
                                                        <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="deep-orange">full time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                            <div className="featured-thumbnail">
                                                <img src="https://via.placeholder.com/210x204?text=210x204+job-04.png" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><a href={process.env.PUBLIC_URL + '/Job_details'}><a href={process.env.PUBLIC_URL + '/Job_details'}>Opening For The Content Creator</a></a> </h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published 2Days Ago.</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>California</span>
                                                        <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="green">full time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                </Slider>{/* row end */}
                            </div>
                        </div>{/* row end */}
                    </div>
                </div>


                {/* action-section */}
                <section className="ttm-row action-section bg-theme-SkinColor text-theme-WhiteColor clearfix">
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

export default Job_details;