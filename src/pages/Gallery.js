import React, { Component } from 'react';

import Header from '../components/layout/Header2';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import axios from 'axios';

export class Gallery extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            galleries: [],
            job_categories: [],
            active: 0
        };
    }
    handleClick(e) {
        this.setState({ active: e })
    }
    async galleriesLoad() {
        let url = `${process.env.REACT_APP_API_URI}/gallery`;
        const response = await axios.get(url);
        this.setState({ galleries: response?.data?.data?.galleries ?? '' });
        this.setState({ job_categories: response?.data?.data?.job_categories ?? '' });
        console.log(response?.data?.data?.job_categories)

    }
    componentDidMount() {
        this.galleriesLoad();
    }
    render() {

        var { galleries, job_categories, active } = this.state
        return (
            <div className="site-main">

                <Header />

                {/* PageHeader */}
                <PageHeader
                    title="gallery"
                    breadcrumb="gallery"
                />
                {/* PageHeader end */}


                {/* about-section */}
                <section className="ttm-row about-section clearfix">
                    <div className="container">
                        {/* row */}
                        <div className='d-flex'>
                            <Tabs>
                                <TabList className='text-center'>
                                    <Tab onClick={() => this.handleClick(0)} className={active == 0 ? 'btn btn-primary withBorder fw-bold' : 'btn btn-primary gradient-border fw-bold withBorder'}>All</Tab>
                                    {
                                        job_categories.map((item) => {
                                            return (
                                                <Tab onClick={() => this.handleClick(item.id)} className={active == item.id ? 'btn btn-primary fw-bold withBorder' : 'btn btn-primary gradient-border fw-bold withBorder'} key={item.id}>{item.title}</Tab>
                                            )
                                        })
                                    }
                                </TabList>

                                <TabPanel className="row">
                                    {
                                        (galleries).map((v) => {
                                            return (
                                                <div key={v.id} className='col-md-4'>
                                                    <img width="100%" className='img-fluid' src={process.env.REACT_APP_ASSET_URL + "/" + v.image_url} />
                                                </div>
                                            )
                                        })
                                    }
                                </TabPanel>

                                {
                                    job_categories.map((item) => {
                                        return (
                                            <TabPanel className="row">
                                                {
                                                    galleries.map((value) => {
                                                        if (value.job_category_id == item.id) {
                                                            return (
                                                                <div key={value.id} className='col-md-4'>
                                                                     <img width="100%" className='img-fluid' src={process.env.REACT_APP_ASSET_URL + "/" + value.image_url} />
                                                                    {/* <img width="100%" className='img-fluid' src={process.env.REACT_APP_ASSET_URL + "/" + value.image_url} /> */}
                                                                </div>
                                                            )
                                                        }
                                                    })
                                                }
                                            </TabPanel>
                                        )

                                    })
                                }
                                {/* <TabPanel>
                                    <h2>Any content 1</h2>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Any content 2</h2>
                                </TabPanel> */}
                            </Tabs>
                        </div>
                        {/* <div className="row">
                            {
                                (galleries).map((v) => {
                                    return (
                                        <div key={v.id} className='col-md-4'>
                                            <img width="100%" className='img-fluid' src={process.env.REACT_APP_ASSET_URL + "/" + v.image_url} />
                                        </div>
                                    )
                                })
                            }
                            <div className='col-md-3'></div>
                        </div> */}
                        {/* row end */}
                    </div>
                </section>
                {/* about-section end */}



                <Footer />

            </div>
        )
    }
}


export default Gallery;