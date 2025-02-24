


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CompanyUserFeedback = () => {
    const [data, setData] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        let url = `${process.env.REACT_APP_API_URI}/user_feedback`;
        axios.get(url)
            .then(response => {
                setData(response.data.data);
            })
            .catch(err => {});
    }, []);

    const settings = {
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    centerMode: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    };

    return (
        <section className="ttm-row testimonial-section clearfix backgroundColor">
            <div className="container">
            <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title title-style-center_text">
                                <div className="title-header d-flex align-items-center">
                                    {/* <h3>
                                        Our <span className="text-theme-SkinColor">Clients!</span>
                                    </h3> */}
                                    <span className='borderLine'></span>
                                    <h2 className="title text-left text-white m-0">What Our Client Says!</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                <Slider
                    className="testimonial-slider"
                    {...settings}
                >
                    {data.map((item, index) => (
                        <div 
                            key={item.id}
                            className={`testimonial-item ${index === currentSlide ? 'center-slide' : ''}`}
                        >
                            <div className="testimonial-content">
                                <div className="testimonial-caption">
                                    <h3>{item.name}</h3>
                                    <label>{item.location}</label>
                                </div>
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
                                <blockquote className="testimonial-text">
                                    {item.description}
                                </blockquote>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default CompanyUserFeedback;