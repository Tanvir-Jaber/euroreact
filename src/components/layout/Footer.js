import React, { Component } from "react";
import FooterContactInfo from "./FooterContactInfo";
import FooterContactInfoNew from "./FooterContactInfoNew";
import axios from "axios";
import style from "../../assets/css/custom.css";
export class Footer extends Component {
  state = {
    service_menu: [],
    footer_content: '',
    cms: ''
  }
  async servicemenusLoad() {
    let url = `${process.env.REACT_APP_API_URI}/serviceSection`;
    const response = await axios.get(url);
    this.setState({ service_menu: response?.data ?? [] });
  }
  async footerContentLoad() {
    let url = `${process.env.REACT_APP_API_URI}/footer-content`;
    const response = await axios.get(url);
    this.setState({ footer_content: response?.data ?? '' });
  }
  async cmsLoad() {
      let url = `${process.env.REACT_APP_API_URI}/cms`;
      const response = await axios.get(url);
      this.setState({ cms: response?.data?.data ?? '' });
      console.log(this.state)
  }
  componentDidMount() {
    this.servicemenusLoad();
    this.footerContentLoad();
    this.cmsLoad();
  }

  render() {
    const { service_menu,footer_content,cms } = this.state;
    return (
      <footer className="footer widget-footer bg-theme-DarkColor text-theme-WhiteColor clearfix">
        <div className="second-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 widget-area">
                <div className="widget widget_text clearfix">
                  <div className="footer-logo">
                    <img
                      id="footer-logo-img"
                      className="img-fluid auto_size"
                      width="120"
                      src="/images/logo-company.png"
                      alt="footer-logo"
                    />
                  </div>
                  <p>
                    {footer_content.description}
                  </p>
                  
                  {/* <a
                    className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white"
                    href={process.env.PUBLIC_URL + "/contact_01"}
                  >
                    Request A Free Quotes
                  </a> */}
                  <div className="d-flex socialIcon gap-2">
                    <a href={cms.footer_facebook_link}>
                    <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href={cms.footer_instagram_link}>
                    <i className="fa-brands fa-instagram"></i>
                    </a>
                    {/* <a href="https://twitter.com/">
                      <i className="fa-brands fa-twitter"></i>
                    </a> */}
                    <a href={cms.footer_youtube_link}>
                    <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-2 widget-area">
                <div className="widget widget-recent-post clearfix">
                  <h3 className="widget-title">Useful Links</h3>
                  <ul className="widget-post ttm-recent-post-list custom-footer-link">
                    <li><a href={process.env.PUBLIC_URL + '/'}>Home</a></li>
                    <li><a href={process.env.PUBLIC_URL + '/gallery'}>Gallery</a></li>
                    <li><a href={process.env.PUBLIC_URL + '/about_us'}>About Us</a></li>
                    <li><a href={process.env.PUBLIC_URL + '/contact_01'}>Contact Us</a></li>
                  </ul>
                  <a href="https://www.livroreclamacoes.pt/Inicio/" className="btn btn-primary footerBtn">Register Complaint</a>
                  {/* <a
                    className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white"
                    href="https://www.livroreclamacoes.pt/Inicio"
                  >
                    Register Complain
                  </a> */}
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                <div className="widget widget-recent-post clearfix">
                  <h3 className="widget-title">Quick Links</h3>
                  <ul className="widget-post ttm-recent-post-list custom-footer-link">
                    {service_menu.map((v) => {
                      return (<li key={v.id}><a href={process.env.PUBLIC_URL + '/services/' + v.id}>{v.title}</a></li>)
                    })
                    }
                  </ul>
                </div>
              </div>

              {/* <FooterContactInfo/> */}
              <FooterContactInfoNew />

            </div>
          </div>
        </div>
        <div className="bottom-footer-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-6">
                <span className="copyright">
                  Copyright © 2024{" "}
                  <a href={process.env.PUBLIC_URL + "/"}>{process.env.REACT_APP_NAME} </a>All
                  rights reserved.
                </span>
                <ul className="footer-nav-menu">
                  <li>
                    <a href={process.env.PUBLIC_URL + "/"}>Privacy & Policy</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL + "/"}>
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 d-lg-flex align-items-center justify-content-between">
               
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
