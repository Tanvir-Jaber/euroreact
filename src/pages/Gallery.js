import React, { Component } from 'react';
import Slider from 'react-slick';
import ProgressBar from 'react-animated-progress-bar';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CountUp from 'react-countup';
import Video from '../components/layout/Video';
import AboutTeam from './AboutTeam';
import axios from 'axios';

export class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            galleries: [],
            job_categories: []
        };
    }
    async galleriesLoad() {
        let url = `${process.env.REACT_APP_API_URI}/gallery`;
        const response = await axios.get(url);
        this.setState({ galleries: response?.data?.data?.galleries ?? '' });
        this.setState({ job_categories: response?.data?.data?.job_categories ?? '' });

    }
    componentDidMount() {
        this.galleriesLoad();
    }
    render() {

        var { galleries } = this.state
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
                        <div className="row">
                            {
                               ( galleries).map((v)=>{
                                    return (
                                        <div className='col-md-4'>
                                            <img width="100%" className='img-fluid' src={process.env.REACT_APP_ASSET_URL+"/"+ v.image_url}/>
                                        </div>
                                    )
                                })
                            }
                            <div className='col-md-3'></div>
                        </div>{/* row end */}
                    </div>
                </section>
                {/* about-section end */}



                <Footer />

            </div>
        )
    }
}


export default Gallery;