import React, { useState, useEffect } from "react";
import axios from "axios";
const CompanyHavingDoubt = (props) => {
    const [data, setData] = useState([]);
    const [tempStatus, setTempStatus] = useState([]);
    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: '', service_id: ''
    });

    const [message, setMessage] = useState('');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value, // Use name as the key to update the corresponding field
        });
    };
    useEffect(() => {
        setFormData({
            ...formData,
            "status": props.status // Use name as the key to update the corresponding field
        });
        setTempStatus(props.status)
        let url = `${process.env.REACT_APP_API_URI}/serviceSection`;
        axios.get(url)
            .then(response => {
                setData(response.data); // Set data from API response
            })
            .catch(err => {
                console.log(err);
            });
    }, []);




    const handleSubmit = async (e) => {


        e.preventDefault();
        e.target.setAttribute('disabled', true);
        setMessage('');



        let url = `${process.env.REACT_APP_API_URI}/user-query`;
        try {
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setMessage(response.data.message);
            window.location.reload()


        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data.message || 'An error occurred');
                // alert(error.response.data.message);
            } else {
                setMessage('An error occurred');
                // alert('An error occurred');
            }
            e.target.removeAttribute('disabled');
        }



    };
    return (
        <>
            <div className="container">
                <form id="contact-form" onSubmit={handleSubmit} >

                    {message && <h5 style={{ color: 'red', fontSize: '18px', padding: "5px 0" }} >{message}</h5>}
                    <div className="row">
                        {tempStatus == 2 ? <h3>Ask Query</h3> : ""}
                        <div className="col-md-6">
                            <div className="form-group ttm-box-col-wrapper" style={{ fontSize: "16px" }}>
                                {/* <label for="name">Name</label> */}
                                <input type="text" style={{ fontSize: "14px", height: "50px" }} className="form-control"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    name="name"
                                    id="name"
                                    required
                                    placeholder="Your Name" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                {/* <label for="vat">Email</label> */}
                                <input type="text" className="form-control" style={{ fontSize: "14px", height: "50px" }}
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    name="email" id="email" placeholder="Your Email" />
                            </div>
                        </div>

                        {
                            tempStatus == 1 ? <div className="col-md-6">
                                <div className="form-group">
                                    {/* <label for="sector">Service</label> */}
                                    <select required onChange={handleInputChange} name="service_id" className="form-control" style={{ fontSize: "14px", height: "50px" }}>
                                        <option value="">Choose an option</option>
                                        {
                                            data.map((itme) => {
                                                return (
                                                    <option value={itme.id}>{itme.title}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div> : ''
                        }


                        <div className={ tempStatus == 1 ? 'col-md-6' : 'col-md-12'}>
                            <div className="form-group">
                                {/* <label for="sector">Subject</label> */}
                                <input type="text" className="form-control" style={{ fontSize: "14px", height: "50px" }}
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    name="subject" id="subject" placeholder="Your Subject" />
                            </div>
                        </div>


                        <div className="col-md-12">
                            <div className="form-group">
                                {/* <label for="employer_country">Message</label> */}
                                <textarea onChange={handleInputChange} className="form-control" style={{ fontSize: "14px", height: "100px" }} name="message" placeholder="Your Message"></textarea>

                            </div>
                        </div>

                    </div>
                    {/* first stap end  */}





                    <button type="submit" className="btn btn-primary float-end" >Submit</button>
                </form>

            </div>



        </>
    );
};

export default CompanyHavingDoubt;
