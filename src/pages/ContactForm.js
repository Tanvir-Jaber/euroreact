import axios from 'axios';
import { useState } from 'react';

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        description: '',
      });

    const [message, setMessage] = useState(''); 

    function performSignIn() {
        let headers = new Headers();
        let url = `${process.env.REACT_APP_API_URI}/userFeadback/store`;
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        // headers.append('Origin', 'http://localhost:3000');
    
        fetch(url, {
          mode: 'no-cors',
          credentials: 'include',
          method: 'POST',
          cache: 'no-cache',
          headers: headers
        })
          .then(response => response.json())
          .then(json => console.log(json))
          .catch(error => console.log('Authorization failed: ' + error.message));
      }
    performSignIn()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name,value);
        setFormData({
          ...formData,
          [name]: value, 
        });
      };

      
      const handleSubmit = async (e) => {

        e.preventDefault();
        setMessage(''); // Clear previous message
        let url = `${process.env.REACT_APP_API_URI}/userFeadback/store`;
        try {
          const response = await axios.post(url, formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          setMessage(response.data.message);
          alert(response.data.message);
        } catch (error) {
          // Handle error and show error message
          if (error.response && error.response.data) {
            setMessage(error.response.data.message || 'An error occurred');
            alert(error.response.data.message);
          } else {
            setMessage('An error occurred');
            alert('An error occurred');
          }
        }
      };
    
    
    console.log(formData);

    return (
        <>

        <div className="col-lg-6">
        <div className="ttm-col-bgcolor-yes ttm-bg bg-theme-WhiteColor z-index-1 p-40 p-lg-30 mt-lg-30">
            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>

            {message && <h5 style={{ color:'green' , fontSize:'25px', padding:"5px 0" }} >{message}</h5>}
            
            <div className="layer-content">
                <form id="contact_form" onSubmit={handleSubmit}  className="contact_form wrap-form">
                    <div className="row ttm-boxes-spacing-10px">
                        <div className="col-md-12 ttm-box-col-wrapper">
                            <label>
                                <input name="name" type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Name" 
                                required="required" />
                            </label>
                        </div>
                        <div className="col-md-6 ttm-box-col-wrapper">
                            <label>
                                <input name="email" type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Your Email" required="required" />
                            </label>
                        </div>
                        <div className="col-md-6 ttm-box-col-wrapper">
                            <label>
                                <input name="subject" type="text"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="Subject" required="required" />
                            </label>
                        </div>
                        <div className="col-md-12 ttm-box-col-wrapper">
                            <label>
                                <input name="phone" type="text"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Phone Number" 
                                    required="required" />
                            </label>
                        </div>
                        <div className="col-md-12 ttm-box-col-wrapper">
                            <label>
                                <textarea
                                className="input-field description"
                                value={formData.description}
                                onChange={handleInputChange}
                                name='description' rows="7" 
                                placeholder="Enter your Message"
                                type="text"
                                id="description" required="required"
                                />
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill 
                    ttm-btn-color-skincolor w-100" >send a message!</button>
                </form>
            </div>
        </div>
        </div>
   
        </>
    );
};

export default ContactForm;