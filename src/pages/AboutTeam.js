import Slider from 'react-slick';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AboutTeam = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        function performSignIn() {
            let headers = new Headers();
            let url = `${process.env.REACT_APP_API_URI}/aboutTeam`;
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            // headers.append('Origin', 'http://localhost:3000');

            fetch(url, {
                mode: 'no-cors',
                credentials: 'include',
                method: 'GET',
                cache: 'no-cache',
                headers: headers
            })
                .then(response => response.json())
                .then(json => console.log(json))
                .catch(error => console.log('Authorization failed: ' + error.message));
        }
        performSignIn()

        let url = `${process.env.REACT_APP_API_URI}/aboutTeam`;
        // Fetch data using axios
        axios.get(url)
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
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

            <section className="ttm-row team-section bg-theme-GreyColor clearfix">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-12">
                            {/* section title */}
                            <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    <h3>Experts <span className="text-theme-SkinColor">team!</span></h3>
                                    <h2 className="title">Our Talented Recruiters</h2>
                                </div>
                            </div>{/* section title end */}
                        </div>
                    </div>{/* row end */}
                    {/* Slider */}

                    <Slider className="row slick_slider mb_10" {...slick_slider} slidesToShow={3} arrows={false} autoplay={true}>


                        {
                            data.map(item => (

                                <div className="col-md-12">
                                    <div className="featured-imagebox featured-imagebox-team style1">

                                        <div className="featured-thumbnail">
                                            <img className="img-fluid" src={`${process.env.REACT_APP_ASSET_URL}/${item.image}`} alt={item.name} />
                                        </div>

                                        <div className="featured-media ttm-media-link">
                                            <div className="media-block">
                                                <ul className="social-icons list-inline">
                                                    <li>
                                                        <a href={item.facebook} rel="noopener" aria-label="facebook">
                                                            <i className="ti ti-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={item.twitter} rel="noopener" aria-label="twitter">
                                                            <i className="ti ti-twitter-alt"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={item.linkedin} rel="noopener" aria-label="linkedin">
                                                            <i className="ti ti-linkedin"></i>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>

                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3><a href={process.env.PUBLIC_URL + '/'}>{item.name}</a></h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>{item.title}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            ))
                        }


                    </Slider>

                    {/* Slider end */}
                </div>
            </section>

        </>
    );
};

export default AboutTeam;