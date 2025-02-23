import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
const CompanyLatestNews = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        let url = `${process.env.REACT_APP_API_URI}/blogPost`;
        axios.get(url)
            .then(response => {
                setData(response.data);
            })
            .catch(err => {
            });
    }, []);
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
        <>
            <section className="ttm-row testimonial-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    <h3>
                                        <span className="text-theme-SkinColor">All Latest News</span>
                                    </h3>
                                    <h2 className="title">Latest News & Updates</h2>
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
                        {
                            data.map((item) => {
                                return (
                                    <div className="col-lg-12">
                                        {/* testimonials */}
                                        <div className="testimonials ttm-testimonial-box-view-style1">
                                            <div className="testimonial-caption">
                                                <h3>{item.title}</h3>
                                            </div>
                                            <div className="testimonial-content">
                                                <p className="testimonial-text">
                                                    {item.description_one}
                                                </p>
                                            </div>
                                        </div>{" "}
                                        {/* testimonials end */}
                                    </div>
                                )
                            })
                        }


                    </Slider>
                    <div className='text-center'>
                        <button className='text-uppercase btn btn-primary'>All Latest Updates</button>
                    </div>
                </div>
            </section>

        </>
    )

};
export default CompanyLatestNews;