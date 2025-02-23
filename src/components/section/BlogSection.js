import React from 'react';

const BlogSection = () => {
    return (
        <>

        
            {/* blog-section */}
            <section className="ttm-row blog-section clearfix">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-12">
                            {/* section title */}
                            <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    <h3>Extend <span className="text-theme-SkinColor">Knowledge</span></h3>
                                    <h2 className="title">Latest News & Articles</h2>
                                </div>
                            </div>{/* section title end */}
                        </div>
                    </div>{/* row end */}
                    {/* Slider */}
                    <Slider className="row slick_slider mb_10" {...slick_slider} slidesToShow={3} arrows={false} autoplay={false}>
                        <div className="col-md-12">
                            {/* featured-imagebox-post */}
                            <div className="featured-imagebox featured-imagebox-post style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="assets/images/blog/blog-2.png" alt="blog-image" />
                                    <div className="ttm-box-post-date">
                                        <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2021-03-18T04:16:25+00:00">18
                                            <span className="entry-month entry-year">Mar</span></time>
                                        </span>
                                    </div>
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="post-meta">
                                        <span className="ttm-meta-line byline">Admin</span>
                                        <span className="ttm-meta-line category-link">business</span>
                                    </div>
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/blog_details'}>Are  meetings falling to flat? Try these 10 tips</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Whatever you do in planning, facilitating. Goal should revolve support </p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/blog_details'}>read more!</a>
                                </div>
                            </div>{/* featured-imagebox-post end */}
                        </div>
                        <div className="col-md-12">
                            {/* featured-imagebox-post */}
                            <div className="featured-imagebox featured-imagebox-post style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="assets/images/blog/blog-2.png" alt="blog-image" />
                                    <div className="ttm-box-post-date">
                                        <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2021-03-18T04:16:25+00:00">18
                                            <span className="entry-month entry-year">Mar</span></time>
                                        </span>
                                    </div>
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="post-meta">
                                        <span className="ttm-meta-line byline">Admin</span>
                                        <span className="ttm-meta-line category-link">business</span>
                                    </div>
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/blog_details'}>Are You Moving Businesses To Another State?</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>A business leader must consider issues beyond choosing a moving!</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/blog_details'}>read more!</a>
                                </div>
                            </div>{/* featured-imagebox-post end */}
                        </div>
                        <div className="col-md-12">
                            {/* featured-imagebox-post */}
                            <div className="featured-imagebox featured-imagebox-post style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="assets/images/blog/blog-2.png" alt="blog-image" />
                                    <div className="ttm-box-post-date">
                                        <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2021-03-18T04:16:25+00:00">18
                                            <span className="entry-month entry-year">Mar</span></time>
                                        </span>
                                    </div>
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="post-meta">
                                        <span className="ttm-meta-line byline">Admin</span>
                                        <span className="ttm-meta-line category-link">business</span>
                                    </div>
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/blog_details'}>Shame: Does It Fine to Fit In The Workplace?</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>This can be innate or external and results can be surprising performance</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/blog_details'}>read more!</a>
                                </div>
                            </div>{/* featured-imagebox-post end */}
                        </div>
                        <div className="col-md-12">
                            {/* featured-imagebox-post */}
                            <div className="featured-imagebox featured-imagebox-post style1">
                                {/* featured-thumbnail */}
                                <div className="featured-thumbnail">
                                    <img className="img-fluid" src="assets/images/blog/blog-2.png" alt="blog-image" />
                                    <div className="ttm-box-post-date">
                                        <span className="ttm-entry-date">
                                            <time className="entry-date" dateTime="2021-03-18T04:16:25+00:00">18
                                            <span className="entry-month entry-year">Mar</span></time>
                                        </span>
                                    </div>
                                </div>{/* featured-thumbnail end */}
                                <div className="featured-content">
                                    <div className="post-meta">
                                        <span className="ttm-meta-line byline">Admin</span>
                                        <span className="ttm-meta-line category-link">business</span>
                                    </div>
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/blog_details'}>How to Handle Negativity in Former People?</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Whatever you do in planning, facilitating. Goal should revolve support</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/blog_details'}>read more!</a>
                                </div>
                            </div>{/* featured-imagebox-post end */}
                        </div>
                    </Slider>
                    {/* Slider end */}
                </div>
            </section>
            {/* blog-section end */}
            
        </>
    );
};

export default BlogSection;