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
        className="ttm-row services-section bg-img1 bg-theme-GreyColor ttm-bg ttm-bgimage-yes clearfix"
        style={{ backgroundImage: "url(images/bg-image/row-bgimage-1.png)" }}
      >
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-lg-11">
              {/* section title */}
              <div className="section-title style2 mb-0">
                <div className="title-header">
                  <h3>
                    Classic{" "}
                    <span className="text-theme-SkinColor">Service</span>
                  </h3>
                  <h2 className="title">We Understand Needs</h2>
                </div>
                <div className="title-desc">
                  <p>
                    A process that involves everything from{" "}
                    <span className="text-theme-SkinColor">identifying,</span>{" "}
                    attracting, shortlisting, interviewing, selecting, hiring,
                    screening & onboarding employees.
                  </p>
                </div>
              </div>
              {/* section title end */}
            </div>
            {
              data.map(item => (

                <div className="col-md-4">
                  {/* featured-imagebox */}
                  <div className="featured-imagebox featured-imagebox-services style1 row">
                    {/* featured-thumbnail */}
                    <div className="featured-thumbnail col-12">
                      <img src={process.env.REACT_APP_ASSET_URL + "/" + item.image} />
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
                      <div className="featured-desc col-12">
                        <p style={{ textAlign: "justify" }}>
                          {item.description}
                        </p>
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