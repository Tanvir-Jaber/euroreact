import React, { useState, useEffect } from 'react'
import axios from 'axios';
function FAQ({faq}) {
    const [activeIndex, setActiveIndex] = useState(null);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        setActiveIndex(0);
        async function faqLoad() {
            let url = `${process.env.REACT_APP_API_URI}/faq/image`;
            const response = await axios.get(url);
            setData(response?.data );
        }   
        faqLoad();
    }, []);
    return (
        <>
            <section className="ttm-row about-section bg-layer-equal-height clearfix pt-0">
                <div className="container">
                    {/* row */}
                    <div className="row g-0">
                        <div className="col-md-6">
                            {/* col-img-img-two */}
                            <div className='themeColor'>All your questions answered!</div>
                            <h3 className='fw-bolder'>Having Queries, Please Ask Us</h3>
                            <div className="col-bg-img-two ttm-col-bgimage-yes ttm-bg mt-md-50">
                                <div
                                    className="ttm-col-wrapper-bg-layer ttm-bg-layer"
                                    // style={{
                                    //     backgroundImage: `url(${process.env.PUBLIC_URL}/images/Group-11.jpg)`, backgroundSize: "contain"
                                    // }}
                                >
                                    <img src={`${process.env.REACT_APP_ASSET_URL}/${data.image_url}`} alt="img"  className='img-fluit' />
                                </div>
                                <div className="layer-content"></div>

                            </div>
                            {/* col-img-bg-img-two end */}
                        </div>
                        <div className="col-md-6">
                            <div className="pt-70 pt-md-50 pl-70 pl-md-0">
                                <div>
                                    {
                                        faq.map((v, i) => {
                                            let regex = /(<([^>]+)>)/gi;
                                            let result = (v.answer).replace(regex, "");
                                            return (
                                                

                                                    <div key={i} className="accordion-item" >
                                                        <div
                                                            className="accordion-header"
                                                            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                                        >
                                                            <div className="accordion-title">0{i+1} {v.question}</div>
                                                            <div className="accordion-icon">
                                                                {activeIndex === i ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i> }
                                                            </div>
                                                        </div>

                                                        <div className={`accordion-content ${activeIndex === i ? 'show' : ''}`}>
                                                            {result}
                                                        </div>
                                                    </div>

                                            )
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* row end */}
                </div>
            </section>
        </>
    )
}

export default FAQ
