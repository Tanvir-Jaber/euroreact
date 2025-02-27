import React, { useState, useEffect } from "react";
import axios from "axios";
const CompanyQueryOrIssue = (props) => {
    const [data, setData] = useState([]);
    const [tempID, setTempID] = useState([]);

    useEffect(() => {
        console.log(props.id)
        let url = `${process.env.REACT_APP_API_URI}/about_us/${props.id}`;
        setTempID(props.id);
        axios.get(url)
            .then(response => {
                setData(response?.data?.data[0] ?? ""); // Set data from API response
                console.log(data)
            })
            .catch(err => {
                console.log(err);
            });
    }, []);



    return (
        <>
            {
                tempID == 0 ?
                    <div className="" style={{ height: "100%", background: `url(/images/country-04.jpg)` }}>

                    </div>
                    : <div className="" style={{ padding: "50px", height: "100%", background: `url(${process.env.REACT_APP_ASSET_URL}/${data.image})` }}>
                        <h4 className="text-theme-SkinColor">{data.title}</h4>
                        <p className="text-white">{data.description}</p>
                    </div>
            }
            {/* <div className="" style={{ padding: "50px", height: "50vh", background: `url(${process.env.REACT_APP_ASSET_URL}/${data.image})` }}>
                <h4 className="text-theme-SkinColor">{data.title}</h4>
                <p className="text-white">{data.description}</p>
            </div> */}



        </>
    );
};

export default CompanyQueryOrIssue;
