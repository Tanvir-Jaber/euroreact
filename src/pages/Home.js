import React, { Component } from "react";
import Slider from "react-slick";
import Header from "../components/layout/Header";
import { Banner } from "../components/banner/Home1_banner";
import { Footer } from "../components/layout/Footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CountUp from "react-countup";
import ProgressBar from "react-animated-progress-bar";
import CategorySection from "./CategorySection";
import BannerNew from "../components/banner/BannerNew";
import ServiceSection from "./ServiceSection";

export class Home extends Component {

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

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="site-main">
        <Header />

        {/* Banner */}
        <BannerNew/>
        {/* <Banner /> */}
        {/* Banner end */}

        {/* features-section */}
        <CategorySection/>
        {/* features-section end */}

        {/* services-section */}
        <ServiceSection/>
        {/* services-section end */}

        {/* about-section */}
        <section className="ttm-row about-section bg-layer-equal-height clearfix">
          <div className="container">
            {/* row */}

            <div className="row g-0">
              <div className="col-md-6">
                <div className="pb-70 pb-md-50 pr-60 pr-md-0">
                  {/* section title */}
                  <div className="section-title">
                    <div className="title-header">
                      <h3>
                        Need a <span className="text-theme-SkinColor">Job</span>
                        , Having a{" "}
                        <span className="text-theme-SkinColor">Dream</span> to
                        Settle up{" "}
                      </h3>
                      <h2 className="title">Career Consultation</h2>
                    </div>
                    <div className="title-desc">
                      <p>
                        If you aspire to pursue a career abroad, Grow Strive is
                        the ideal choice for you to pursue career opportunities
                        with us, as we possess a substantial number of openings
                        in diverse fields. We hire manpower for Hotels,
                        Manufacturing, Construction, Cleaning, Electricians,
                        Plumbers, Gardeners, House keepers etc. So, Grow Strive
                        can Help you to get settled at your dreamland.
                      </p>
                    </div>
                  </div>
                  {/* section title end */}
                  <div className="mb-md-40 mb-30">
                    <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-DarkColor">
                      <li>
                        <i className="far fa-check-circle"></i>
                        <div className="ttm-list-li-content">
                          You can track the status of your applications in the
                          candidate portal.
                        </div>
                      </li>
                      <li>
                        <i className="far fa-check-circle"></i>
                        <div className="ttm-list-li-content">
                          We automatically complete profile with your
                          professional experience
                        </div>
                      </li>
                      <li>
                        <i className="far fa-check-circle"></i>
                        <div className="ttm-list-li-content">
                          Other questions & have already applied through the
                          {process.env.REACT_APP_NAME} platform
                        </div>
                      </li>
                    </ul>
                  </div>
                  <h6 className="py-2">
                    Click <span className="text-theme-SkinColor">apply</span>{" "}
                    and <span className="text-theme-SkinColor">upload</span> the
                    important information.{" "}
                  </h6>

                  <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-dark"
                    href={process.env.PUBLIC_URL + "/staffRequisition"} >
                    Apply To Get Here
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                {/* col-img-img-one */}
                <div className="col-bg-img-one ttm-col-bgimage-yes ttm-bg">
                  <div
                    className="ttm-col-wrapper-bg-layer ttm-bg-layer"
                    style={{
                      backgroundImage: "url('assets/images/banner/abcd.png')",
                    }}
                  ></div>
                  <div className="layer-content"></div>
                  <img
                    src="assets/images/blog/blog-1.png"
                    className="img-fluid col-bg-img-res"
                    alt="bgimage"
                  />
                </div>
                {/* col-img-bg-img-one end */}
              </div>
            </div>
            <div className="row g-0">
              <div className="col-md-6">
                {/* col-img-img-two */}
                <div className="col-bg-img-two ttm-col-bgimage-yes ttm-bg mt-md-50">
                  <div
                    className="ttm-col-wrapper-bg-layer ttm-bg-layer"
                    style={{
                      backgroundImage: "url('assets/images/blog/blog-1.png')",
                    }}
                  ></div>
                  <div className="layer-content"></div>
                  <img
                    src="https://via.placeholder.com/570x520?text=570x520+col-bgimage-2.jpg"
                    className="img-fluid col-bg-img-res"
                    alt="bgimage"
                  />
                </div>
                {/* col-img-bg-img-two end */}
              </div>
              <div className="col-md-6">
                <div className="pt-70 pt-md-50 pl-70 pl-md-0">
                  {/* section title */}
                  <div className="section-title">
                    <div className="title-header">
                      <h3>
                        Choose <span className="text-theme-SkinColor">any</span>
                      </h3>
                      <h2 className="title">Business!</h2>
                    </div>
                    <div className="title-desc">
                      <p>
                      {process.env.REACT_APP_NAME} has over 30 years experience of Financial,
                        Marketing and Business Solutions expertise. Helps
                        businesses improve their processes, products, services.
                        Serve as the intermediary between businesses.
                      </p>
                    </div>
                  </div>
                  {/* section title end */}
                  {/* ttm-progress-bar */}
                  <div className="ttm-progress-bar clearfix">
                    <h3 className="progressbar-title">
                      Recruitment Outsourcing
                    </h3>
                    <ProgressBar rect percentage="90" />
                  </div>
                  {/* ttm-progress-bar end */}
                  {/* ttm-progress-bar */}
                  <div className="ttm-progress-bar clearfix">
                    <h3 className="progressbar-title">
                      Contingency Recruitment
                    </h3>
                    <ProgressBar rect percentage="70" />
                  </div>
                  {/* ttm-progress-bar end */}
                  {/* ttm-progress-bar */}
                  <div className="ttm-progress-bar clearfix">
                    <h3 className="progressbar-title">On-demand Recruitment</h3>
                    <ProgressBar rect percentage="80" />
                  </div>
                  {/* ttm-progress-bar end */}
                </div>
              </div>
            </div>

            {/* row end */}
          </div>
        </section>
        {/* about-section */}

        {/* padding_zero-section */}
        <section className="ttm-row padding_zero-section bg-layer bg-layer-equal-height mb-70 mb-md-0 clearfix">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-7 col-md-12">
                {/* col-img-img-three */}
                <div className="col-bg-img-three ttm-bg ttm-col-bgimage-yes ttm-left-span z-index-2">
                  <div
                    className="ttm-col-wrapper-bg-layer ttm-bg-layer"
                    style={{
                      backgroundImage: "url('assets/images/blog/blog-2.png')",
                    }}
                  ></div>
                  <div className="layer-content"></div>
                  <img
                    className="img-fluid col-bg-img-res"
                    src="assets/images/blog/blog-2.png"
                    alt="bgimage"
                  />
                </div>
                {/* col-img-bg-img-one end */}
              </div>
              <div className="col-lg-5">
                <div className="ttm-bg ttm-col-bgcolor-yes bg-theme-DarkColor ttm-bg ttm-right-span spacing-1 z-index-1">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor">
                    <div className="ttm-col-wrapper-bg-layer-inner"></div>
                  </div>
                  <div className="layer-content text-theme-WhiteColor">
                    {/* section title */}
                    <div className="section-title">
                      <div className="title-header">
                        <h3>
                          How{" "}
                          <span className="text-theme-SkinColor">we are! </span>
                        </h3>
                        <h2 className="title">
                          Reliable & Cost Efficient Recruitment Agency
                        </h2>
                      </div>
                    </div>
                    {/* section title end */}
                    <div className="ttm-tabs ttm-tab-style-01">
                      <Tabs>
                        <TabList className="tabs">
                          <Tab className="tab">
                            <a className="tab-1" tabIndex="0">
                              Our Mision
                            </a>
                          </Tab>
                          <Tab className="tab">
                            <a className="tab-2" tabIndex="0">
                              Our Vision
                            </a>
                          </Tab>
                          <Tab className="tab">
                            <a className="tab-3" tabIndex="0">
                              Core Values
                            </a>
                          </Tab>
                        </TabList>
                        <div className="content-tab mb_15">
                          <TabPanel>
                            <div className="row">
                              <div className="col-lg-4 col-md-3 col-sm-4">
                                <img
                                  className="img-fluid alignleft"
                                  height="200"
                                  width="200"
                                  src="assets/images/blog/blog-2.png"
                                  alt="image"
                                />
                              </div>
                              <div className="col-lg-8 col-md-9 col-sm-8">
                                <div className="pt-15">
                                  <p>
                                    Let's enable the discovery of opportunities
                                    by providing consistently superior
                                    solutions. To add value & respect
                                    individuality and diversity while growing...
                                  </p>
                                  <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-WhiteColor">
                                    <li>
                                      <i className="far fa-check-circle"></i>
                                      <div className="ttm-list-li-content">
                                        To add value for our clients &
                                        candidates
                                      </div>
                                    </li>
                                    <li>
                                      <i className="far fa-check-circle"></i>
                                      <div className="ttm-list-li-content">
                                        Agency manages the end-to-end process
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                          <TabPanel>
                            <div className="row">
                              <div className="col-lg-4 col-md-3 col-sm-4">
                                <img
                                  className="img-fluid alignleft"
                                  height="200"
                                  width="200"
                                  src="assets/images/blog/blog-10.png"
                                  alt="image"
                                />
                              </div>
                              <div className="col-lg-8 col-md-9 col-sm-8">
                                <div className="pt-15">
                                  <p>
                                    Let's enable the discovery of opportunities
                                    by providing consistently superior
                                    solutions. To add value & respect
                                    individuality and diversity while growing...
                                  </p>
                                  <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-WhiteColor">
                                    <li>
                                      <i className="far fa-check-circle"></i>
                                      <div className="ttm-list-li-content">
                                        To add value for our clients &
                                        candidates
                                      </div>
                                    </li>
                                    <li>
                                      <i className="far fa-check-circle"></i>
                                      <div className="ttm-list-li-content">
                                        Agency manages the end-to-end process
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                          <TabPanel>
                            <div className="row">
                              <div className="col-lg-4 col-md-3 col-sm-4">
                                <img
                                  className="img-fluid alignleft"
                                  height="200"
                                  width="200"
                                  src="assets/images/blog/Image-1.png"
                                  alt="image"
                                />
                              </div>
                              <div className="col-lg-8 col-md-9 col-sm-8">
                                <div className="pt-15">
                                  <p>
                                    Let's enable the discovery of opportunities
                                    by providing consistently superior
                                    solutions. To add value & respect
                                    individuality and diversity while growing...
                                  </p>
                                  <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor text-theme-WhiteColor">
                                    <li>
                                      <i className="far fa-check-circle"></i>
                                      <div className="ttm-list-li-content">
                                        To add value for our clients &
                                        candidates
                                      </div>
                                    </li>
                                    <li>
                                      <i className="far fa-check-circle"></i>
                                      <div className="ttm-list-li-content">
                                        Agency manages the end-to-end process
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                        </div>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* row end */}
          </div>
        </section>
        {/* padding_zero-section end */}

        {/* testimonial-section */}
        <section className="ttm-row testimonial-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h3>
                      Our <span className="text-theme-SkinColor">Clients!</span>
                    </h3>
                    <h2 className="title">What Our Client Says!</h2>
                  </div>
                </div>
              </div>
            </div>
            <Slider
              className="row slick_slider slick-arrows-style1"
              {...slick_slider}
              slidesToShow={3}
              arrows={true}
            >
              <div className="col-lg-12">
                {/* testimonials */}
                <div className="testimonials ttm-testimonial-box-view-style1">
                  <div className="testimonial-content">
                    <blockquote className="testimonial-text">
                      It has always been so easy to do work with team member at
                      {process.env.REACT_APP_NAME}. It's an much effortless partnership.
                    </blockquote>
                    <div className="star-ratings">
                      <ul className="rating">
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="testimonial-bottom">
                    <div className="testimonial-avatar">
                      <div className="testimonial-img">
                        <img
                          className="img-fluid"
                          src="https://via.placeholder.com/150x150?text=150x150+01.jpg"
                          alt="testimonial-img"
                        />
                      </div>
                    </div>
                    <div className="testimonial-caption">
                      <label>Manager</label>
                      <h3>Alex Jhon Martin</h3>
                    </div>
                  </div>
                </div>{" "}
                {/* testimonials end */}
              </div>
              <div className="col-lg-12">
                {/* testimonials */}
                <div className="testimonials ttm-testimonial-box-view-style1">
                  <div className="testimonial-content">
                    <blockquote className="testimonial-text">
                      The national award-winning staffing agency that was built
                      with our trademarked tagline, Expect More, We Do.
                    </blockquote>
                    <div className="star-ratings">
                      <ul className="rating">
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="testimonial-bottom">
                    <div className="testimonial-avatar">
                      <div className="testimonial-img">
                        <img
                          className="img-fluid"
                          src="https://via.placeholder.com/150x150?text=150x150+02.jpg"
                          alt="testimonial-img"
                        />
                      </div>
                    </div>
                    <div className="testimonial-caption">
                      <label>Manager</label>
                      <h3>Michal Wincent</h3>
                    </div>
                  </div>
                </div>{" "}
                {/* testimonials end */}
              </div>
              <div className="col-lg-12">
                {/* testimonials */}
                <div className="testimonials ttm-testimonial-box-view-style1">
                  <div className="testimonial-content">
                    <blockquote className="testimonial-text">
                      This was my first experience working with a recruiter and
                      it has been amazing. I couldn’t have asked for more
                    </blockquote>
                    <div className="star-ratings">
                      <ul className="rating">
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="testimonial-bottom">
                    <div className="testimonial-avatar">
                      <div className="testimonial-img">
                        <img
                          className="img-fluid"
                          src="https://via.placeholder.com/150x150?text=150x150+03.jpg"
                          alt="testimonial-img"
                        />
                      </div>
                    </div>
                    <div className="testimonial-caption">
                      <label>Manager</label>
                      <h3>Rayan Methew</h3>
                    </div>
                  </div>
                </div>{" "}
                {/* testimonials end */}
              </div>
              <div className="col-lg-12">
                {/* testimonials */}
                <div className="testimonials ttm-testimonial-box-view-style1">
                  <div className="testimonial-content">
                    <blockquote className="testimonial-text">
                      The national award-winning staffing agency that was built
                      with our trademarked tagline, Expect More, We Do.
                    </blockquote>
                    <div className="star-ratings">
                      <ul className="rating">
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="active">
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="testimonial-bottom">
                    <div className="testimonial-avatar">
                      <div className="testimonial-img">
                        <img
                          className="img-fluid"
                          src="https://via.placeholder.com/150x150?text=150x150+02.jpg"
                          alt="testimonial-img"
                        />
                      </div>
                    </div>
                    <div className="testimonial-caption">
                      <label>Manager</label>
                      <h3>Michal Wincent</h3>
                    </div>
                  </div>
                </div>{" "}
                {/* testimonials end */}
              </div>
            </Slider>
          </div>
        </section>
        {/* testimonial-section end */}

        {/* aboutus-section */}
        <section
          className="ttm-row about-section bg-img2 bg-theme-DarkColor ttm-bg ttm-bgimage-yes text-theme-WhiteColor clearfix"
          style={{ backgroundImage: 'url("assets/images/banner/P/17.png")' }}
        >
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor"></div>
          <div className="container">
            {/* row */}
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-4 col-md-12">
                {/* section title */}
                <div className="section-title">
                  <div className="title-header">
                    <h3>
                      More than 50,000{" "}
                      <span className="text-theme-SkinColor">happy client</span>
                    </h3>
                    <h2 className="title">
                      The Most Trusted and Professional Recruitment{" "}
                      <span className="text-theme-SkinColor"> Agency</span>
                    </h2>
                  </div>
                </div>
                {/* section title end */}
                <a
                  className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white mt-15"
                  href={process.env.PUBLIC_URL + "/"}
                >
                  Hiring Now!
                </a>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-5">
                <div className="pt-lg-30">
                  {/* fid */}
                  <div className="ttm-fid inside ttm-fid-view-topicon style1">
                    <div className="ttm-fid-icon-wrapper">
                      <i className="flaticon flaticon-recruiting"></i>
                    </div>
                    <div className="ttm-fid-contents">
                      <h4>
                        <CountUp start={0} end={2887} duration={20} delay={2} />
                      </h4>
                      <h3 className="ttm-fid-title">Happy Clients</h3>
                    </div>
                  </div>
                  {/* fid end */}
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-8 col-sm-7">
                <div className="pt-lg-20 pb-30">
                  <p className="text-theme-WhiteColor">
                    We have over 30 years experience of Financial, Musiness
                    Solutions expertise, our goal imize your.
                  </p>
                </div>
                {/* ttm-progress-bar */}
                <div className="ttm-progress-bar style2 clearfix">
                  <h3 className="progressbar-title">Consulting Experience</h3>
                  <ProgressBar rect percentage="90" />
                </div>
                {/* ttm-progress-bar end */}
                {/* ttm-progress-bar */}
                <div className="ttm-progress-bar style2 clearfix">
                  <h3 className="progressbar-title">Investment Plan</h3>
                  <ProgressBar rect percentage="85" />
                </div>
                {/* ttm-progress-bar end */}
              </div>
              <div className="col-lg-12">
                <div className="pt-100 pt-md-0"></div>
              </div>
            </div>
          </div>
        </section>
        {/* aboutus-section end */}

        {/* padding_zero-section */}
        <section className="ttm-row padding_zero-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="pt-5 bg-theme-SkinColor mt_100 mt-md-60"></div>
                <div className="bg-theme-WhiteColor box-shadow pt-md-40 pb-md-30">
                  <div className="row g-0 ttm-vertical_sep">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      {/* fid */}
                      <div className="ttm-fid inside ttm-fid-view-topicon style2">
                        <div className="ttm-fid-icon-wrapper">
                          <i className="flaticon flaticon-headhunting"></i>
                        </div>
                        <div className="ttm-fid-contents">
                          <h4>
                            <CountUp
                              start={0}
                              end={8705}
                              duration={20}
                              delay={2}
                            />
                          </h4>
                          <h3 className="ttm-fid-title">
                            Welath Of Experiance
                          </h3>
                        </div>
                      </div>
                      {/* fid end */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      {/* fid */}
                      <div className="ttm-fid inside ttm-fid-view-topicon style2">
                        <div className="ttm-fid-icon-wrapper">
                          <i className="flaticon flaticon-technical-support"></i>
                        </div>
                        <div className="ttm-fid-contents">
                          <h4>
                            <CountUp
                              start={0}
                              end={480}
                              duration={20}
                              delay={2}
                            />
                          </h4>
                          <h3 className="ttm-fid-title">
                            Professional Recruiters
                          </h3>
                        </div>
                      </div>
                      {/* fid end */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      {/* fid */}
                      <div className="ttm-fid inside ttm-fid-view-topicon style2">
                        <div className="ttm-fid-icon-wrapper">
                          <i className="flaticon flaticon-recruitment-4"></i>
                        </div>
                        <div className="ttm-fid-contents">
                          <h4>
                            <CountUp
                              start={0}
                              end={6260}
                              duration={20}
                              delay={2}
                            />
                          </h4>
                          <h3 className="ttm-fid-title">
                            No. of Candidates Hired
                          </h3>
                        </div>
                      </div>
                      {/* fid end */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      {/* fid */}
                      <div className="ttm-fid inside ttm-fid-view-topicon style2">
                        <div className="ttm-fid-icon-wrapper">
                          <i className="flaticon flaticon-recruitment-3"></i>
                        </div>
                        <div className="ttm-fid-contents">
                          <h4>
                            <CountUp
                              start={0}
                              end={9774}
                              duration={20}
                              delay={2}
                            />
                          </h4>
                          <h3 className="ttm-fid-title">Larger Community</h3>
                        </div>
                      </div>
                      {/* fid end */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* padding_zero-section end */}

        {/* action-section */}
        <section className="ttm-row action-section bg-theme-DarkColor  text-theme-WhiteColor clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-md-flex align-items-center justify-content-between">
                  {/* featured-icon-box */}
                  <div className="featured-icon-box icon-align-before-content style2">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-white ttm-icon_element-size-xl">
                        <i className="flaticon flaticon-recruitment"></i>
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3>Incredible Recruitment & Staffing Agency</h3>
                      </div>
                      <div className="featured-desc">
                        <p>
                          We have over 30 years experience oft Business porro
                          qusquam dol ipsum quia dolor sit amet.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* featured-icon-box end */}
                  <a
                    className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white"
                    href={process.env.PUBLIC_URL + "/contact_01"}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* action-section end */}

        <Footer />
      </div>
    );
  }
}

export default Home;
