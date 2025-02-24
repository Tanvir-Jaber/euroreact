import React, { Component } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import axios from 'axios';
import ServiceNewStaff from "./ServiceNewStaff";
import CompanyJobSeeker from '../components/layout/CompanyJobSeeker';
import CompanyCareerConsultation from '../components/layout/CompanyCareerConsultation';
export class About_us extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            data: [],
            service: []
        };
    }
    async serviceLoad() {
        let url = `${process.env.REACT_APP_API_URI}/serviceSection`;
        const response = await axios.get(url);
        this.setState({ service: response?.data ?? [] });
    }
    async aboutUsLoad() {
        let url = `${process.env.REACT_APP_API_URI}/about_us/1`;
        const response = await axios.get(url);
        this.setState({ data: response?.data?.data ?? [] });
    }

    componentDidMount() {
        this.aboutUsLoad();
        this.serviceLoad();
    }
    render() {
        const { data, service } = this.state
        return (
            <div className="site-main">

                <Header />

                {/* PageHeader */}
                <PageHeader
                    title="about us"
                    breadcrumb="about"
                />
                {/* PageHeader end */}


                {/* about-section */}
                {
                    data.map((item) => {
                        return (
                            <div className="site-main">
                                {/* about-section */}
                                <section className="ttm-row about-section clearfix">
                                    <div className="container">
                                        {/* row */}
                                        <div className="row">

                                            <div className="col-lg-3">
                                                <div className="mr-30 mt-30 mt-lg-60 mb-lg-30">
                                                    <div className="section-title">
                                                        <div className="title-header">
                                                            <h2><span className="text-theme-SkinColor title">Let's Grow
                                                                With Us</span></h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-9 m-auto">
                                                {/* section title */}
                                                <div className="section-title">

                                                    <div className="title-desc">
                                                        <p style={{ textAlign: "justify" }}>{item.description}</p>
                                                    </div>

                                                </div>{/* section title end */}

                                            </div>
                                        </div>{/* row end */}
                                    </div>
                                </section>
                                {/* about-section end */}

                            </div>
                        )
                    })
                }

                {/* about-section end */}

                <section className='container'>
                    <div className='row'>
                        {
                            service.map((item) => {
                                return (

                                    <div className='col-md-2 text-center'>
                                        <div style={{ border: "1px solid", padding: "25px", borderRadius: "5px", height: "20vh" }} >
                                            <span><i className={`${item.icon}`} aria-hidden="true"></i></span>
                                            <h6 className='text-center'>{item.title}</h6>
                                            <a className='text-theme-SkinColor' href={"services/" + item.id}>Read more</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>

                <ServiceNewStaff />
                <CompanyCareerConsultation />
                <CompanyJobSeeker />


                <Footer />

            </div>
        )
    }
}


export default About_us;