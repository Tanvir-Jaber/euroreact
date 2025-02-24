import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompanyWhatWeOffer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        let url = `${process.env.REACT_APP_API_URI}/about_us/5`;
        axios.get(url)
            .then(response => {
                setData(response.data.data);
            })
            .catch(err => {
            });
    }, []);

    return (
        <>
            <div className="container text-center">
                <h2>What We Offer</h2>
                <br/>
                <div className="row justify-content-center">
                    {
                        data.map((item) => {
                            return (
                                <div className="col-lg-4 d-flex mb-3">
                                    <span style={{ fontSize:"30px",marginRight:"10px"}}> <i className={`${item.icon}`}></i> </span>
                                    <h5>{item.title}</h5>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )

};
export default CompanyWhatWeOffer;