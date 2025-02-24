import React, { Component } from 'react';
import Slider from 'react-slick';
import ProgressBar from 'react-animated-progress-bar';
import Header from '../components/layout/Header2';
import { Banner } from '../components/banner/Home3_banner';
import { Footer } from '../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CountUp from 'react-countup';
import CategorySection from "./CategorySection";
import ServiceSection from "./ServiceSection";
import ServiceNewStaff from "./ServiceNewStaff";
import axios from "axios";
import { Accordion } from 'react-bootstrap-accordion'
import style from "../../src/assets/css/custom.css"
import CompanyAboutUs from '../components/layout/CompanyAboutUs';
import CompanyWhatWeDo from '../components/layout/CompanyWhatWeDo';
import CompanyCareerConsultation from '../components/layout/CompanyCareerConsultation';
import CompanyUserFeedback from '../components/layout/CompanyUserFeedback';
import CompanyLatestNews from '../components/layout/CompanyLatestNews';
import CompanyJobSeeker from '../components/layout/CompanyJobSeeker';
import BannerBottomSlider from '../components/BannerBottomSlider';

export class Home3 extends Component {
    state = {
        faq: [],
    }
    async faqLoad() {
        let url = `${process.env.REACT_APP_API_URI}/job/faq`;
        const response = await axios.get(url);
        this.setState({ faq: response?.data?.data ?? [] });
    }

    componentDidMount() {

        this.faqLoad();
    }
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            faq: []
        };
    }
    render() {
        const { faq } = this.state;
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

                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {

                breakpoint: 991,
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
                <Header />
                <Banner />
                <BannerBottomSlider/>
                <CompanyAboutUs />
                {/* <CompanyAboutUs /> */}
                <ServiceSection />
                <CompanyWhatWeDo />
                <ServiceNewStaff />
                <CompanyCareerConsultation />

               

                {/* FAQ */}
                <section className="ttm-row about-section bg-layer-equal-height clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row g-0">
                            <div className="col-md-6">
                                {/* col-img-img-two */}
                                <div>All your questions answered!</div>
                                <h3>Having Queries, Please Ask Us</h3>
                                <div className="col-bg-img-two ttm-col-bgimage-yes ttm-bg mt-md-50">
                                    <div
                                        className="ttm-col-wrapper-bg-layer ttm-bg-layer"
                                        style={{
                                            backgroundImage: `url(${process.env.PUBLIC_URL}/images/Group-11.jpg)`,backgroundSize:"contain"
                                        }}
                                    ></div>
                                    <div className="layer-content"></div>

                                </div>
                                {/* col-img-bg-img-two end */}
                            </div>
                            <div className="col-md-6">
                                <div className="pt-70 pt-md-50 pl-70 pl-md-0">
                                    <div>
                                        {
                                            faq.map((v, i) => {
                                                let regex = /(<([^>]+)>)/gi;
                                                let result = (v.answer).replace(regex, "");
                                                return (
                                                    <>

                                                        <Accordion title={v.question}>
                                                            {result}
                                                        </Accordion>
                                                    </>

                                                )
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* row end */}
                    </div>
                </section>
                {/* FAQ */}

                <CompanyUserFeedback />
                <CompanyLatestNews />
                <CompanyJobSeeker />
                <Footer />

            </div>
        )
    }
}


export default Home3;