import React, { useEffect, useState } from 'react';

const CompanyJobSeeker = () => {
  
    return (
        <>
            <section className="ttm-row testimonial-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div >
                                {/* <div style={{padding: "18px 63px", background: "url(/images/group.jpg)" , backgroundRepeat:'no-repeat',backgroundSize:'cover',borderRadius:'6px'}}> */}
                                <div className='backgroundColor text-center p-40' >
                                    <h5 className='text-white areyouajob'>
                                        Are you a job seeker? <br/>
                                        As us how we can help you to find your dream job..
                                    </h5>
                                    <a href={process.env.PUBLIC_URL + "/career"} className='text-uppercase btn btn-primary'>Enquiry</a>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </section>

        </>
    )

};
export default CompanyJobSeeker;