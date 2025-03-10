import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/custom.css"
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
  const chunkSize = 3;
  const chunks = Array(Math.ceil(data.length / chunkSize))
    .fill()
    .map((_, index) => index * chunkSize)
    .map(begin => data.slice(begin, begin + chunkSize));
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
                <p className="sectiontext" style={{ padding: '5px 20px' }}>
                  At {process.env.REACT_APP_NAME}, we simplify talent acquisition with tailored
                  staffing solutions, from role definition to precise candidate
                  selection. Leveraging industry expertise, we ensure the
                  perfect match to fuel your business growth.
                </p>
              </div>
            </div>
          </div>

          <div className="container  d-flex justify-content-center my-5">
            <div className="content-section card">
              <div className=" gap-0  justify-content-center card-body">

                {
                  // Split data into chunks of 3


                  chunks.map((chunk, rowIndex) => (
                    <div className={rowIndex == 0 ? 'border-bottom row' : 'row'} key={rowIndex}>
                      {chunk.map((item, index) => (
                        <div className={(index == 0 || index == 1) ? 'col-md-4 border-right  p-3 ' : 'col-md-4 p-3 '} key={index}>
                          <div className="flip-box">
                            <div className="content-staff-service flip-box-inner ">
                              <div className="header flip-box-front">
                                <span><i className={`${item.icon}`} aria-hidden="true"></i></span>
                                <h2>{item.title} </h2>
                              </div>
                              <div className="body flip-box-back">
                                {item.description}
                              </div>
                            </div>

                          </div>
                        </div>
                      ))}
                    </div>
                  ))
                }



              </div>
            </div>
          </div>

          <button className=" "><Link className="btn btn-primary" to="/StaffRequisition">Apply To Hire Manpower</Link> </button>


        </div>
      </div>

      {/* service area end */}
    </div>
  );
}

export default ServiceNewStaff;
