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
                        <div key={item.id} className="site-main">
                            {/* about-section */}
                            <section className="ttm-row about-section clearfix">
                                <div className="container ">
                                    {/* row */}
                                    <div className="row">


                                        <div className="col-lg-6 backgroundColor  ">
                                            {/* section title */}
                                            <div className="px-0 px-md-5 py-5">
                                                <div className="section-title my-4">
                                                    <div className="title-header">
                                                        <h3 className='themeColor mb-30'>{item.title}</h3>
                                                        <h2 className="title text-white">Career Consultation</h2>
                                                    </div>
                                                    <div className="title-desc text-white">
                                                        <p className='text-white' style={{ textAlign: "justify" }}>{item.description}</p>
                                                    </div>
                                                    <h6 className="py-2 text-white">
                                                        Click <span className="text-theme-SkinColor">apply</span>{" "}
                                                        and <span className="text-theme-SkinColor">upload</span> the
                                                        important information.{" "}
                                                    </h6>

                                                    <a className="btn btn-primary"
                                                        href={process.env.PUBLIC_URL + "/career"} >
                                                        Apply To Get Here
                                                    </a>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-lg-6 p-0">
                                                    <img src={process.env.REACT_APP_ASSET_URL + "/" + item.image} className="img-fluid h-100" alt="single_05" />
                                            {/* <div className="mr-30 mt-30 mt-lg-60 mb-lg-30">
                                                <div className="d-flex">
                                                    <div className="flex-basis-auto ml_180 mr_30 mt_30 z-index_1">
                                                        <img src="images/dot-pattern.png" className="img-fluid" alt="dot-pattern" />
                                                    </div>
                                                    <div className="d-flex justify-content-end flex-column ml_180 mr_30 mb_35 z-index_1">
                                                        <img src="images/dot-pattern.png" className="img-fluid" alt="dot-pattern" />
                                                    </div>
                                                </div>
                                            </div> */}
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