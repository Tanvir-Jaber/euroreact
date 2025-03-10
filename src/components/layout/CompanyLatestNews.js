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
     useEffect(() => {
            const setEqualHeight = () => {
              let maxHeight = 0;
              const items = document.querySelectorAll(".testimonials5");
              items.forEach((item) => {
                item.style.height = "auto"; 
                maxHeight = Math.max(maxHeight, item.offsetHeight);
              });
              items.forEach((item) => (item.style.height = `${maxHeight}px`));
            };
            
            setEqualHeight();
            window.addEventListener("resize", setEqualHeight);
            return () => window.removeEventListener("resize", setEqualHeight);
          }, [data]);
    var slick_slider = {
        dots: false,
        arrow: false,
        className: "center",
        centerMode: true,
        centerPadding: "0",
        autoplay: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 1,
        // margin:'30px',

        responsive: [{

            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {

            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {

            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
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
            <section className="ttm-row testimonial-section clearfix pb-0">
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
                    <div className="slick_slider1">
                    <Slider
                        className="row slick_slider  slick-arrows-style1"
                        {...slick_slider}

                    >
                        {
                            data.map((item,index) => {
                                return (
                                    <div className="col-lg-12 d-flex testimonials5 " key={index}>
                                        {/* testimonials */}
                                        <div className="testimonials ttm-testimonial-box-view-style1">
                                            <div className="testimonial-content testimonial-content1">
                                                <div className="testimonial-caption p-0">
                                                    <h3 className='newstitle'>{item.title}</h3>
                                                </div>
                                                <p className="testimonial-text newsdescription">
                                                    {item.description_one}
                                                </p>
                                            <div className="bottomtext">
                                                <a className='learnMore1'>LEARN MORE <i className="fa fa-arrow-right"></i> </a>
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
                    <div className='text-center'>
                        <a className='btn btn-primary'>All Latest Updates</a>
                    </div>
                </div>
            </section>

        </>
    )

};
export default CompanyLatestNews;