import { useState, useEffect } from 'react';
import axios from 'axios';

import "../../assets/css/custom.css";
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
const CompanyCareerForm = () => {
    const [data, setData] = useState([]);
    const [files, setFiles] = useState([])
    const [fileSize, setFileSize] = useState([])
    const file_arrary = [];
    const file_size_arrary = [];
    function handleChange(e) {
        for (let index = 0; index < e.target.files.length; index++) {

            file_arrary.push(e.target.files[index])
            var _size = e.target.files[index].size;
            var fSExt = new Array('Bytes', 'KB', 'MB', 'GB'),
                i = 0; while (_size > 900) { _size /= 1024; i++; }
            var exactSize = (Math.round(_size * 100) / 100) + ' ' + fSExt[i];
            file_size_arrary.push(exactSize)
        }
        setFiles(file_arrary);
        setFileSize(file_size_arrary)
    }
    useEffect(() => {
        $(".dropify").dropify();
        let url = `${process.env.REACT_APP_API_URI}/job-categories`;
        axios.get(url)
            .then(response => {
                setData(response.data);
            })
            .catch(err => {
            });

        ////
    }, []);
    const [formData, setFormData] = useState({
        name: '', dob: '', nationality: '', city: '', zip: '', employer_country: '',
        phone_no_two: '', phone_no: '', german: '', spanish: "", french: "", english: "", other_language: "", other_experience: "",
        experience1: "",
        experience2: "",
        experience3: "",
        experience4: "",
        experience5: "",
    });

    const [message, setMessage] = useState('');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value, // Use name as the key to update the corresponding field
        });
    };

    const removeFiles = (e) => {
        let id = e.target.getAttribute('data-id');
        const result = files.filter((file, key) => key != id);
        setFiles(result)
    }


    const handleSubmit = async (e) => {

        e.preventDefault();
        e.target.setAttribute('disabled',true);
        setMessage('');

        setTimeout(async () => {
            setFormData({
                ...formData,
                ['image']: files, // Use name as the key to update the corresponding field
            });

          
            let url = `${process.env.REACT_APP_API_URI}/career`;
            try {
                const response = await axios.post(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
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

        }, 1000);



    };






    return (
        <>
            <div className="container">
                <form id="contact-form" onSubmit={handleSubmit} >
                    {/* first stap start  */}
                    <h3>Personal Data</h3>
                    <hr /><br />
                    {message && <h5 style={{ color: 'red', fontSize: '18px', padding: "5px 0" }} >{message}</h5>}
                    <div className="row">

                        <div className="col-md-4">
                            <div className="form-group ttm-box-col-wrapper" style={{ fontSize: "16px" }}>
                                <label for="name">Full Name</label>
                                <input type="text" style={{ fontSize: "14px", height: "50px" }} className="form-control"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    name="name"
                                    id="name"
                                    placeholder="Enter Full Name" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="vat">Date of Birth</label>
                                <input type="date" className="form-control" style={{ fontSize: "14px", height: "50px" }}
                                    value={formData.dob}
                                    onChange={handleInputChange}
                                    name="dob" id="dob" placeholder="DD/MM/YYYY" />
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="sector">Nationality</label>
                                <input type="text" className="form-control" style={{ fontSize: "14px", height: "50px" }}
                                    value={formData.nationality}
                                    onChange={handleInputChange}
                                    name="nationality" id="sector" placeholder="Nationality" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="zip">Zip Code</label>
                                <input type="text" className="form-control" style={{ fontSize: "14px", height: "50px" }}
                                    value={formData.zip}
                                    onChange={handleInputChange}
                                    name="zip" id="zip" placeholder="ZIP Code" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="city">City</label>
                                <input type="text" className="form-control" style={{ fontSize: "14px", height: "50px" }}
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    name="city" id="city" placeholder="City" />
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="employer_country">Country</label>
                                <input type="text" className="form-control" style={{ fontSize: "14px", height: "50px" }}
                                    value={formData.employer_country}
                                    onChange={handleInputChange} name="employer_country" id="employer_country" placeholder="Country name" />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="employer_country">Primary Phone Number</label>
                                <input type="text" className="form-control" style={{ fontSize: "14px", height: "50px" }}
                                    value={formData.phone_no}
                                    onChange={handleInputChange} name="phone_no" id="phone_no" placeholder="Phone No" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="employer_country">Secondary Phone Number</label>
                                <input type="text" className="form-control" style={{ fontSize: "14px", height: "50px" }}
                                    value={formData.phone_no_two}
                                    onChange={handleInputChange} name="phone_no_two" id="phone_no_two" placeholder="Secondary Phone No" />
                            </div>
                        </div>

                    </div>
                    {/* first stap end  */}


                    {/* second step start  */}
                    <br />
                    <h3>Languages (Conversational Level)</h3>
                    <hr /><br />
                    <div className="row">
                        <p>Tell us what's your skills about foreign languages</p>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="duration">English</label>
                                <select
                                    className="form-select form-select-lg p-3"
                                    style={{ fontSize: '14px' }}
                                    value={formData.english}
                                    onChange={handleInputChange}
                                    id="duration"
                                    name="english"
                                    aria-label=".form-select-lg example"
                                >
                                    <option value="very good">Very Good</option>
                                    <option value="good">Good</option>
                                    <option value="with some difficulty">With Some Difficulty</option>
                                    <option value="bad">Bad</option>
                                    <option value="very bad">Very Bad or Null</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="duration">French</label>
                                <select
                                    className="form-select form-select-lg p-3"
                                    style={{ fontSize: '14px' }}
                                    value={formData.french}
                                    onChange={handleInputChange}
                                    id="duration"
                                    name="french"
                                    aria-label=".form-select-lg example"
                                >
                                    <option value="very good">Very Good</option>
                                    <option value="good">Good</option>
                                    <option value="with some difficulty">With Some Difficulty</option>
                                    <option value="bad">Bad</option>
                                    <option value="very bad">Very Bad or Null</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="duration">Spanish</label>
                                <select
                                    className="form-select form-select-lg p-3"
                                    style={{ fontSize: '14px' }}
                                    value={formData.spanish}
                                    onChange={handleInputChange}
                                    id="duration"
                                    name="spanish"
                                    aria-label=".form-select-lg example"
                                >
                                    <option value="very good">Very Good</option>
                                    <option value="good">Good</option>
                                    <option value="with some difficulty">With Some Difficulty</option>
                                    <option value="bad">Bad</option>
                                    <option value="very bad">Very Bad or Null</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="duration">German</label>
                                <select
                                    className="form-select form-select-lg p-3"
                                    style={{ fontSize: '14px' }}
                                    value={formData.german}
                                    onChange={handleInputChange}
                                    id="duration"
                                    name="german"
                                    aria-label=".form-select-lg example"
                                >
                                    <option value="very good">Very Good</option>
                                    <option value="good">Good</option>
                                    <option value="with some difficulty">With Some Difficulty</option>
                                    <option value="bad">Bad</option>
                                    <option value="very bad">Very Bad or Null</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <textarea style={{ fontSize: '14px', padding: "20px" }} className='form-control' id='other_language' value={formData.other_language} name='other_language' placeholder='If you speak another language besides the ones shown above, please let us know which ones they are and your levels of fluency'></textarea>
                        </div>

                    </div>
                    {/* second step end  */}


                    {/* three step start  */}
                    <br />
                    <h3>Professional Experience</h3>
                    <hr /><br />
                    <div className="row">
                        <p>You may indicate up to 5 (five) professionals or professional activities in which you have professional experience - regardless of whether or not they have been paid and/or declare.
                            <br />
                            You must mark the professions/professional activities in order of preference - that is, those that are of most interest and/or for which you have the most capacity and/or vocation.

                        </p>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="experience1">Professional Group</label>
                                <select
                                    className="form-select form-select-lg p-3"
                                    style={{ fontSize: '14px' }}
                                    value={formData.experience1}
                                    onChange={handleInputChange}
                                    id="experience1"
                                    name="experience1"
                                    aria-label=".form-select-lg example"
                                >
                                    <option value="">None</option>
                                    {
                                        data.map((item) => {
                                            return (
                                                <option value={item.id}>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>

                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="experience2">Professional Group</label>
                                <select
                                    className="form-select form-select-lg p-3"
                                    style={{ fontSize: '14px' }}
                                    value={formData.experience2}
                                    onChange={handleInputChange}
                                    id="experience2"
                                    name="experience2"
                                    aria-label=".form-select-lg example"
                                >
                                    <option value="">None</option>
                                    {
                                        data.map((item) => {
                                            return (
                                                <option value={item.id}>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>

                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="experience3">Professional Group</label>
                                <select
                                    className="form-select form-select-lg p-3"
                                    style={{ fontSize: '14px' }}
                                    value={formData.experience3}
                                    onChange={handleInputChange}
                                    id="experience3"
                                    name="experience3"
                                    aria-label=".form-select-lg example"
                                >
                                    <option value="">None</option>
                                    {
                                        data.map((item) => {
                                            return (
                                                <option value={item.id}>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>

                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="experience4">Professional Group</label>
                                <select
                                    className="form-select form-select-lg p-3"
                                    style={{ fontSize: '14px' }}
                                    value={formData.experience4}
                                    onChange={handleInputChange}
                                    id="experience4"
                                    name="experience4"
                                    aria-label=".form-select-lg example"
                                >
                                    <option value="">None</option>
                                    {
                                        data.map((item) => {
                                            return (
                                                <option value={item.id}>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>

                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="experience1">Experience 5</label>
                                <select
                                    className="form-select form-select-lg p-3"
                                    style={{ fontSize: '14px' }}
                                    value={formData.experience5}
                                    onChange={handleInputChange}
                                    id="experience5"
                                    name="experience5"
                                    aria-label=".form-select-lg example"
                                >
                                    <option value="">None</option>
                                    {
                                        data.map((item) => {
                                            return (
                                                <option value={item.id}>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>

                            </div>
                        </div>

                        <div>
                            <textarea style={{ fontSize: '14px', padding: "20px" }} className='form-control' id='other_experience' value={formData.other_experience} name='other_experience' placeholder='Please add information you would like to share that may be important with regard to your application'></textarea>
                        </div>

                    </div>
                    {/* three step end  */}



                    {/* four step start  */}
                    <br />
                    <h3>Upload CV and/or Other Documents </h3>
                    <hr /><br />
                    <p>Upload Your CV</p>
                    <div className="row mx-1">
                        <input type="file" class="dropify" onChange={handleChange} multiple data-max-file-size="1M" data-height="100" />
                        {

                            files.map((item, i) => {
                                return (
                                    <div className='preview-image mt-4'>
                                        <div className="dnd-upload-details d-flex justify-content-between">
                                            <span>
                                                <i className='fa fa-file'></i>
                                                <span className="name ml-2"><span>{item.name}</span><em>({fileSize[i]})</em></span>
                                            </span>

                                            <span className="remove" onClick={removeFiles} data-id={i}> <i onClick={removeFiles} data-id={i} className='fa fa-times'></i> </span>
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>

                    {/* three step end  */}


                    <button type="submit" className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor my-3" >Submit</button>
                </form>

            </div>



        </>
    );
};

export default CompanyCareerForm;