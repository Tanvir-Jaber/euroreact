import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
const CompanyWhatWeDo = () => {
    const [data, setData] = useState([]);
    const [counter, setCounter] = useState(false);
    useEffect(() => {
        let url = `${process.env.REACT_APP_API_URI}/about_us/2`;
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
                data.map((item,index) => {
                    return (
                        <div className="site-main company" key={index}>
                            {/* about-section */}
                            <section className="ttm-row about-section clearfix backgroundColor">
                                <div className="container">
                                    {/* row */}
                                    <div className="row">

                                        <div className="col-lg-6">
                                            <div className="mr-30 mt-30 mt-lg-60 mb-lg-30">
                                                <div className="d-flex">
                                                    <img src={process.env.REACT_APP_ASSET_URL + "/" + item.image} className="img-fluid" alt="single_05" />
                                                    {/* <div className="flex-basis-auto ml_180 mr_30 mt_30 z-index_1">
                                                        <img src="images/dot-pattern.png" className="img-fluid" alt="dot-pattern" />
                                                    </div>
                                                    <div className="d-flex justify-content-end flex-column ml_180 mr_30 mb_35 z-index_1">
                                                        <img src="images/dot-pattern.png" className="img-fluid" alt="dot-pattern" />
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            {/* section title */}
                                            <div className="section-title">
                                                <div className="title-header">
                                                    <h3>About {process.env.REACT_APP_NAME}</h3>
                                                    <h2 className="title underline">{item.title}</h2>
                                                </div>
                                                <div className="title-desc">
                                                    <p style={{ textAlign: "justify" }}>{item.description}</p>
                                                </div>
                                            </div>{/* section title end */}
                                            <div className="align-items-center d-flex  justify-content-betweeen justify-content-between">
                                                <div className="bottomitem">
                                                    <div className="icons">
                                                        <img width={50} src={'images/arcticons_jobstreet.png'} alt="" />
                                                            <ScrollTrigger onEnter={() => { setCounter(true) }} onExit={() => { setCounter(false) }}>
                                                        <span>
                                                                {counter && <CountUp start={0} end={item.jobs} />} +
                                                        </span>
                                                            </ScrollTrigger>
                                                    </div>
                                                    <div className="text">Jobs</div>
                                                </div>
                                                <div className="bottomitem">
                                                    <div className="icons">
                                                        <img width={50} src={'images/fa6-brands_hire-a-helper.png'} alt="" />
                                                            <ScrollTrigger onEnter={() => { setCounter(true) }} onExit={() => { setCounter(false) }}>
                                                        <span>
                                                                {counter && <CountUp start={0} end={item.hired} />} +
                                                        </span>
                                                            </ScrollTrigger>
                                                    </div>
                                                    <div className="text">Hired</div>
                                                </div>
                                                <div className="bottomitem">
                                                    <div className="icons">
                                                        <img width={50} src={'images/material-symbols_person.png'} alt="" />
                                                            <ScrollTrigger onEnter={() => { setCounter(true) }} onExit={() => { setCounter(false) }}>
                                                        <span>
                                                                {counter && <CountUp start={0} end={item.hiring} />} +
                                                        </span>
                                                            </ScrollTrigger>
                                                    </div>
                                                    <div className="text">Hiring</div>
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
export default CompanyWhatWeDo;