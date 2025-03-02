import React, { Component } from "react";
import Slider from 'react-slick';
import axios from "axios";

export class Banner extends Component {
    state = {
        // show: false,
        sliders: []
    }
    componentDidMount() {
        this.slidersLoad();
    }
    async slidersLoad() {
        let url = `${process.env.REACT_APP_API_URI}/sliders`;
        const response = await axios.get(url);
        this.setState({ sliders: response.data });
    }
    render() {
        const { sliders } = this.state;
        var slick_slider = {
            dots: false,
            arrow: false,
            autoplay: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,

            responsive: [{

                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {

                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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

            <Slider className="slick_slider banner_slider banner_slider_3" {...slick_slider} slidesToShow={1} autoplay={true} fade="true" >
                <div className="slide bg-layer">
                    <div className="slide_img" style={{ backgroundImage: 'url(/images/slider-mainbg-005.jpg)' }}></div>
                    <div className="slide__content pb-30 pb-xl-0  pt-xl-0">
                        <div className="container">
                            <div className="row  justify-content-center">
                                <div className="col-lg-6 col-md-8 text-center">
                                    <div className="slide__content--headings ttm-textcolor-white">
                                        <h2 className="animated animate__fadeInDown text-center">We Provide The Best Services For Your Business</h2>
                                        <div className="animated animate__fadeInUp" data-delay="1.4">
                                            {/* <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                                                href={process.env.PUBLIC_URL + '/contact_01'}>Contact us</a> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-lg-6">
                                    <div className="d-none  text-center position-relative">
                                        <div className="z-index-1 position-relative">
                                            <img className="rounded-circle box-shadow m-auto img-fuild" src={process.env.PUBLIC_URL + "/images/single-01.jpg"}></img>
                                        </div>
                                        <div className="cmp-logo one">
                                            <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/logo1.png"} />
                                        </div>
                                        <div className="cmp-logo two">
                                            <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/logo2.png"} />
                                        </div>
                                        <div className="cmp-logo three">
                                            <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/logo3.png"} />
                                        </div>
                                        <div className="cmp-logo four">
                                            <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/logo4.png"} />
                                        </div>
                                        <div className="cmp-logo five">
                                            <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/logo5.png"} />
                                        </div>
                                        <div className="arrow-one">
                                            <img src="/images/slides/arrow-1.png" />
                                        </div>
                                        <div className="arrow-two">
                                            <img src="/images/slides/arrow-2.png" />
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                {

                    sliders.map((v) => {
                        console.log((v.image).replace("\\", "/"))
                        return (<div className="slide bg-layer">
                            <div className="slide_img" style={{ backgroundImage: `url(${process.env.REACT_APP_ASSET_URL+"/"+(v.image).replace("\\", "/")})` }}></div>
                            <div className="slide__content pb-30 pb-xl-0  pt-xl-0">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-lg-6 col-md-8">
                                            <div className="slide__content--headings ttm-textcolor-white">
                                                <h2 className="animated animate__fadeInDown text-center">{v.title}</h2>
                                                <div className="animated animate__fadeInUp" data-delay="1.4">
                                                    {/* <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                                                        href={process.env.PUBLIC_URL + '/contact_01'}>Contact us</a> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-6">
                                            <div className="d-none  text-center position-relative">
                                                <div className="z-index-1 position-relative">
                                                    <img className="rounded-circle box-shadow m-auto img-fuild" src={process.env.PUBLIC_URL + "/images/single-01.jpg"}></img>
                                                </div>
                                                <div className="cmp-logo one">
                                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/logo1.png"} />
                                                </div>
                                                <div className="cmp-logo two">
                                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/logo2.png"} />
                                                </div>
                                                <div className="cmp-logo three">
                                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/logo3.png"} />
                                                </div>
                                                <div className="cmp-logo four">
                                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/logo4.png"} />
                                                </div>
                                                <div className="cmp-logo five">
                                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/logo5.png"} />
                                                </div>
                                                <div className="arrow-one">
                                                    <img src="/images/slides/arrow-1.png" />
                                                </div>
                                                <div className="arrow-two">
                                                    <img src="/images/slides/arrow-2.png" />
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })
                }

            </Slider>

        )
    }
}

export default Banner;