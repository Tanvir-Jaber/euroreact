import React, { Component } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import axios from "axios";

export class Services_details extends Component {
    state = {
        data: '',
        contact_info:"",
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
        if((response.data).length > 0)
            this.setState({ contact_info: response?.data[0] ?? '' });
    }
    componentDidMount() {
        const id = this.props.match.params.id ?? 0;
        this.serviceLoadByID(id)
        this.serviceMenuLoad()
        this.contactLoad();
    }
    render() {
        const { data,service_menu,contact_info } = this.state;
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
                                    <div className="ttm_single_image-wrapper">
                                        <img className="img-fluid" src={process.env.REACT_APP_ASSET_URL + "/" + data.image} alt="services-img" />
                                    </div>
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
                                    <aside className="widget widget-nav-menu">
                                        <ul>
                                            {service_menu.map((v) => {
                                                return (<li><a href={process.env.PUBLIC_URL + '/services/' + v.id}>{v.title}</a></li>)
                                            })
                                            }
                                            
                                        </ul>
                                    </aside>

                                    <aside className="widget widget-banner">
                                        <div className="ttm-col-bgcolor-yes bg-theme-DarkColor ttm-bg p-30 pb-50 pt-45">
                                            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor">
                                                <div className="ttm-col-wrapper-bg-layer-inner"></div>
                                            </div>
                                            <div className="layer-content text-center text-theme-WhiteColor">
                                                <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-style-round ttm-icon_element-color-skincolor ttm-icon_element-size-xl">
                                                    <i className="far fa-comments"></i></div>
                                                <h3>Do You Need Any Help?</h3>
                                                <div className="ttm-horizontal_sep width-100 mt-25 mb-25"></div>
                                                <ul>
                                                    <li>{contact_info.phone}</li>
                                                    <li>{contact_info.email}</li>
                                                </ul>
                                                <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill 
                                                ttm-btn-color-skincolor" href={process.env.PUBLIC_URL + '/contact_01'}>appoinments!</a>
                                            </div>
                                        </div>
                                    </aside>
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