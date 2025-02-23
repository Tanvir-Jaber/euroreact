import React from "react";
import { Link } from "react-router-dom";
import style from "../assets/css/custom.css"
import axios from "axios";
import { useEffect, useState } from "react";

function ServiceNewStaff() {
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {

    let url = `${process.env.REACT_APP_API_URI}/service_requisition`;
    let urlTwo = `${process.env.REACT_APP_API_URI}/about_us/4`;
    axios.get(url)
      .then(response => {
        setData(response.data.data);
      })
      .catch(err => {
      });
    axios.get(urlTwo)
      .then(response => {
        setList(response.data.data);
      })
      .catch(err => {
      });
  }, []);
  return (
    <div>
      {/* service area start */}
      <div className="tmp-service-area tmp-section-gapTop">
        <div className="container  text-center">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head">
                <div className="section-sub-title center-title">
                  <span>Hiring and Providing Manpower</span>
                </div>
                <h2 className="title split-collab">
                  Staff Requisition Services
                </h2>
                <p style={{ padding: '5px 20px' }}>
                  At {process.env.REACT_APP_NAME}, we simplify talent acquisition with tailored
                  staffing solutions, from role definition to precise candidate
                  selection. Leveraging industry expertise, we ensure the
                  perfect match to fuel your business growth.
                </p>
              </div>
            </div>
          </div>

          <div className="container  d-flex justify-content-center">
            <div className="content-section ">
              <div className="row gap-0  justify-content-center">

                {
                  data.map(item => (


                    <div className="col-md-4 ">
                      <div className="content-staff-service">
                        <div className="header">
                          <span><i className={`${item.icon}`} aria-hidden="true"></i></span>
                          <h2>{item.name}</h2>
                        </div>
                        <div className="body">
                          {item.description}
                        </div>
                      </div>
                    </div>

                  ))
                }



              </div>
            </div>
          </div>

          <button className="content-staff-service-btn"><Link to="/StaffRequisition">Apply To Hire Manpower</Link> </button>


        </div>
      </div>

      {/* service area end */}
    </div>
  );
}

export default ServiceNewStaff;
