


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
            .catch(err => { });
            // console.log('data',data.length)
    }, []);
    useEffect(() => {
        const setEqualHeight = () => {
          let maxHeight = 0;
          const items = document.querySelectorAll(".testimonial-item1");
          items.forEach((item) => {
            item.style.height = "auto"; 
            maxHeight = Math.max(maxHeight, item.offsetHeight);
          });
          items.forEach((item) => (item.style.height = `${maxHeight}px`));
        };
    
        setEqualHeight();
        window.addEventListener("resize", setEqualHeight);
        return () => window.removeEventListener("resize", setEqualHeight);
      }, []);

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
                <div className="slider-container">
                    <Slider  className="testimonial-slider"

                        {...slick_slider}
                    >
                        {
                            data.length > 3 ?
                    //    [...Array(3)].map((_,i)=>(
                           data.map((item, index) => (
                               <div
                                   key={item.id}
                                   className={`testimonial-item1 `}
                               >
                                   <div className="testimonial-content">
                                       <div className="testimonial-caption text-center">
                                           <h3>{item.name}</h3>
                                           <p className='text-black'>{item.location}</p>
                                       </div>
                                       <div className="star-ratings text-center">
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
                                       <p className="testimonial-text text-black text-center">
                                           {item.description}
                                       </p>
                                   </div>
                               </div>
                           )) :
                           [...Array(2)].map((_,i)=>(
                           data.map((item, index) => (
                            <div
                                key={item.id}
                                className={`testimonial-item1 `}
                            >
                                <div className="testimonial-content">
                                    <div className="testimonial-caption text-center">
                                        <h3>{item.name}</h3>
                                        <p className='text-black'>{item.location}</p>
                                    </div>
                                    <div className="star-ratings text-center">
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
                                    <p className="testimonial-text text-black text-center">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))
                     ))
                       
                        }
                    </Slider>

                </div>
            </div>
        </section>
    );
};

export default CompanyUserFeedback;