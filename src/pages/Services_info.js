import React, { Component } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import axios from "axios";

export class Services_details extends Component {
    state = {
        data: '',
        contact_info: "",
        service_menu: []
    }
    async serviceLoadByID(id) {

        let url = `${process.env.REACT_APP_API_URI}/services/${id}`;
        const response = await axios.get(url);
        this.setState({ data: response?.data.data ?? '' });
        console.log(response.data)
    }
    async serviceMenuLoad() {

        let url = `${process.env.REACT_APP_API_URI}/serviceSection`;
        const response = await axios.get(url);
        this.setState({ service_menu: response?.data ?? '' });
        // console.log(response.data)
    }
    async contactLoad() {
        let url = `${process.env.REACT_APP_API_URI}/contactInfo`;
        const response = await axios.get(url);
        if ((response.data).length > 0)
            this.setState({ contact_info: response?.data[0] ?? '' });
    }
    componentDidMount() {
        const id = this.props.match.params.id ?? 0;
        this.serviceLoadByID(id)
        this.serviceMenuLoad()
        this.contactLoad();
    }
    render() {
        const { data, service_menu, contact_info } = this.state;
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
                            <div className="col-lg-8 content-area order-lg-2">
                                {/* ttm-service-single-content-area */}
                                <div className="ttm-service-single-content-area">
                                    
                                    <div className="ttm-service-description mt-40">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                {/* featured-icon-box */}
                                                <div className="featured-icon-box icon-align-before-content icon-ver_align-top mr-50 mr-md-0 mt-20">
                                                    <div className="featured-icon">
                                                        <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                            <i className="flaticon-research"></i>
                                                        </div>
                                                    </div>

                                                </div>{/* featured-icon-box end */}
                                            </div>

                                        </div>
                                        <h3 className="mb-20">{data.title}</h3>
                                        <p>{data.description}</p>


                                    </div>
                                </div>
                                {/* ttm-service-single-content-are end */}
                            </div>
                            <div className="col-lg-4 widget-area">
                                <div className="sidebar-right">
                                <div className="ttm_single_image-wrapper">
                                        <img className="img-fluid" src={process.env.REACT_APP_ASSET_URL + "/" + data.image} alt="services-img" />
                                    </div>
                                </div>
                            </div>
                        </div>{/* row end */}
                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}

export default Services_details;