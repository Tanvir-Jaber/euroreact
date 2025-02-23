import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Banner extends Component {
  
  state = {
    show: false,
  };
  render() {
    var slick_slider = {
      dots: false,
      arrow: false,
      autoplay: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 1,

      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Slider
        className="slick_slider banner_slider banner_slider_1"
        {...slick_slider}
      >
        {[ 6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((num) => (
          <div className="slide" key={num}>
            <div
              className="slide_img"
              style={{
                backgroundImage: `url('assets/images/banner/P/${num}.png')`,
              }}
            ></div>
          <div className="slide__content">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="slide__content--headings ttm-textcolor-white text-center">
                    <h3 data-animation="animate__animated animate__bounce animate__delay-2s">
                      Empowering, Inspiring, Rising.
                    </h3>
                    <div className="d-flex align-items-center justify-content-center">
                      <h2 data-animation="animate__fadeInDown">
                        Recruitment & Staffing Agency
                      </h2>
                    </div>
                    <div className="d-flex mt-3 align-items-center justify-content-center">
                      <p data-animation="animate__fadeInDown">
                        Let's enable the discovery of opportunities by providing
                        consistently superior solutions. To add value & respect
                        individuality and diversity while growing...
                      </p>
                    </div>

                    {/* New div for button and video icon */}
                    <div className="d-flex align-items-center justify-content-center mt-4">
                      {/* Button */}
                      <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" 
                        href={process.env.PUBLIC_URL + '/contact_01'}>LEARN MORE</a>

                      {/* Video Icon */}
                      <a href="#video" className="video-icon  mx-4" data-animation="animate__fadeInUp">
                        <i className="fas fa-play-circle fa-3x"></i> {/* FontAwesome icon for play */}
                      </a>
                    </div>

                    <div className="mt-30">{/* Job search form here */}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </div>
        ))}
      </Slider>
    );
  }
}

export default Banner;
