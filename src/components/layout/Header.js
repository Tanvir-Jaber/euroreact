import React, { Component } from 'react'
import Menu from './Menu';
import Mobile_menu from './Mobile_menu';
import Logo from './Logo'
import Header_search from './Header_search'
import MenuNew from './MenuNew';
import Mobile_menu_new from './Mobile_menu_new';


export class Header extends Component {
    
    componentDidMount() {
        window.addEventListener('scroll', this.isSticky);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.isSticky);
    }

    isSticky = (e)=>{
        const header = document.querySelector('header');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('is-Sticky') : header.classList.remove('is-Sticky');
    };

    render() {        
        return (
                
            <header id="masthead" className="header ttm-header-style-01">
                {/* topbar */}
               {/* <div className="top_bar bg-theme-DarkColor text-center clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="top_bar_contact_item m-0">
                                    <div className="top_bar_icon">
                                        <i className="fas fa-info-circle text-reset"></i>
                                    </div>
                                    <span>Using its extensive fish farming experience and knowledge, Fleuren & Nooijen is now a market leader helping. </span>  
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-icon-btn-right ttm-btn-color-skincolor" href="/"> Learn More<i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* topbar end */}
                {/* site-header-menu */}
                <div id="site-header-menu" className="site-header-menu ttm-bgcolor-white">
                    <div className="site-header-menu-inner ttm-stickable-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* site-navigation */}
                                    <div className="site-navigation d-flex align-items-center justify-content-between">
                                        {/* site-branding */}
                                        <div className="site-branding">
                                            <Logo/>
                                        </div>
                                        {/* site-branding end */}
                                        <div className="border-box-block">
                                            <div className=" d-flex align-items-center justify-content-between">
                                                {/* menu */}
                                                {/* <Menu/> */}
                                                <Menu/>
                                                {/* <div className="mobile-menu"><Mobile_menu/></div> */}
                                                <div className="mobile-menu"><Mobile_menu_new/></div>

                                                {/* menu end */}
                                                <div className="header_extra ml-auto d-flex align-items-center">
                                                    {/* <Header_search/> */}
                                                    {/* <div className="header_social">
                                                        <ul className="social-icons">
                                                            <li><a href="/" rel="noopener" aria-label="facebook"><i className="ti ti-facebook"></i></a></li>
                                                            <li><a href="/" rel="noopener" aria-label="twitter"><i className="ti ti-twitter-alt"></i></a></li>
                                                            <li><a href="/" rel="noopener" aria-label="google"><i className="ti ti-google"></i></a></li>
                                                            <li><a href="/" rel="noopener" aria-label="linkedin"><i className="ti ti-linkedin"></i></a></li>
                                                        </ul>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="header_btn">
                                            <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" 
                                            href={process.env.PUBLIC_URL + '/'}>LOGIN</a>
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