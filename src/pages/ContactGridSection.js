import React from 'react';

const ContactGridSection = () => {
    return (
        <>

        <section className="ttm-row grid-section clearfix">
            <div className="container">
                {/* row */}
                <div className="row">                            
                    <div className="col-lg-4 col-md-6">
                        <div className="featured-imagebox box-shadow">
                            <div className="featured-thumbnail">
                                <img className="img-fluid" src="/assets/images/banner/contact1.png" alt="country-01" />
                            </div>
                            <div className="featured-content p-30">                                        
                                <div className="featured-title">
                                    <h3><a href={process.env.PUBLIC_URL + '/'}>Portugal</a></h3>
                                </div>
                                <div className="featured-desc">
                                    <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                        <li className="pb-5">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <div className="ttm-list-li-content">Addres: CENTRO COMMERCIAL MARTIM MONIZ Shop Nº- A 6 , Floor- 2nd 1100-341 Lisbon</div>
                                        </li>
                                        <li className="pb-5">
                                            <i className="fas fa-phone-alt"></i>
                                            <div className="ttm-list-li-content">Call Us:+351 922 214 445 </div>
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope"></i>
                                            <div className="ttm-list-li-content">
                                                <a href="mailto:info@example.com">Email:punjabtravels.pt@gmail.com</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="featured-imagebox box-shadow">
                            <div className="featured-thumbnail">
                                <img className="img-fluid" src="/assets/images/banner/contact2.png" alt="country-02" />
                            </div>
                            <div className="featured-content p-30">                                        
                                <div className="featured-title">
                                    <h3><a href={process.env.PUBLIC_URL + '/'}>Portugal</a></h3>
                                </div>
                                <div className="featured-desc">
                                    <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                        <li className="pb-5">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <div className="ttm-list-li-content">Addres: CENTRO COMMERCIAL MARTIM MONIZ Shop Nº- A 6 , Floor- 2nd 1100-341 Lisbon</div>
                                        </li>
                                        <li className="pb-5">
                                            <i className="fas fa-phone-alt"></i>
                                            <div className="ttm-list-li-content">Call Us:+351 918 728 255</div>
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope"></i>
                                            <div className="ttm-list-li-content">
                                                <a href="mailto:info@example.com">Email:punjabtravels.pt@gmail.com</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="featured-imagebox box-shadow">
                            <div className="featured-thumbnail">
                                <img className="img-fluid" src="/assets/images/banner/contact3.png" alt="country-03" />
                            </div>
                            <div className="featured-content p-30">                                        
                                <div className="featured-title">
                                    <h3><a href={process.env.PUBLIC_URL + '/'}>Portugal</a></h3>
                                </div>
                                <div className="featured-desc">
                                    <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                        <li className="pb-5">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <div className="ttm-list-li-content">Addres: CENTRO COMMERCIAL MARTIM MONIZ Shop Nº- A 6 , Floor- 2nd 1100-341 Lisbon</div>
                                        </li>
                                        <li className="pb-5">
                                            <i className="fas fa-phone-alt"></i>
                                            <div className="ttm-list-li-content">Call Us:+351 922 214 445 </div>
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope"></i>
                                            <div className="ttm-list-li-content">
                                                <a href="mailto:info@example.com">Email:punjabtravels.pt@gmail.com</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>                       
                </div>
                {/* row end */}
            </div>
        </section>
            
        </>
    );
};

export default ContactGridSection;