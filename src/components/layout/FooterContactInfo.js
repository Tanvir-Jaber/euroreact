

const FooterContactInfo = () => {
 

    return (
        <>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area">
                <div className="widget widget-contact clearfix">
                  <h3 className="widget-title">Quick Contact!</h3>

                  
                 
                  <ul className="widget_contact_wrapper">
                    <li>
                      <i className="ttm-textcolor-skincolor flaticon-phone-call"></i>
                      <h3>Call Us On:</h3> +351 918 728 255
                    </li>
                    <li>
                      <i className="ttm-textcolor-skincolor flaticon-placeholder"></i>
                      <h3>Address:</h3>CENTRO COMMERCIAL MARTIM MONIZ Shop Nº- A 6 , Floor- 2nd 1100-341 Lisbon , Portugal
                    </li>
                    <li>
                      <i className="ttm-textcolor-skincolor flaticon-email"></i>
                      <h3>Email:</h3>
                      {/* <a href={"mailto:punjabtravels.pt@gmail.com" }>punjabtravels.pt@gmail.com</a> */}

                    </li>
                  </ul>

               

                </div>
              </div>
            
        </>
    );
};

export default FooterContactInfo;