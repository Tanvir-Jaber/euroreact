import Slider from 'react-slick';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceSection = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data using axios
    let url = `${process.env.REACT_APP_API_URI}/serviceSection`;
    axios.get(url)

      .then(response => {

        setData(response.data); // Set data from API response
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

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {

      breakpoint: 778,
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
      <section

      >
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <div className="title-header text-center">
                  <h1>What We do?</h1>
                  <h2 className="title ">Our Services</h2>
                </div>
                
              </div>{/* section title end */}
            </div>
            {
              data.map(item => (

                <div className="col-md-4">
                  {/* featured-imagebox */}
                  <div className="featured-imagebox featured-imagebox-services style1 row content-wrapper1">
                    {/* featured-thumbnail */}
                    <div className="icon">
                      <span><i className={`${item.icon}`} aria-hidden="true"></i></span>
                    </div>
                    {/* featured-thumbnail end */}
                    <div className="featured-content col-12">
                      <div className="featured-title">
                        <h3>
                          <a href={process.env.PUBLIC_URL + "/"}>
                            {item.title}
                          </a>
                        </h3>
                      </div>
                      <div className="featured-desc ">
                        <p style={{ textAlign: "justify" }}>
                          {item.description}
                        </p>
                      </div>
                      <div className="bottomtext">
                        <a className='learnMore'>LEARN MORE <i className="fa fa-arrow-right"></i> </a>
                      </div>
                      {/* <a
                      className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey"
                      href={process.env.PUBLIC_URL + "/services_details"}
                    >
                      read more!
                    </a> */}
                    </div>
                  </div>
                  {/* featured-imagebox end */}
                </div>

              ))
            }
          </div>


        </div>
      </section>
    </>
  );
};

export default ServiceSection;