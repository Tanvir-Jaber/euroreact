import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompanyCareerConsultation = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        let url = `${process.env.REACT_APP_API_URI}/about_us/3`;
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
                                            {/* section title */}
                                            <div className="section-title">
                                                <div className="title-header">
                                                    <h3>{item.title}</h3>
                                                    <h2 className="title">Career Consultation</h2>
                                                </div>
                                                <div className="title-desc">
                                                    <p style={{ textAlign: "justify" }}>{item.description}</p>
                                                </div>
                                                <h6 className="py-2">
                                                    Click <span className="text-theme-SkinColor">apply</span>{" "}
                                                    and <span className="text-theme-SkinColor">upload</span> the
                                                    important information.{" "}
                                                </h6>

                                                <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-dark"
                                                    href={process.env.PUBLIC_URL + "/career"} >
                                                    Apply To Get Here
                                                </a>
                                            </div>{/* section title end */}

                                        </div>

                                        <div className="col-lg-6">
                                            <div className="mr-30 mt-30 mt-lg-60 mb-lg-30">
                                                <div className="d-flex">
                                                    <img src={process.env.REACT_APP_ASSET_URL + "/" + item.image} className="img-fluid" alt="single_05" />
                                                    <div className="flex-basis-auto ml_180 mr_30 mt_30 z-index_1">
                                                        <img src="images/dot-pattern.png" className="img-fluid" alt="dot-pattern" />
                                                    </div>
                                                    <div className="d-flex justify-content-end flex-column ml_180 mr_30 mb_35 z-index_1">
                                                        <img src="images/dot-pattern.png" className="img-fluid" alt="dot-pattern" />
                                                    </div>
                                                </div>
                                            </div>
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
export default CompanyCareerConsultation;