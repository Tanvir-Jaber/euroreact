import { useState } from 'react';
import axios from 'axios';


const Staff_Requisition_Form = () => {


    const [formData, setFormData] = useState({
        name: '',vat: '',sector: '',address: '', city: '',zip : '', employer_country:'',
        contact_person_name:'',email :'',phone:'',
        country :'', nationalities:'', duties:'',requirements:'',workplace_location:'',occupation:'',
        position:'',work_experience:'',
        duration:'', expected_cost:'' ,tolerance_days:'' ,initiation_date:'' ,shift:'',
        transportation_option:'',overtime_option:'',accommodation_provided:'',flexible_date_option:''
      });
    
    const [message, setMessage] = useState(''); 

    // function performSignIn() {
    //     let headers = new Headers();
    //     let url = `${process.env.REACT_APP_API_URI}/staffInfo/store`;
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Accept', 'application/json');
    //     // headers.append('Origin', 'http://localhost:3000');
    
    //     fetch(url, {
    //       mode: 'no-cors',
    //       credentials: 'include',
    //       method: 'POST',
    //       cache: 'no-cache',
    //       headers: headers
    //     })
    //       .then(response => response.json())
    //       .then(json => console.log(json))
    //       .catch(error => console.log('Authorization failed: ' + error.message));
    //   }
    // performSignIn()

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name,value);
    setFormData({
        ...formData,
        [name]: value, // Use name as the key to update the corresponding field
    });
    };


    const handleSubmit = async (e) => {

      e.preventDefault();
      setMessage(''); 

      let url = `${process.env.REACT_APP_API_URI}/staffInfo/store`;
      try {
        const response = await axios.post(url, formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setMessage(response.data.message);
        alert(response.data.message);


      } catch (error) {
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

        <div className="">
            <div className="container">

                    <form id="contact-form" onSubmit={handleSubmit} >


                    {/* first stap start  */}
                    <strong><span className="text-theme-SkinColor">1 of 4</span></strong>
                    <br/><hr/>
                    <h3>01. Employer <span className="text-theme-SkinColor">Identification</span></h3>
                    <hr/><br/>
                    {message && <h5 style={{ color:'green' , fontSize:'25px', padding:"5px 0" }} >{message}</h5>}
                    <div className="row">

                        <div className="col-md-4">
                            <div className="form-group ttm-box-col-wrapper" style={{fontSize:"16px"}}>
                                <label for="name">Name of Employer</label>
                                <input type="text" style={{fontSize:"14px", height:"50px"}} className="form-control"
                                value={formData.name}
                                onChange={handleInputChange}
                                name="name" 
                                id="name" 
                                placeholder="Enter Name of Employer"  />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="vat">Taxpayer Identification Number:</label>
                                <input type="text" className="form-control" style={{fontSize:"14px", height:"50px"}} 
                                value={formData.vat}
                                onChange={handleInputChange}
                                name="vat" id="vat" placeholder="VAT"  />
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="sector">Sector of Economic Activity:</label>
                                <input type="text" className="form-control" style={{fontSize:"14px", height:"50px"}} 
                                value={formData.sector}
                                onChange={handleInputChange}
                                name="sector" id="sector" placeholder="Sector"  />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="address">Complete Address:</label>
                                <input type="text" className="form-control" style={{fontSize:"14px", height:"50px"}} 
                                value={formData.address}
                                onChange={handleInputChange}
                                name="address" id="address" placeholder=" Address"  />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="city">City</label>
                                <input type="text" className="form-control" style={{fontSize:"14px", height:"50px"}} 
                                value={formData.city}
                                onChange={handleInputChange}
                                name="city" id="city" placeholder="City"  />
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="zip">Zipcode:</label>
                                <input type="text" className="form-control" style={{fontSize:"14px", height:"50px"}} 
                                value={formData.zip}
                                onChange={handleInputChange}
                                name="zip" id="zip" placeholder="ZIP"  />
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="employer_country">Country</label>
                                <input type="text" className="form-control" style={{fontSize:"14px", height:"50px"}} 
                                value={formData.employer_country}
                                onChange={handleInputChange} name="employer_country" id="employer_country" placeholder="Country name"  />
                            </div>
                        </div>

                    </div>
                    {/* first stap end  */}


                    {/* second step start  */}
                    <hr/><br/>
                    <strong><span className="text-theme-SkinColor">2 of 4</span></strong>
                    <br/><hr/>
                    <h3>02. Contact <span className="text-theme-SkinColor">Person</span> </h3>
                    <hr/><br/>
                    
                    {message && <h5 style={{ color:'green' , fontSize:'25px', padding:"5px 0" }} >{message}</h5>}
                    <div className="row">

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="contact_person_name"style={{fontSize:"16px"}}>Name:</label>
                                <input type="text" className="form-control" style={{fontSize:"14px", height:"50px"}}
                                value={formData.contact_person_name}
                                onChange={handleInputChange}
                                name="contact_person_name" id="contact_person_name" placeholder="Name"  />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="name" style={{fontSize:"16px"}}>Email Address:</label>
                                <input type="email" className="form-control" style={{fontSize:"14px", height:"50px"}}
                                value={formData.email}
                                onChange={handleInputChange}
                                name="email" id="email" placeholder="Email"  />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="phone" style={{fontSize:"16px"}}>Phone Number:</label>
                                <input type="text" className="form-control" style={{fontSize:"14px", height:"50px"}}
                                value={formData.phone}
                                onChange={handleInputChange}
                                name="phone" id="phone" placeholder="Phone Number"  />
                            
                            </div>
                        </div>

                    </div>
                    {/* second step end  */}


                    {/* three step start  */}
                    <hr/><br/>
                    <strong><span className="text-theme-SkinColor">3 of 4</span></strong>
                    <br/><hr/>
                    <h3>03. Description of the <span className="text-theme-SkinColor">Occupation</span>  and <span className="text-theme-SkinColor">Duties</span> </h3>
                    <hr/><br/>
                    {message && <h5 style={{ color:'green' , fontSize:'25px', padding:"5px 0" }} >{message}</h5>}
                    <div className="row">

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="occupation" style={{fontSize:"16px"}}>Occupation:</label>
                                <input type="text" className="form-control" style={{fontSize:"14px", height:"50px"}}
                                value={formData.occupation}
                                onChange={handleInputChange} 
                                name="occupation" id="occupation" placeholder="Occupation"  />    
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="position" style={{fontSize:"16px"}}>Number of Positions Available:</label>
                                <input type="number" className="form-control" style={{fontSize:"14px", height:"50px"}}
                                value={formData.position}
                                onChange={handleInputChange}  
                                name="position" id="position" placeholder="Position"  />
                            </div>
                        </div>

                        <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="workExperience" style={{fontSize:"16px"}}>Work Experience Required:</label>
                            <div className="form-check">
                            <input
                                className="form-check-input"
                                value="yes"  
                                checked={formData.work_experience === 'yes'}
                                onChange={handleInputChange}
                                type="radio"
                                name="work_experience"
                                id="workExperienceYes"
                            />
                            <label className="form-check-label" style={{fontSize:"13px"}} htmlFor="workExperienceYes">
                                YES
                            </label>
                            </div>

                            <div className="form-check">
                            <input
                                className="form-check-input"
                                value="no"
                                checked={formData.work_experience === 'no'}
                                onChange={handleInputChange}
                                type="radio"
                                name="work_experience"
                                id="workExperienceNo"
                            />
                            <label className="form-check-label" style={{fontSize:"13px"}} htmlFor="workExperienceNo">
                                NO
                            </label>
                            </div>
                        </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="duties" style={{fontSize:"16px"}}>Duties</label>
                                <textarea type="text" className="form-control" rows="4" style={{fontSize:"14px"}}
                                value={formData.duties}
                                onChange={handleInputChange}  
                                name="duties" id="duties" placeholder="Duties"  />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="requirements" style={{fontSize:"16px"}}> Requirements:</label>
                                <textarea type="text" className="form-control" rows="4" style={{fontSize:"14px"}}
                                value={formData.requirements}
                                onChange={handleInputChange}  name="requirements" id="requirements" placeholder="language specific skills and characters etc"  />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="workplace_location" style={{fontSize:"16px"}}>Workplace Location:</label>
                                <input type="text" className="form-control" style={{fontSize:"14px", height:"50px"}}
                                value={formData.workplace_location}
                                onChange={handleInputChange}
                                name="workplace_location" id="workplace_location" placeholder="nearest town and city"  />    
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="country" style={{fontSize:"16px"}}>Country Name</label>
                                <input type="text" className="form-control" style={{fontSize:"14px", height:"50px"}}
                                value={formData.country}
                                onChange={handleInputChange}
                                name="country" id="country" placeholder="Country name"  />    
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="nationalities" style={{fontSize:"14px"}}>Nationalities:</label>
                                <input type="text" className="form-control" style={{fontSize:"14px", height:"50px"}}
                                value={formData.nationalities}
                                onChange={handleInputChange} 
                                name="nationalities" id="nationalities" placeholder="Nationalities:"  />    
                            </div>
                        </div>

                    </div>
                    {/* three step end  */}



                    {/* four step start  */}
                    <hr/><br/>
                    <strong><span className="text-theme-SkinColor">4 of 4</span></strong>
                    <br/><hr/>
                    <h3>04. Terms and Conditions of<span className="text-theme-SkinColor"> Staffing Agreement</span> </h3>
                    <hr/><br/>
                    {message && <h5 style={{ color:'green' , fontSize:'25px', padding:"5px 0" }} >{message}</h5>}
                    <div className="row">

                        <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="duration">Duration:</label>
                            <select
                            className="form-select form-select-lg p-3"
                            style={{ fontSize: '14px' }}
                            value={formData.duration}
                            onChange={handleInputChange}
                            id="duration"
                            name="duration"
                            aria-label=".form-select-lg example"
                            >
                            <option value="Less than 3 months">Select your Choose</option>
                            <option value="Less than 3 months">Less than 3 months</option>
                            <option value="Between 3 and 6 months">Between 3 and 6 months</option>
                            <option value="More than 6 months and less than 12 months">More than 6 months and less than 12 months</option>
                            <option value="12 months and more">12 months and more</option>
                            </select>
                        </div>
                        </div>


                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="initiation_date" style={{fontSize:"16px"}}>Initiation Date (Expected)::</label>
                                <input type="date" className="form-control" style={{fontSize:"14px", height:"50px"}}
                                value={formData.initiation_date}
                                onChange={handleInputChange} 
                                name="initiation_date" id="initiation_date" placeholder="dd/mm/yyyy"  />
                            </div>
                        </div>

                        <div className="col-md-6">
                        <div className="form-group">
                        <label htmlFor="tolerance_days" style={{fontSize:"16px"}}>Tolerance (days)</label>
                        <input type="number" className="form-control" style={{fontSize:"14px", height:"50px"}}
                        value={formData.tolerance_days}
                        onChange={handleInputChange} 
                        name="tolerance_days" id="tolerance_days" placeholder="Enter number of days" />
                        </div>
                    </div>


                        <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="transportation" style={{fontSize:"16px"}}>Transportation Provided:</label>
                            <div className="row">
                            <div className="col-lg-4">
                                <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Free of charge"
                                    checked={formData.transportation_option === 'Free of charge'}
                                    onChange={handleInputChange}
                                    name="transportation_option"
                                    id="flexRadioFree"
                                />
                                <label className="form-check-label" htmlFor="flexRadioFree">
                                    Free of charge
                                </label>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value="For a fee"
                                    checked={formData.transportation_option === 'For a fee'}
                                    onChange={handleInputChange}
                                    name="transportation_option"
                                    id="flexRadioFee"
                                />
                                <label className="form-check-label" htmlFor="flexRadioFee">
                                    For a fee
                                </label>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Not sure"
                                    checked={formData.transportation_option === 'Not sure'}
                                    onChange={handleInputChange}
                                    name="transportation_option"
                                    id="flexRadioNotSure"
                                />
                                <label className="form-check-label" htmlFor="flexRadioNotSure">
                                    Not sure
                                </label>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Not applicable"
                                    checked={formData.transportation_option === 'Not applicable'}
                                    onChange={handleInputChange}
                                    name="transportation_option"
                                    id="flexRadioNotApplicable"
                                />
                                <label className="form-check-label" htmlFor="flexRadioNotApplicable">
                                    Not applicable
                                </label>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>


                        <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="shift" style={{fontSize:"16px"}}>Shift:</label>
                            <select
                            className="form-select form-select-lg p-3"
                            style={{ fontSize: '14px', height: 'auto' }} // Adjust height if needed
                            value={formData.shift}
                            onChange={handleInputChange}
                            id="shift"
                            name="shift" 
                            aria-label=".form-select-lg example"
                            >
                            <option value="">Select Your Choose</option>
                            <option value="Day">Day</option>
                            <option value="Night">Night</option>
                            <option value="Rotational">Rotational</option>
                            <option value="Mixed">Mixed</option>
                            <option value="Variable">Variable</option>
                            </select>
                        </div>
                        </div>


                        <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="overtime" style={{fontSize:"16px"}}>Overtime Required:</label>
                            <div className="row">

                            <div className="col-lg-4">
                                <div className="form-check">
                                <input className="form-check-input" type="radio"
                                    value="yes"
                                    onChange={handleInputChange}
                                    checked={formData.overtime_option === 'yes'}
                                    name="overtime_option" id="overtimeYes" />
                                <label className="form-check-label" htmlFor="overtimeYes">
                                    YES
                                </label>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-check">
                                <input className="form-check-input" type="radio"
                                value="no"
                                checked={formData.overtime_option === 'no'}
                                onChange={handleInputChange} 
                                name="overtime_option" id="overtimeNo" />
                                <label className="form-check-label" htmlFor="overtimeNo">
                                    NO
                                </label>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-check">
                                <input className="form-check-input" type="radio" 
                                value="Not sure"
                                onChange={handleInputChange} 
                                checked={formData.overtime_option === 'Not sure'}
                                name="overtime_option" id="overtimeNotSure" />
                                <label className="form-check-label" htmlFor="overtimeNotSure">
                                    Not sure
                                </label>
                                </div>
                            </div>

                            </div>
                        </div>
                        </div>


                        <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="flexibleDate" style={{fontSize:"16px"}}>Flexible Date:</label>
                            <div className="row">

                            <div className="col-lg-4">
                                <div className="form-check">
                                <input className="form-check-input" type="radio"
                                    value="yes"
                                    onChange={handleInputChange}
                                    checked={formData.flexible_date_option === 'yes'}
                                    name="flexible_date_option" id="flexibleDateYes" />
                                <label className="form-check-label" htmlFor="flexibleDateYes">
                                    YES
                                </label>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-check">
                                <input className="form-check-input" type="radio"
                                value="no"
                                checked={formData.flexible_date_option === 'no'}
                                onChange={handleInputChange}
                                name="flexible_date_option" id="flexibleDateNo" />
                                <label className="form-check-label" htmlFor="flexibleDateNo">
                                    NO
                                </label>
                                </div>
                            </div>

                            </div>
                        </div>
                        </div>


                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="accommodationProvided" style={{fontSize:"16px"}}>Accommodation Provided:</label>
                                <div className="row">

                                <div className="col-lg-3">
                                    <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value="Free of charge"
                                        checked={formData.accommodation_provided === 'Free of charge'}
                                        onChange={handleInputChange}
                                        name="accommodation_provided"
                                        id="accommodationFree"
                                    />
                                    <label className="form-check-label" htmlFor="accommodationFree">
                                        Free of charge
                                    </label>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value="For a fee"
                                        checked={formData.accommodation_provided === 'For a fee'}
                                        onChange={handleInputChange}
                                        name="accommodation_provided"
                                        id="accommodationFee"
                                    />
                                    <label className="form-check-label" htmlFor="accommodationFee">
                                        For a fee
                                    </label>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value="Not sure"
                                        checked={formData.accommodation_provided === 'Not sure'}
                                        onChange={handleInputChange}
                                        name="accommodation_provided"
                                        id="accommodationNotSure"
                                    />
                                    <label className="form-check-label" htmlFor="accommodationNotSure">
                                        Not sure
                                    </label>
                                    </div>
                                </div>

                                </div>
                            </div>
                            </div>


                        <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="expectedCost" style={{fontSize:"16px"}}>Expected Cost of Staffing / Per Hour</label>
                            <input type="number" className="form-control" style={{fontSize:"14px", height:"50px"}}
                            value={formData.expected_cost}
                            onChange={handleInputChange}
                            name="expected_cost" id="expectedCost" placeholder="Enter cost per hour" />
                        </div>
                        </div>

                        

                    </div>
                    {/* three step end  */}


                    <button  type="submit" className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor my-3" >Request</button>
                    </form>
                    
            </div>
        </div>

            
        </>
    );
};

export default Staff_Requisition_Form;