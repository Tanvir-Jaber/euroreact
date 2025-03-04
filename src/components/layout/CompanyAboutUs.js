import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
const CompanyAboutUs = () => {
    const [data, setData] = useState([]);
    const [onCounter, setOnCounter] = useState(false);
    useEffect(() => {
        let url = `${process.env.REACT_APP_API_URI}/about_us/1`;
        axios.get(url)
            .then(response => {
                setData(response.data.data);
            })
            .catch(err => {
            });
    }, []);

    return (
        <>
            {
                data.map((item) => {
                    return (
                        <div className="site-main">
                            {/* about-section */}
                            <section className="ttm-row about-section clearfix">
                                <div className="container">
                                    {/* row */}
                                    <div className="row">

                                        <div className="col-lg-6">
                                            <div className="mr-30 mt-30 mt-lg-60 mb-lg-30">
                                                <div className="d-flex position-relative">
                                                    <img src={process.env.REACT_APP_ASSET_URL + "/" + item.image} className="img-fluid" alt="single_05" />
                                                    {/* <div className="flex-basis-auto ml_180 mr_30 mt_30 z-index_1">
                                                        <img src="images/dot-pattern.png" className="img-fluid" alt="dot-pattern" />
                                                    </div> */}
                                                    <div className="aboutImageText position-absolute">
                                                        <ScrollTrigger onEnter={() => { setOnCounter(true) }} onExit={() => { setOnCounter(false) }}>
                                                            <h1 className="number">
                                                                {onCounter && <CountUp start={0} end={item.experience}/>} +
                                                            </h1>
                                                        </ScrollTrigger>
                                                        <p>YEARS EXPERIENCE</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            {/* section title */}
                                            <div className="section-title">
                                                <div className="title-header">
                                                    <h1>About Us</h1>
                                                    <h2 className="title underline">{item.title}</h2>
                                                </div>
                                                <div className="title-desc">
                                                    <p style={{ textAlign: "justify" }}>{item.description}</p>

                                                    <h5 className='subtitle' style={{ textAlign: "justify" }}>{item.sub_content}</h5>
                                                </div>
                                                <a href='/about_us' className='btn btn-primary'>More About Us</a>
                                            </div>{/* section title end */}

                                        </div>
                                    </div>{/* row end */}
                                </div>
                            </section>
                            {/* about-section end */}

                        </div>
                    )
                })
            }

        </>
    )

};
export default CompanyAboutUs;