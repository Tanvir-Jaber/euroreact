import React, {Component} from 'react';

class Logo extends Component {
    render() {
        return (

            <a className="home-link" href={process.env.PUBLIC_URL + '/'} title={process.env.REACT_APP_NAME} rel="home">
                <img id="logo-img"  className="img-fluid auto_size" src="/images/logo-company.png" alt="logo-img"/>
             </a>
        );
    }
}

export default Logo;