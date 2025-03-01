import React, { Component } from 'react'
import Menu from './Menu';
import Mobile_menu from './Mobile_menu';
import Logo_white from './Logo_white'
import Header_search from './Header_search'
import axios from "axios";
import CountrySelector from './CountrySelector';
import GoogleTranslateWidget from './GoogleTranslateWidget';

export class Header extends Component {
    state = {
        contact_info:'',
        cms : ''
    }
    async contactLoad() {
        let url = `${process.env.REACT_APP_API_URI}/contactInfo`;
        const response = await axios.get(url);
        if((response.data).length > 0)
            this.setState({ contact_info: response?.data[0] ?? '' });
        // console.log(response.data[0])
    }
    async cmsLoad() {
        let url = `${process.env.REACT_APP_API_URI}/cms`;
        const response = await axios.get(url);
        this.setState({ cms: response?.data?.data ?? '' });
        // console.log(this.state)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.isSticky);
        this.contactLoad();
        this.cmsLoad();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.isSticky);
    }

    isSticky = (e) => {
        const header = document.querySelector('header');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('is-Sticky') : header.classList.remove('is-Sticky');
    };

    render() {
        const { contact_info,cms } = this.state;
        return (

            <header id="masthead" className="header ttm-header-style-02 bg-theme-DarkColor">
                {/* site-header-menu */}
                <div id="site-header-menu" className="site-header-menu">
                    <div className="site-header-menu-inner ttm-stickable-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* site-navigation */}
                                    <div className=" my-0  d-flex align-items-center justify-content-between">
                                        {/* site-branding */}
                                        <div className="site-branding">
                                            <Logo_white />
                                        </div>
                                        {/* site-branding end */}
                                        <div className="border-box-block text-theme-WhiteColor site-navigation">
                                            {/* <div className="top_bar d-flex align-items-center justify-content-between">
                                                <div className="d-flex w-auto">
                                                    <div className="top_bar_contact_item">
                                                        <div className="top_bar_icon">
                                                            <i className="flaticon flaticon-phone-call"></i>
                                                        </div>
                                                        <span>{contact_info.phone}</span>
                                                    </div>
                                                    <div className="top_bar_contact_item">
                                                        <div className="top_bar_icon">
                                                            <i className="flaticon flaticon-email"></i>
                                                        </div>
                                                        <span><a href="mailto:info@example.com">{contact_info.email}</a></span>
                                                    </div>
                                                    
                                                </div>
                                                <div className="media-block ms-auto">
                                                    <ul className="social-icons">
                                                        <li>
                                                            {console.log(cms)}
                                                            <a className="facebook" href={cms.footer_facebook_link} rel="noopener" aria-label="facebook">
                                                                <i className="ti ti-facebook"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="twitter" href={cms.footer_twitter_link} rel="noopener" aria-label="twitter">
                                                                <i className="ti ti-twitter-alt"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="google" href={cms.footer_youtube_link} rel="noopener" aria-label="google">
                                                                <i className="ti ti-youtube"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="linkedin" href={cms.footer_instagram_link} rel="noopener" aria-label="linkedin">
                                                                <i className="ti ti-instagram"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div> */}
                                            <div className="d-flex align-items-center justify-content-between">
                                                {/* menu */}
                                                <Menu />
                                                <div className="mobile-menu"><Mobile_menu /></div>
                                                {/* menu end */}
                                                
                                            </div>
                                        </div>
                                        <div className="header_btn">
                                            {/* <CountrySelector /> */}
                                            <GoogleTranslateWidget />
                                            {/* <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill
                                            ttm-icon-btn-left ttm-btn-color-skincolor d-flex align-items-center">
                                                <i className="far fa-user fa-sm"></i><a className="alert-heading" href={process.env.PUBLIC_URL + '/register'}>sign up </a>
                                                <span className="ml-10 mr-10">/</span>
                                                <i className="ti ti-lock fa-sm"></i><a className="alert-heading" href={process.env.PUBLIC_URL + '/login'}>login </a>
                                            </a> */}
                                        </div>
                                    </div>{/* site-navigation end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* site-header-menu end */}
            </header>

        )
    }
}

export default Header;