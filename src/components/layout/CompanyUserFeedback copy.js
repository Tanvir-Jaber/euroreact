import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
const CompanyUserFeedback = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        let url = `${process.env.REACT_APP_API_URI}/user_feedback`;
        axios.get(url)
            .then(response => {
                setData(response.data.data);
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
            <section className="ttm-row testimonial-section clearfix ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    {/* <h3>
                                        Our <span className="text-theme-SkinColor">Clients!</span>
                                    </h3> */}
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
                        {
                            data.map((item) => {
                                return (
                                    <div className="col-lg-12">
                                        {/* testimonials */}
                                        <div className="testimonials ttm-testimonial-box-view-style1">
                                            <div className="testimonial-content">
                                                <blockquote className="testimonial-text">
                                                    {item.description}
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
                                                        {/* <img
                                                    className="img-fluid"
                                                    src="https://via.placeholder.com/150x150?text=150x150+01.jpg"
                                                    alt="testimonial-img"
                                                /> */}
                                                    </div>
                                                </div>
                                                <div className="testimonial-caption">
                                                    <label>{item.location}</label>
                                                    <h3>{item.name}</h3>
                                                </div>
                                            </div>
                                        </div>{" "}
                                        {/* testimonials end */}
                                    </div>
                                )
                            })
                        }


                    </Slider>
                </div>
            </section>

        </>
    )

};
export default CompanyUserFeedback;