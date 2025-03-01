import React, { Component } from "react";
import Slider from 'react-slick';
import axios from "axios";

class BannerBottomSlider extends Component {
  state = {
    // show: false,
    data: []
  }
  componentDidMount() {
    this.serviceSectionLoad();
  }
  async serviceSectionLoad() {
    let url = `${process.env.REACT_APP_API_URI}/serviceSection`;
    const response = await axios.get(url);
    this.setState({ data: response.data });
   
  }
  render() {
    const { data } = this.state;
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
    // const settings = {
    //   dots: false,
    //   arrow: false,
    //   autoplay: true,
    //   infinite: true,
    //   speed: 1000,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   rows: 1,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //       }
    //     },
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    // };

    const slideContent = [
      "International Job Seeking",
      "International Job Seeking",
      "International Job Seeking",
      "International Job Seeking",
      "International Job Seeking"
    ];

    return (
      <div className="container bottomSlider ">
        <Slider {...slick_slider} slidesToShow={3} autoplay={true} >
          {data.map((content, index) => (
            <div key={index} className="slide-item">
              <div className="content-wrapper">
                <div className="icon">
                  <i className={`${content.icon}`}></i>
                </div>
                <h5>{content.title}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default BannerBottomSlider;