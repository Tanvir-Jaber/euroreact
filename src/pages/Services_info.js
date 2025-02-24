import React, { Component, dangerouslySetInnerHTML } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import axios from "axios";
import CompanyJobSeeker from '../components/layout/CompanyJobSeeker';
import CompanyWhatWeOffer from '../components/layout/CompanyWhatWeOffer';
import CompanyUserFeedback from '../components/layout/CompanyUserFeedback';
import CompanyHavingDoubt from '../components/layout/CompanyHavingDoubt';
import CompanyQueryOrIssue from '../components/layout/CompanyQueryOrIssue';
export class Services_details extends Component {
    state = {
        data: '',
        sub: [],
        service_id: 0
    }

    async serviceLoadByID(id) {
        let url = `${process.env.REACT_APP_API_URI}/services/${id}`;
        const response = await axios.get(url);
        this.setState({ data: response?.data.data ?? '' });
    }
    async subServiceLoadByID(id) {
        let url = `${process.env.REACT_APP_API_URI}/sub/services/${id}`;
        const response = await axios.get(url);
        this.setState({ sub: response?.data.data ?? '' });
    }
    componentDidMount() {
        const id = this.props.match.params.id ?? 0;
        this.serviceLoadByID(id)
        this.subServiceLoadByID(id)
        this.setState({ service_id: id })
    }
    render() {
        const { data, sub, service_id } = this.state;
        return (

            <div className="site-main">
                <Header />

                {/* PageHeader */}
                <PageHeader
                    title="services details"
                    breadcrumb={data.title}
                />
                {/* PageHeader end */}


                <div className="ttm-row sidebar ttm-sidebar clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row">

                            <div className="col-lg-6">
                                <img className="img-fluid" src={process.env.REACT_APP_ASSET_URL + "/" + data.image} alt="services-img" />
                            </div>
                            <div className="col-lg-6">
                                {/* ttm-service-single-content-area */}
                                <h3 className="mb-20">{data.title}</h3>
                                <p>{data.description}</p>
                                {/* ttm-service-single-content-are end */}
                            </div>
                        </div>{/* row end */}
                    </div>
                </div>

                {
                    sub.map((item, i) => {
                        if (i % 2 == 0) {
                            return (
                                <div className="ttm-row sidebar ttm-sidebar clearfix">
                                    <div className="container">
                                        {/* row */}
                                        <div className="row">
                                            <div className="col-lg-6">
                                                {/* ttm-service-single-content-area */}
                                                <h3 className="mb-20">{item.title}</h3>
                                                {<div dangerouslySetInnerHTML={{ __html: item.description }} />}
                                                {/* ttm-service-single-content-are end */}
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="sidebar-right">
                                                    <div className="ttm_single_image-wrapper">
                                                        <img className="img-fluid" src={process.env.REACT_APP_ASSET_URL + "/" + item.image} alt="services-img" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>{/* row end */}
                                    </div>
                                </div>

                            )
                        }
                        else {
                            return (
                                <div className="ttm-row sidebar ttm-sidebar clearfix">
                                    <div className="container">
                                        {/* row */}
                                        <div className="row">

                                            <div className="col-lg-6">
                                                <div className="sidebar-right">
                                                    <div className="ttm_single_image-wrapper">
                                                        <img className="img-fluid" src={process.env.REACT_APP_ASSET_URL + "/" + item.image} alt="services-img" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                {/* ttm-service-single-content-area */}
                                                <h3 className="mb-20">{item.title}</h3>
                                                {<div dangerouslySetInnerHTML={{ __html: item.description }} />}
                                                {/* ttm-service-single-content-are end */}
                                            </div>

                                        </div>{/* row end */}
                                    </div>
                                </div>

                            )
                        }
                    })
                }
                {
                    service_id == 6 ? <CompanyWhatWeOffer /> : ""
                }
                {
                    service_id == 6 ? <CompanyUserFeedback /> : ""
                }

                <br/>
                <section className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            {service_id == 6 ? <CompanyHavingDoubt status="2" />: (service_id == 1 ? <CompanyHavingDoubt status="1" /> : "")}
                        </div>
                        <div className='col-md-6'>
                            {service_id == 6 ? <CompanyQueryOrIssue id="0" />: (service_id == 1 ? <CompanyQueryOrIssue id="6" /> : "")}
                        </div>
                    </div>

                </section>

                
                

                
                <CompanyJobSeeker />
                <Footer />

            </div>
        )
    }
}

export default Services_details;